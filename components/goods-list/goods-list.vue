<template name="goodsList">
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.goodsId" @click="navigator(item.goodsId)">
			<image :src="item.imgUrl">
			</image>
			<view class="price">
				<text>￥{{item.presendPrice}}</text>
				<text>￥{{item.originalPrice}}</text>
			</view>
			<view class="name">
				<text v-text="item.goodsInfo"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"goodsList",
		// props:["goods"],
		props:{
			goods:{
				type:Array
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			navigator(id){
				this.$emit('goodsItemClick',id)
				// console.log('goodsId='+id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	
		.goods_item {
			background: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
	
			image {
				width: 80%;
				height: 150px;
				display: block;
				margin: 0 auto;
			}
	
			.price {
				color: $shop-color;
				font-size: 36rpx;
	
				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}
	
			.name {
				font-size: 28prpx;
				line-height: 50rpx;
				padding-top: 10rpx;
				padding-bottom: 15rpx;
			}
		}
	}
</style>
