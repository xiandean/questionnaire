<template>
  <div class="btns components-SharePageOneBtns">
    <div class="btn-test" @touchstart="togglePage()"></div>
    <!-- <div class="btn-award" @touchstart="togglePage(4)"></div> -->
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
  width: 499px;
  height: 73px;
  position: absolute;
  left: 50%;
  margin-left: -250px;
  top: 0;
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/p1_btn_test.png") no-repeat;
}
.btn-award {
  width: 225px;
  height: 113px;
  position: absolute;
  left: 347px;
  top: 0;
  background: url("http://n.sinaimg.cn/gd/xiaopiqi/answer/p1_btn_award.png") no-repeat;
}
</style>
