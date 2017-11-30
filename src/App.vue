<template>
  <div id="app">
    <!-- <router-view/> -->
    <component :is="$root.route.name"></component>
  </div>
</template>

<script>
import home from '@/pages/Home'
import share from '@/pages/Share'
import guide from '@/pages/Guide'
export default {
  name: 'app',
  components: {
  	guide,
  	home,
  	share
  }
}
</script>
