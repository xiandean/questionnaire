<template>
  <div class="answer-question-list">
    <answer-question-box v-for="question in questions" :key="question.id" :question="question" :answerIndex="answerIndex" v-show="question.id === questionId" @selectAnswer="selectAnswer"></answer-question-box>
  </div>
</template>
<script>
import AnswerQuestionBox from '../components/AnswerQuestionBox'
export default {
  props: ['questions', 'questionId', 'answerIndex'],
  methods: {
    selectAnswer (answerIndex, rightAnswerIndex) {
      this.$emit('selectAnswer', answerIndex, rightAnswerIndex)
    },
    nextQuestion () {
      this.$emit('nextQuestion')
    },
    changeQuestion () {
      this.$emit('changeQuestion')
    }
  },
  components: {
    AnswerQuestionBox
  }
}
</script>
<style scoped>
.answer-question-list {
  width: 541px;
  height: 634px;
  position: relative;
  margin: 0 auto;
}
</style>

