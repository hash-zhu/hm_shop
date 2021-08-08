<template>
	<view>
		<view class="news-item" @click ="navigator(item.id)" v-for="item in list" :key="item.id">
			<image :src="item.imgUrl"></image>
			<view class="right">
				<!-- top -->
				<view class="tit"><text v-text="item.title">rightTop</text></view>
				<view class="info">
					<text>发表时间：{{item.year | formatData}}</text>
					<text>浏览次数：{{item.numberViews}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['list'],
		data() {
			return {
				
			}
		},
		methods: {
			navigator(id){
				this.$emit("itemClick",id)
			}
		},
		filters:{
			/* 2015-04-16T03:50:28.000Z 时间过滤器
				getDate()	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
				getDay()	从 Date 对象返回一周中的某一天 (0 ~ 6)。
				getMonth()	从 Date 对象返回月份 (0 ~ 11)。
				getFullYear()	从 Date 对象以四位数字返回年份。
				*/
			formatData(data){
				var nData = new Date()
				nData.setFullYear(parseInt(data))
				const year = nData.getFullYear()
				const month = nData.getMonth().toString().padStart(2,0)
				const date = nData.getDate().toString().padStart(2,0)
				
				// const hours = nData.getHours()
				// const minutes =nData.getMinutes()
				// const seconds = nData.getSeconds()
				// console.log(year+'-'+month+'-'+day+' '+hours+":"+minutes+":"+seconds)
				return year+'-'+month+'-'+date
			}
		}
	}
</script>

<style lang="scss">
.news-item{
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;
		image{
			min-width: 150rpx;
			max-width: 180rpx;
			
			min-height: 150rpx;
			max-height: 240rpx;
		}
		.right{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-left: 15rpx;
			.tit{
				font-size: 30rpx;
			}
			.info{
				font-size: 24rpx;
				text:nth-child(2){
					margin-left: 30rpx;
				}
			}
		}
		
		
	}
</style>
