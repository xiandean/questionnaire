<template>
  <div class="answer-question-box components-AnswerQuestionBox">
    <div class="answer-question-title"><img :src="question.question"></div>
      <div class="answer-question-btn-box">
        <a href="javascript:void(0);" v-for="(answer, index) in question.answers" @touchstart="selectAnswer(index, question.answerIndex)" :class="{active: answerIndex === index && !isError, error: question.answerIndex !== index && isError}"><img :src="answer"></a>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isError: false
    }
  },
  props: ['question', 'answerIndex'],
  methods: {
    selectAnswer (index, rightIndex) {
      if (rightIndex !== undefined) {
        if (index !== rightIndex) {
          this.isError = true
        } else {
          this.isError = false
        }
      }
      this.$emit('selectAnswer', index, rightIndex)
    }
  }
}
</script>

<style scoped>
.answer-question-box {
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/answer_box_bg.png") 0 0 no-repeat;
  width: 541px;
  height: 634px;
  position: absolute;
  left: 0;
  top: 0;
}

.answer-question-box .answer-question-btn-box {
  width: 455px;
  margin: 0 auto;
}

.answer-question-box .answer-question-btn-box > a {
  display: block;
  width: 100%;
  height: 97px;
}

.answer-question-box .answer-question-btn-box > a:first-child {
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/a_btn_before_bg.png") 0 0 no-repeat;
  margin-bottom: 10px;
  animation: wave 3s 1s infinite;
}

.answer-question-box .answer-question-btn-box > a:first-child.active {
  background-image: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/a_btn_after_bg.png");
}
.answer-question-box .answer-question-btn-box > a:first-child.error {
  background-image: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/a_btn_error_bg.png");
}

.answer-question-box .answer-question-btn-box > a:last-child {
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/b_btn_before_bg.png") 0 0 no-repeat;
  animation: wave 3s 2s infinite;
}

.answer-question-box .answer-question-btn-box > a:last-child.active {
  background-image: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/b_btn_after_bg.png");
}
.answer-question-box .answer-question-btn-box > a:last-child.error {
  background-image: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/b_btn_error_bg.png");
}
</style>
