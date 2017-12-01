import Vue from 'vue'
import VueJsonp from 'vue-jsonp'

Vue.use(VueJsonp)

const wx = global.wx || {}

export default {
  openid: '',
  oid: '',
  user: {nickname: "", headimgurl: ""},
  author: {nickname: "", headimgurl: ""},
  options: {
    link: '', // 分享链接
    title: '默契考验', // 分享标题
    desc: '默契考验主页', // 分享描述
    imgUrl: 'http://news.gd.sina.com.cn/staff/xdgdsina/hina/assets/images/b_logo.png' // 分享图标
    // callback: '', //分享成功回调
  },
  share () {
    Vue.jsonp('http://news.gd.sina.com.cn/market/c/gd/wxjsapi/index.php', {
      url: window.location.href.split('#')[0]
    }).then((res) => {
      console.log(res)
      wx.config({
        debug: false,
        appId: res.data.appId,
        timestamp: res.data.timestamp,
        nonceStr: res.data.nonceStr,
        signature: res.data.signature,
        jsApiList: [
          'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ'
        ]
      })
      wx.ready(() => {
        this.updateShare()
      })
    }).catch((err) => {
      console.log(err)
    })
  },
  updateShare () {
    let options = this.options
    wx.onMenuShareTimeline({
      title: options.title,
      link: options.link || location.href,
      imgUrl: options.imgUrl,
      success: function (res) {
        if (options.callback) {
          options.callback()
        }
      },
      cancel: function (res) {

      }
    })
    wx.onMenuShareAppMessage({
      title: options.title,
      desc: options.desc,
      link: options.link || location.href,
      imgUrl: options.imgUrl,
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        if (options.callback) {
          options.callback()
        }
      },
      cancel: function () {

      }
    })
    wx.onMenuShareQQ({
      title: options.title,
      desc: options.desc,
      link: options.link || location.href,
      imgUrl: options.imgUrl,
      success: function () {
        if (options.callback) {
          options.callback()
        }
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.error(function (res) {
        // alert(JSON.stringify(res));
    })
  },
  getQueryString (name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
    let url = window.location.search.replace(/&amp;(amp;)?/g,"&")
    let r = url.substr(1).match(reg)
    if (r != null) { 
        return unescape(r[2])
    }
    return null
  },
  bind (callback) {
    if (window.localStorage.getItem("wx_openid") !== null) {
      this.openid = window.localStorage.getItem("wx_openid")
      if (callback) {
        callback()
      }
    } else if (this.getQueryString("openid")) {
      this.openid = this.getQueryString("openid")
      window.localStorage.setItem("wx_openid", this.openid)
      if (callback) {
        callback()
      }
    } else {
      if (this.getQueryString("oid")){
        window.location.href='http://interface.gd.sina.com.cn/gdif/gdwx/wxcode?oid='+this.getQueryString("oid")
      }else {
        window.location.href='http://interface.gd.sina.com.cn/gdif/gdwx/wxcode'
      }
    }
  },
  getWeixinInfo (callback) {
    Vue.jsonp('http://interface.gd.sina.com.cn/gdif/gdwx/c_member/', {
      openid : this.openid
    }).then((res) => {
      console.log(res)
      if(!res.error) {
        this.user.nickname = res.data.nickname
        this.user.headimgurl = res.data.headimgurl
        if (this.getQueryString("oid")) {
          let params = this.getQueryString("oid").split(';')
          if (params.length < 4) {
            return false
          }
          this.oid = params[3]
          Vue.jsonp('http://interface.gd.sina.com.cn/gdif/gdwx/c_member/', {
            openid : this.oid
          }).then((res) => {
            console.log(res)
            if(!res.error) {
              this.author.nickname = res.data.nickname
              this.author.headimgurl = res.data.headimgurl
              if (callback) {
                callback()
              }
            }
          }).catch((err) => {
            console.log(err)
          })
        }
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
