<template>
  <div class="btns">
    <div class="btn-create" @touchstart="togglePage()"></div>
    <div class="btn-rule" @touchstart="toggleRule"></div>
  </div>
</template>
<script>
export default {
  methods: {
    toggleRule () {
      this.$emit('toggleRule')
    },
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
.btn-create {
  width: 225px;
  height: 73px;
  position: absolute;
  left: 73px;
  top: 0;
  background: url("../../static/img/p1_btn_create.png") no-repeat;
}
.btn-rule {
  width: 225px;
  height: 73px;
  position: absolute;
  left: 347px;
  top: 0;
  background: url("../../static/img/p1_btn_rule.png") no-repeat;
}
</style>
