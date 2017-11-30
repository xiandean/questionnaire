<template>
  <div class="home">
    <div class="page " v-show="currentPage === 0">
      <loading @togglePage="togglePage"></loading>
    </div>
    <div class="page" v-show="currentPage === 1">
      <page-one @toggleRule="toggleRule" @togglePage="togglePage"></page-one>
    </div>
    <div class="page" v-show="currentPage === 2">
      <page-question @togglePage="togglePage" :metchCount="metchCount"></page-question>
    </div>
    <div class="page" v-show="currentPage === 3">
      <page-award></page-award>
    </div>
    <div class="page" v-show="isRule">
      <rule @toggleRule="toggleRule"></rule>
    </div>
  </div>
</template>
<script>
import Loading from './Loading'
import PageOne from './PageOne'
import Rule from './Rule'
import PageAward from './PageAward'
import PageQuestion from './PageQuestion'
export default {
  name: 'home',
  data () {
    return {
      isRule: false,
      currentPage: 0,
      metchCount: 0
    }
  },
  methods: {
    togglePage (i) {
      if (i !== undefined) {
        this.currentPage = i
      } else {
        this.currentPage++
      }
    },
    toggleRule () {
      this.isRule = !this.isRule
    }
  },
  components: {
    Loading,
    PageOne,
    Rule,
    PageAward,
    PageQuestion
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
