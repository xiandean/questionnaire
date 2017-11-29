<template>
  <div class="answer-question-list">
    <answer-question-box v-for="question in questions" :key="question.id" :question="question"></answer-question-box>
  </div>
</template>
<script>
import AnswerQuestionBox from '../components/AnswerQuestionBox'
export default {
  props: ['questions'],
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

