<template>
	<view>
		<!-- <text>this is goods page</text> -->
		<goods-list @goodsItemClick="getGoodsDetail" :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">已经到底了哟~</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		data() {
			return {
				goods:[],
				page:0,
				flag:false
			}
			
		},onLoad() {
			this.getGoodsList()
		},
		methods: {
			async getGoodsList(callBack){
				const res = await this.$myRequest({
					url:'goodsPageList?page='+this.page
				});
				if(res.data==''){
					this.flag=true
				}
				this.goods = [...this.goods,...res.data];
				
				console.log(res)
				callBack && callBack() //callBack存在就调用，没有就不调用
			},
			// 导航到商品详情页
			getGoodsDetail(id){
				uni.navigateTo({
					url:'../goods-detail/goods-detail?id='+id
				})
				console.log("调用goods了!id="+id)
			}
		},
		components:{
			'goods-list':goodsList
		},
		onReachBottom() {
			console.log("触底了哦---"+ this.page)
			if(this.flag==false){
				this.page++;
				this.getGoodsList();
			}
			
		},
		onPullDownRefresh() {
			console.log("下拉刷新了~")
			this.page=0;
			this.goods=[];
			this.flag=false;
			
			setTimeout(()=>{
			this.getGoodsList(()=>{
				uni.stopPullDownRefresh()
			});
			}, 1000)
		}
	
	}
</script>

<style lang="scss">
.goods_list{
	background: #eee;
}
.isOver{
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background: #EEEEEE;
	}
</style>
