<template>
  <div class="content">
    <page-one-content></page-one-content>
    <share-page-one-btns @togglePage="togglePage"></share-page-one-btns>
  </div>
</template>
<script>
import PageOneContent from '../components/PageOneContent'
import SharePageOneBtns from '../components/SharePageOneBtns'
export default {
	methods: {
    togglePage (i) {
      this.$emit('togglePage', i)
    }
  },
  components: {
    PageOneContent,
    SharePageOneBtns
  }
}
</script>
<style scoped>
@media only screen and (min-aspect-ratio: 320/480) {
  .content {
    transform: scale(0.95);
    transform-origin: center top;
  }
}
</style>