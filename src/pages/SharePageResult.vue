<template>
  <div class="content pages-SharePageResult">
    <logo></logo>
    <div class="answer-result-list">
      <div class="answer-result" v-for="(result, index) in results" :key="result.id" v-show="index === metchCount">
        <p class="result-text">你和<span>{{author.nickname}}</span>的默契指数是</p>
        <div class="result-point"><img :src="result.percent"></div>
        <div class="result-content"><img :src="result.content"></div>
      </div>
    </div>
    <div class="result-btn-box">
      <a href="javascript:void(0);" @touchstart="togglePage()"><img src="http://n.sinaimg.cn/gd/xiaopiqi/answer/create_answer_btn.png"></a>
      <a href="javascript:void(0);" @touchstart="togglePage()"><img src="http://n.sinaimg.cn/gd/xiaopiqi/answer/lottery_btn.png"></a>
    </div>
  </div>
</template>

<script>
import Logo from '../components/PageLogo.vue'
import questions from '../assets/js/questions'
import weixin from '../assets/js/weixin'
export default {
  data () {
    return {
      author: weixin.author,
      results: questions.results
    }
  },
  props: ['metchCount'],
  methods: {
    togglePage () {
      window.location.href = 'http://news.gd.sina.com.cn/staff/whrgdsina/interface/2017/xiao_pi_qi/answer/home'
    }
  },
  components: {
    Logo
  }
}
</script>

<style scoped>
.answer-result-list {
  width: 100%;
  height: 768px;
  position: relative;
}
.answer-result {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.answer-result .result-text {
  font-weight: bold;
  color: #000;
  font-size: 32px;
  text-align: center;
  margin-bottom: 25px;
  margin-top: 20px;
}

.answer-result .result-point {
  text-align: center;
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/result_point_bg.png") center no-repeat;
  width: 280px;
  margin: 0 auto 25px;
}

.answer-result .result-content {
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/result_content_bg.png") 0 0 no-repeat;
  width: 541px;
  height: 557px;
  margin: 0 auto 45px;
}

.result-btn-box {
  display: flex;
  display:-webkit-flex;
  justify-content: space-around;
}
</style>
