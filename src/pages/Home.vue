<template>
  <div class="home">
    <div class="page" v-show="currentPage === 0">
      <loading></loading>
    </div>
    <div class="page" v-show="currentPage === 1">
      <page-one @toggleRule="toggleRule"></page-one>
    </div>
    <div class="page" v-show="currentPage === 2">
      <page-award></page-award>
    </div>
    <div class="page" v-show="currentPage === 3">
      <page-question></page-question>
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
import PageOne from './PageOne'
import Rule from './Rule'
import PageAward from './PageAward'
import PageQuestion from './PageQuestion'
export default {
  name: 'home',
  data () {
    return {
      isGuide: false,
      isRule: false,
      currentPage: 1
    }
  },
  methods: {
    togglePage (i) {
      this.currentPage = i
    },
    toggleRule () {
      this.isRule = !this.isRule
    }
  },
  components: {
    Loading,
    Guide,
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
