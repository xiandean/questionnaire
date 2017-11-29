<template>
  <div class="content">
    <logo></logo>
    <div class="answer-create-title"></div>
    <answer-question-list :questions="list"></answer-question-list>
    <div class="switch-box">
      <a href="#" class="change-btn"><img src="../assets/images/answer_change_btn.png"></a>
      <a href="#" class="next-btn"><img src="../assets/images/answer_next_btn.png"></a>
      <!--<a href="#" class="created-btn"><img src="../assets/images/answer_created_btn.png"></a>-->
    </div>
  </div>
</template>

<script>
import Logo from '../components/PageLogo'
import AnswerQuestionList from '../components/AnswerQuestionList'
import questions from '../assets/js/questions'
export default {
  data () {
    return {
      list: questions.list
    }
  },
  components: {
    Logo,
    AnswerQuestionList
  }
}
</script>

<style scoped>
.answer-create-title {
  background: url("../assets/images/answer_create_title.png") 0 0 no-repeat;
  width: 394px;
  height: 110px;
  margin: 20px auto 0;
}
.switch-box {  
  width: 100%;
  margin-top: 35px;
  display: flex;
  justify-content: space-around;
}

.switch-box > a {
  display: block;
}
</style>