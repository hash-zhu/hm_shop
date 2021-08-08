<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view :class="activeNum===index?'active':''" v-for="(item,index) in data" v-text="item.title" @click="activeClickShow(index,item.id)"></view>
		
		</scroll-view>
		<scroll-view class="right" scroll-y="true">
			
			<view class="items" v-for="(item,index) in secondData" :key="index">
				<image :src="item.productUrl" @click="previewImage(item.productUrl)"></image>
				<text v-text="item.productInfo"></text>
			</view>
			<text v-if="secondData.length===0" style="text-align: center;"><h3>暂时没有数据哦~</h3></text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			data:[],
			activeNum:0,
			secondData:[]
			}
		},
		methods: {
			activeClickShow(index,id){
				this.activeNum=index;
				// console.log(id)
				this.secondData = this.data[id].products
				// console.log(this.secondData)
				// console.log(this.data[id].products)
				
			},
			async getProductTyep(){
				const res = await this.$myRequest({
					url:'/productType/getAll'
				});
				// console.log(res.data)
				this.data=res.data;
				if(this.activeNum===0){
					this.secondData = this.data[this.activeNum].products
				}
			},
			previewImage(currentUrl){
				const urls = this.secondData.map(item=>{
					return item.productUrl
				})
				// console.log(urls)
				uni.previewImage({
					urls:urls,
					current:currentUrl
				})
			}
		},
		onLoad() {
			this.getProductTyep()
		}
		
	}
</script>

<style lang="scss">
	page {
		height: 100%;

		.pics {
			height: 100%;
display: flex;
			.left {
				width: 200rpx;
				height: 100%;
				border-right: 1px solid #eee;
				view {
					height: 60px;
					line-height: 60px;
					color: #333;
					text-align: center;
					font-size: 30rpx;
					border-top: 1px solid #eee;
				}
				.active{
					background: $shop-color;
					color: #fff;
				}
			}
			.right{
				height: 100%;
				width: 530rpx;
				margin: 10rpx auto;
				.items{
					image{
						width: 520rpx;
						height: 520rpx;
						border-radius: 5px;
					}
					text{
						font-size: 30rpx;
						line-height: 60rpx;
						
					}
				}
			}
		}
	}
</style>
