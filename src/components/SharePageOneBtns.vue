<template>
  <div class="btns">
    <div class="btn-test" @touchstart="togglePage()"></div>
    <div class="btn-award" @touchstart="togglePage(3)"></div>
  </div>
</template>
<script>
export default {
  methods: {
    togglePage (i) {
      this.$emit('togglePage', i)
    }
  }
}
</script>
<style scoped>
.btns {
  width: 100%;
  height: 73px;
  margin-top: 12px;
  position: relative;
}
.btn-test {
  width: 225px;
  height: 113px;
  position: absolute;
  left: 73px;
  top: 0;
  background: url("../assets/images/p1_btn_test.png") no-repeat;
}
.btn-award {
  width: 225px;
  height: 113px;
  position: absolute;
  left: 347px;
  top: 0;
  background: url("../assets/images/p1_btn_award.png") no-repeat;
}
</style>
