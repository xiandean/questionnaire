<template>
  <div class="content" @touchstart="toggleRule">
    <div class="rule-pic"></div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleRule () {
      this.$emit("toggleRule")
    }
  }
}  
</script>

<style scoped>
.content {
  background-color: rgba(0, 0, 0, 0.85);
}
.rule-pic {
  width: 541px;
  height: 682px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -407px;
  margin-left: -270px;
  background: url("../../static/img/rule.png") no-repeat;
}
</style>
