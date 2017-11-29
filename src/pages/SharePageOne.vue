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