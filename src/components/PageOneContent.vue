<template>
  <div class="sub-content">
    <logo></logo>
    <div class="title">
      <div class="girl-sit"></div>
      <div class="girl-stand"></div>
      <div class="title-words"></div>
      <div class="title-icon-01"></div>
      <div class="title-icon-02"></div>
    </div>
    <div class="text"></div>
  </div>
</template>
<script>
import Logo from './PageLogo'
export default {
  components: {
    Logo
  }
}
</script>
<style scoped>
.sub-content {
  width: 100%;
  position: relative;
}
.title {
  width: 100%;
  height: 614px;
  position: relative;
  background: url("../assets/images/p1_title_bg.png") no-repeat;
}
.girl-sit {
  width: 98px;
  height: 191px;
  position: absolute;
  left: 393px;
  top: 79px;
  background: url("../assets/images/p1_girl_sit.png") no-repeat;
}
.girl-stand {
  width: 134px;
  height: 214px;
  position: absolute;
  left: 114px;
  top: 393px;
  background: url("../assets/images/p1_girl_stand.png") no-repeat;
}
.title-words {
  width: 133px;
  height: 97px;
  position: absolute;
  left: 403px;
  top: 501px;
  background: url("../assets/images/p1_title_words.png") no-repeat;
}
.title-icon-01 {
  width: 62px;
  height: 57px;
  position: absolute;
  left: 75px;
  top: 350px;
  background: url("../assets/images/p1_title_icon_01.png") no-repeat;
}
.title-icon-02 {
  width: 70px;
  height: 64px;
  position: absolute;
  left: 515px;
  top: 111px;
  background: url("../assets/images/p1_title_icon_02.png") no-repeat;
}
.text {
  width: 358px;
  height: 142px;
  margin: 12px auto 0;
  background: url("../assets/images/p1_text.png") no-repeat;
}
</style>
