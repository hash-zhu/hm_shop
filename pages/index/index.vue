<template>
	<view class="home">
		<swiper indicator-dots="true" circular="true">
			<swiper-item v-for="item in swipers" :key='item.carouselId'>
				<image :src="item.carouselUrl"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text v-text="item.title"></text>
			</view>
			
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @goodsItemClick="getGoodsDetail" :goods="goods"></goods-list>
		</view>
	</view>
</template>
<script>
import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs:[
					{
						icon:'iconfont icon-ziyuan',
						title:'黑马超市',
						path:'/pages/goods/goods'
					},
					{
						icon:'iconfont icon-guanyuwomen',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon:'iconfont icon-tupian',
						title:'社区图片',
						path:'/pages/pictures/pictures'
					},
					{
						icon:'iconfont icon-shipin',
						title:'学习视频',
						path:'/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers(),
			this.getHotGoods()
		},
		components:{
			'goods-list':goodsList
		},
		methods: {
			// 获取轮播图的数据
			async getSwipers() {
				// console.log("获取轮播图的数据");
				// uni.request({
				// 	url:"http://localhost:8086/",
				// 	// data:"",
				// 	success:(res)=>{
				// 		console.log(res)
				// 		if(res.statusCode==!200){
				// 			return uni.showToast({
				// 				title:"获取数据失败"
				// 			})	
				// 		}
				// 		this.swipers=res.data
				// 	}
				// })
				const res = await this.$myRequest({
					url: ""
				});
				this.swipers = res.data;
				console.log(res);
			},
			// 获取热门商品数据
			async getHotGoods (){
				const res = await this.$myRequest({
					url:"goodsList"
				});
				this.goods=res.data;
				console.log(res);
			},
			// 导航点击的处理函数
			navItemClick(path){
				// console.log(path);
				uni.navigateTo({
					url:path
				})
			},
			// 导航到商品详情页
			getGoodsDetail(id){
				uni.navigateTo({
					url:'../goods-detail/goods-detail?id='+id
				})
				console.log("调用index了!id="+id)
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;

				text {
					font-size: 30rpx;
				}

				view {
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				.font-tupian {
					font-size: 45rpx;
				}
			}
		}

		.hot_goods {
			margin-top: 10px;
			overflow: hidden;
			background: #eee;

			.tit {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px; // 文字间距
				background: #fff;
				margin: 7px 0;
			}
			
		}

	}
</style>
