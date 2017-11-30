<template>
  <div class="answer-index">
    <div class="answer-index-title"></div>

    <div class="answer-index-progress">
        <div class="head"><img :src="user.headimgurl"><div class="head-bg"></div></div>
        <div class="progress-box">
            <div class="progress-num" :style="{left: Math.max(-5, 20 + (metchCount - 1) * 69) + 'px'}">
                <p><b>{{percent}}%</b></p>
                <div class="triangle"></div>
            </div>
            <div class="progress-bar">
                <span v-for="i in metchCount"></span>
            </div>
        </div>
        <div class="head"><img :src="author.headimgurl"><div class="head-bg"></div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['metchCount', 'user', 'author'],
  computed: {
    percent () {
      return this.metchCount * 20
    }
  },
  created () {
    console.log(this.user, this.author)
  }
}
</script>

<style scoped>
.answer-index {
  width: 100%;
  margin-top: 18px;
  margin-bottom: 18px;
  position: relative;
}
.answer-index-title {
  background: url("../../static/img/answer_index_title.png") 0 0 no-repeat;
  width: 640px;
  height: 62px;
}

.answer-index-progress {
  width: 530px;
  height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.answer-index-progress .head {
  position: relative;
}

.answer-index-progress .head img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border:3px solid #000;
  background-color: #fff;
  position: relative;
  z-index: 1;
}

.answer-index-progress .head .head-bg {
  box-sizing: border-box;
  background-color: #e8e62f;
  border: 3px solid #000;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  left: 4px;
  top: 4px;
}

.answer-index-progress .progress-box {
  position: relative;
}

.answer-index-progress .progress-box .progress-num {
  position: absolute;
  left: 20px;
  top: -22px;
  color: #a23eff;
  font-weight: bold;
}

.answer-index-progress .progress-box .progress-num .triangle {
  width:0;
  height:0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 10px solid #a23eff;
  margin: 0 auto;
}

.answer-index-progress .progress-box .progress-bar {
  width: 358px;
  height: 20px;
  box-sizing: border-box;
  border: 3px solid #000;
  border-radius: 8px;
  background-color: #fff;
  padding: 4px;
  display: flex;
  justify-content: flex-start;
}

.answer-index-progress .progress-box span {
  display: block;
  width: 68px;
  height: 100%;
  background-color: #a23eff;
  margin-right: 1px;
}

.answer-index-progress .progress-box span:first-child {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.answer-index-progress .progress-box span:last-child {
  margin-right: 0;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>
