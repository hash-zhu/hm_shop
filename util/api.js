const BaseUrl="http://localhost:8086/"
export const myRequest=(Option)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BaseUrl+Option.url,
			method:Option.method || 'GET',
			data: Option.data || {},
			success: (res) => {
				if(res.statusCode==!200){
					return uni.showToast({
						title:"获取数据失败"
					})	
				}
				resolve(res)
			},
			fail: (err) => {
				return uni.showToast({
					title:"请求接口失败"
				})	
				reject(err)
			}
			
		})
	})
}