<template>
  <div class="content">
    <div class="loading-box">
      <div class="loading-icon"></div>
      <div class="loading-text">loading...</div>
    </div>
  </div>
</template>

<style scoped>
.loading-box {
  width: 197px;
  height: 146px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -98px;
  margin-top: -73px;
}
.loading-icon {
  width: 100%;
  height: 82px;
  background: url("../assets/images/loading_icon.png") no-repeat;
}
.loading-text {
  width: 100%;
  line-height: 60px;
  font-size: 34px;
  color: #fff;
  font-weight: bolder;
  letter-spacing: 1px;
  text-align: center;
  -webkit-text-stroke: 1px #000;
}
</style>
