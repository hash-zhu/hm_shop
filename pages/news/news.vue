<template>
	<view>
		<view class="news">
			<news-item @itemClick="getDetail" :list="newsList"></news-item>
		</view>
	</view>
</template>

<script>
	import newsItem from "../../components/news-item/news-item.vue"
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		components:{
		"news-item" :newsItem
		},
		methods: {
		async getNews(){
				const res = await this.$myRequest({
					url:"newsInfo/getAll"
				});
				console.log(res.data)
				this.newsList = res.data
				console.log(this.newsList)
			},
			getDetail(id){
				uni.navigateTo({
					url:'../news-detail/news-detail?id='+id
				})
				// console.log("调用了getDetail了！")
				console.log(id)
			}
		},
		onLoad() {
			this.getNews()
		}
	}
</script>

<style lang="scss">
.news{
	
	
}
</style>
