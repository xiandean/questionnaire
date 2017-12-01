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

function musicHandler () {
  let musicWrap = document.getElementById('musicWrap')
  let music = document.getElementById('bgMusic')
  if (route.name === 'guide') {
    music.pause()
    musicWrap.classList.remove('active')
  }
  musicWrap.addEventListener('touchstart', () => {
    if (music.paused) {
      music.play()
      musicWrap.classList.add('active')
    } else {
      music.pause()
      musicWrap.classList.remove('active')
    }
  }, false)
}

weixin.bind(() => {
  if (route.name === 'share') {
    weixin.options.desc = '默契考验分享页'
    weixin.options.link = 'http://news.gd.sina.com.cn/staff/whrgdsina/interface/2017/xiao_pi_qi/answer/home?oid=' + weixin.getQueryString('oid')
  }

  if (route.name === 'guide') {
    weixin.share()
  } else {
    weixin.share('bgMusic')
  }

  musicHandler()

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
