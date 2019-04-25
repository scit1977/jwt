import Vue from 'vue'
import App from './App'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
import {post,get} from './utils/http'//自定义 AXIOS GET POST 
Vue.prototype.$post=post
Vue.prototype.$get=get 
new Vue({
	 router, //4.实例化router
  render: h => h(App),
}).$mount('#app')
