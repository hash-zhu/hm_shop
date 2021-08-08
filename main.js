import Vue from 'vue'
import App from './App'
import {myRequest} from 'util/api.js'

Vue.prototype.$myRequest=myRequest
Vue.filter("formatDate",(data)=>{
			var nData = new Date()
			nData.setFullYear(parseInt(data))
			const year = nData.getFullYear()
			const month = nData.getMonth().toString().padStart(2,0)
			const date = nData.getDate().toString().padStart(2,0)
			return year+'-'+month+'-'+date
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
