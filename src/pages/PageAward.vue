<template>
  <div class="content pages-PageAward">
    <div class="award-title" v-show="awardTimes === 1"></div>
    <div class="award-title" v-show="awardTimes === 0"></div>
    <div class="award-box">
      <div class="award-rotate" ref="rotate"></div>
      <div class="award-point" @touchstart="awardStart"></div>
    </div>

    <div class="award-share" v-show="isShare" @touchstart="toggleShare">
      <div class="share-tip"></div>
    </div>
    <div class="award-result" v-show="awardResult !== -1">
      <div class="award-result-non" v-show="awardResult === 0"  @touchstart="awardResult = -1"></div>
      <div class="award-result-win" v-show="awardResult !== 0">
        <div class="input-code">{{awardCode}}</div>
        <div class="code-btn" @touchstart="wxClose"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {getNum, getPrize} from '../assets/js/api'
import weixin from '../assets/js/weixin'
export default {
  data () {
    return {
      isShare: true,
      awardTimes: 0,
      awardResult: -1,
      awardCode: '',
      isAwarded: false
    }
  },
  methods: {
    toggleShare () {
      this.isShare = !this.isShare
    },
    getRandom (a, b) {
      return Math.floor(Math.random() * (b - a) + a)
    },
    awardHandler (result) {
      let AwardData = {
        none:   [{
          min: 65,
          max: 115
        },{
          min: 185,
          max: 235
        },{
          min: 305,
          max: 355
        }],
        first: [{
          min: 125,
          max: 175
        }],
        second:  [{
          min: 245,
          max: 295
        }],
        third: [{
          min: 5,
          max: 55
        }]
      };

      let num = result.award
      let data = []             
      if(num === 0) {
        data = AwardData.none
      }else if(num === 1) {
        data = AwardData.first
      }else if(num === 2) {
        data = AwardData.second
      }else if(num === 3) {
        data = AwardData.third
      }

      let area = data[this.getRandom(0, data.length)]
      let rotate = this.getRandom(area.min, area.max)
      rotate += this.getRandom(5, 10) * 360
      let duration = parseInt(rotate / 450 * 10) / 10
      this.$refs.rotate.style.webkitTransform = 'rotate('+rotate+'deg)'
      this.$refs.rotate.style.transition = '-webkit-transform ' + duration + 's cubic-bezier(0.25,0.1,0.25,1) 0s'


      this.$refs.rotate.addEventListener('webkitTransitionEnd', () => {
        setTimeout(() => {
          this.awardResult = num
          this.isAwarded = true
        }, 1000)
      }, false)
    },
    awardStart () {
      if (this.awardTimes <= 0) {
        if (this.isAwarded) {
          this.awardResult = 0
        }
        return false
      } 
      this.awardTimes--
      let data = {
        openid: weixin.openid , 
        token: window.token || '', 
        nickname: weixin.user.nickname, 
        headimgurl: weixin.user.headimgurl
      }
      getPrize(data).then((res) => {
        console.log(res)
        let result = {
          isAwarded: false,
          award: 0
        }
        if (res.status) {
          if (res.data.prize_data) {
            result.isAwarded = true
            result.award = parseInt(res.data.prize_data.prize_id)
            this.awardCode = res.data.prize_data.prize_code
          } else {
            result.award = parseInt(res.data.prize_id)
            this.awardCode = res.data.prize_code
          }
        }

        this.awardHandler(result)
      })
    },
    wxClose () {
      WeixinJSBridge.call('closeWindow');
    }
  },
  created () {
    getNum({openid: weixin.openid}).then((res) => {
      console.log(res)
      if (res.status) {
        this.awardTimes = res.data
        if (this.awardTimes <= 0) {
          this.isAwarded = true
        }
      } 
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.award-title {
  width: 454px;
  height: 110px;
  position: absolute;
  left: 99px;
  top: 116px;
}
.award-title:nth-child(1) {
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/award_title_01.png") no-repeat;
}
.award-title:nth-child(2) {
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/award_title_00.png") no-repeat;
}
.award-box {
  width: 626px;
  height: 606px;
  position: absolute;
  overflow: hidden;
  left: 4px;
  top: 248px;
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/award_bg.png") no-repeat;
}
.award-rotate {
  width: 517px;
  height: 517px;
  position: absolute;
  left: 64px;
  top: 33px;
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/award_rotate.png") no-repeat;
}
.award-point {
  width: 162px;
  height: 183px;
  position: absolute;
  left: 241px;
  top: 192px;
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/award_point.png") no-repeat;
}

.award-result, .award-share {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
}
.award-result-non {
  width: 100%;
  height: 763px;
  position: absolute;
  left: 0;
  top: 0;
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/award_result_non.png") no-repeat;
}
.award-result-win {
  width: 541px;
  height: 592px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -270px;
  margin-top: -354px;
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/award_result_win.png") no-repeat;
}
.input-code {
  width: 352px;
  height: 52px;
  position: absolute;
  left: 146px;
  top: 281px;
  line-height: 52px;
  text-align: center;
  font-size: 30px;
  color: #000;
  letter-spacing: 2px;
}
.code-btn {
  width: 226px;
  height: 72px;
  position: absolute;
  left: 153px;
  top: 478px;
}

.share-tip {
  width: 475px;
  height: 346px;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 999;
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/share_tip.png") no-repeat;
}
</style>
