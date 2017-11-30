// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

import weixin from './assets/js/weixin'

import './assets/css/common.css'

Vue.config.productionTip = false

let route = {}
let oid = weixin.getQueryString('oid')
if (!oid) {
	route.name = 'guide'
} else {
	route.params = {}
	oid = oid.split(';')
	if (oid.length === 1) {
		route.name = 'home'
	} else {
		route.name = 'share'
		route.params.questions = oid[1]
		route.params.answers = oid[2]
	}
	route.params.oid = oid[0]

	if (route.params.oid !== 'official') {
		route.name = 'guide'
	}
}

weixin.share()

weixin.bind(() => {
  
  weixin.getWeixinInfo()
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    data: {
    	route: route
    },
    // router,
    template: '<App/>',
    components: { App }
  })
})
