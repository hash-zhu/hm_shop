<template>
	<view>
		<uni-forms :modelValue="goodsData" >
			<uni-forms-item  required label="商品图片" name="imgUrl">
				<uni-easyinput  type="text" v-model="goodsData.imgUrl" placeholder="请输入图片链接地址"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item  required label="商品原价" name="originalPrice">
				<uni-easyinput type="text" v-model="goodsData.originalPrice" placeholder="请输入商品原价"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item required label="商品现价" name="presendPrice">
				<uni-easyinput type="text" v-model="goodsData.presendPrice" placeholder="请输入商品现价"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item  required label="商品描述信息" name="goodsInfo">
				<uni-easyinput type="text" v-model="goodsData.goodsInfo" placeholder="请输入商品描述信息"></uni-easyinput>
			</uni-forms-item>
		</uni-forms>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				goodsData:{
					imgUrl:'',
					presendPrice:0,
					originalPrice:0,
					goodsInfo:''
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
