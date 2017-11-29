<template>
  <div class="content">
    <page-one-content></page-one-content>
    <page-one-btns @toggleRule="toggleRule" @togglePage="togglePage"></page-one-btns>
  </div>
</template>
<script>
import PageOneContent from '../components/PageOneContent'
import PageOneBtns from '../components/PageOneBtns'
export default {
  methods: {
    toggleRule () {
      this.$emit('toggleRule')
    },
    togglePage (i) {
      this.$emit('togglePage', i)
    }
  },
  components: {
    PageOneContent,
    PageOneBtns
  }
}
</script>
