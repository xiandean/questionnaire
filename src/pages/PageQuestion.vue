<template>
  <div class="content">
    <logo></logo>
    <div class="answer-create-title" v-if="$route.name === 'home'"></div>
    <answer-index v-if="$route.name === 'share'" :metchCount="metchCount" :user="user" :author="author"></answer-index>
    <answer-question-list :questions="allQuestions" :questionId="questionId" :answerIndex="answerIndex" @selectAnswer="selectAnswer" @nextQuestion="nextQuestion"></answer-question-list>
    <div class="switch-box" v-if="$route.name === 'home'">
      <a href="javascript:void(0);" class="change-btn" @touchstart="changeQuestion"><img src="../assets/images/answer_change_btn.png"></a>
      <a href="javascript:void(0);" class="next-btn" @touchstart="nextQuestion" v-show="count < 4"><img src="../assets/images/answer_next_btn.png"></a>
      <a href="javascript:void(0);" class="created-btn" @touchstart="nextQuestion" v-show="count >= 4"><img src="../assets/images/answer_created_btn.png"></a>
    </div>
  </div>
</template>

<script>
import Logo from '../components/PageLogo'
import AnswerIndex from '../components/AnswerIndex'
import AnswerQuestionList from '../components/AnswerQuestionList'
import questions from '../assets/js/questions'
import weixin from '../assets/js/weixin'
export default {
  beforeCreate () {
    this.questions = questions.list.concat([])
  },
  data () {
    return {
      user: weixin.user,
      author: weixin.author,
      questionId: 0,
      answerIndex: -1,
      count: 0,
      selected: []
    }
  },
  props: ['metchCount'],
  computed: {
    allQuestions () {
      if (this.$route.name === 'share') {
        this.updateShareQuestions()
      }
      return this.questions.concat([])
    }
  },
  methods: {
    selectAnswer (answerIndex, rightAnswerIndex) {
      if (rightAnswerIndex !== undefined) {
        if (this.answerIndex === -1) {
          this.answerIndex = rightAnswerIndex
          if (answerIndex === this.answerIndex) {
            this.$emit('setMetchCount', this.metchCount + 1)
          }
          setTimeout(() => {
            this.nextQuestion()
          }, 500)
        }
      } else {
        this.answerIndex = answerIndex
      }
    },
    nextQuestion () {
      if (this.answerIndex === -1) {
        return false
      }

      this.questions.map((item, index) => {
        if (item.id === this.questionId) {
          let question = this.questions.splice(index, 1)[0]
          question.answerIndex = this.answerIndex
          this.selected.push(question)
          this.count++
          if (this.count === 5) {
            this.$emit('togglePage')
            return false
          }
          this.answerIndex = -1
          if (this.questions.length > 0) {
            this.questionId = this.questions[0].id
          }
        }
      })
    },
    changeQuestion () {
      if (this.questions.length > 1) {
        this.questions.push(this.questions.shift())
        this.questionId = this.questions[0].id
        this.answerIndex = -1
      }
    },
    updateShareQuestions () {
      let questionIds = this.$route.params.questions
      let answerIndexs = this.$route.params.answers
      let ids = []
      let indexs = []
      for (let i = 0; i < questionIds.length; i++) {
        let id = parseInt(questionIds.charAt(i))
        if (!isNaN(id)) {
          ids.push(id)
        }
      }
      for (let i = 0; i < answerIndexs.length; i++) {
        let index = parseInt(answerIndexs.charAt(i))
        if (!isNaN(index)) {
          indexs.push(index)
        }
      }
      let result = []
      this.questions.map((item) => {
        if (ids.indexOf(item.id) !== -1) {
          result.push(Object.assign({}, item))
        }
      })
      result.map((item, index) => {
        item.answerIndex = indexs[index]
      })
      this.questions = result
      this.questionId = result[0].id
    }
  },
  components: {
    Logo,
    AnswerIndex,
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