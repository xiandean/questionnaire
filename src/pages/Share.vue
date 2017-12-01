<template>
  <div class="share">
    <div class="page" v-show="currentPage === 0">
      <loading @togglePage="togglePage"></loading>
    </div>
    <div class="page" v-show="currentPage === 1">
      <share-page-one @togglePage="togglePage"></share-page-one>
    </div>
    <div class="page" v-show="currentPage === 2">
      <page-question @togglePage="togglePage" @setMetchCount="setMetchCount" :metchCount="metchCount"></page-question>
    </div>
    <div class="page" v-show="currentPage === 3">
      <share-page-result @togglePage="togglePage" :metchCount="metchCount"></share-page-result>
    </div>
    <!-- <div class="page" v-show="currentPage === 4">
      <page-award></page-award>
    </div> -->
    <div class="page" v-show="isRule">
      <rule></rule>
    </div>
  </div>
</template>

<script>
import Loading from './Loading'
import SharePageOne from './SharePageOne'
import Rule from './Rule'
// import PageAward from './PageAward'
import PageQuestion from './PageQuestion'
import SharePageResult from './SharePageResult'
export default {
  name: 'share',
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
    setMetchCount (val) {
      this.metchCount = val
    }
  },
  components: {
    Loading,
    SharePageOne,
    Rule,
    // PageAward,
    PageQuestion,
    SharePageResult
  }
}
</script>
<style scoped>
.share {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
