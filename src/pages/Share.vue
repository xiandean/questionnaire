<template>
  <div class="share">
    <div class="page" v-show="currentPage === 0">
      <loading></loading>
    </div>
    <div class="page" v-show="currentPage === 1">
      <share-page-one @togglePage="togglePage"></share-page-one>
    </div>
    <div class="page" v-show="currentPage === 2">
      <page-question @togglePage="togglePage"></page-question>
    </div>
    <div class="page" v-show="currentPage === 3">
      <page-award></page-award>
    </div>
    <div class="page" v-show="currentPage === 4">
      <share-page-result></share-page-result>
    </div>
    <div class="page" v-if="isGuide">
      <guide></guide>
    </div>
    <div class="page" v-show="isRule">
      <rule></rule>
    </div>
  </div>
</template>

<script>
import Loading from './Loading'
import Guide from './Guide'
import SharePageOne from './SharePageOne'
import Rule from './Rule'
import PageAward from './PageAward'
import PageQuestion from './PageQuestion'
import SharePageResult from './SharePageResult'
export default {
  name: 'share',
  data () {
    return {
      isGuide: false,
      isRule: false,
      currentPage: 1
    }
  },
  methods: {
    togglePage (i) {
      if (i !== undefined) {
        this.currentPage = i
      } else {
        this.currentPage++
      }
    }
  },
  components: {
    Loading,
    Guide,
    SharePageOne,
    Rule,
    PageAward,
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
