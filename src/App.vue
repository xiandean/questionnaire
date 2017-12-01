<template>
  <div id="app">
    <!-- <router-view/> -->
    <component :is="$root.route.name"></component>
    <orient-layer></orient-layer>
  </div>
</template>

<script>
import home from '@/pages/Home'
import share from '@/pages/Share'
import guide from '@/pages/Guide'
import orientLayer from '@/components/orientLayer'
export default {
  name: 'app',
  components: {
  	guide,
  	home,
  	share,
    orientLayer
  }
}
</script>
