<template>
  <div class="content">
    <div class="award-title" v-show="awardTimes === 1"></div>
    <div class="award-title" v-show="awardTimes === 0"></div>
    <div class="award-box">
      <div class="award-rotate"></div>
      <div class="award-point"></div>
    </div>

    <div class="award-share" v-show="isShare" @touchstart="toggleShare">
      <div class="share-tip"></div>
    </div>
    <div class="award-result" v-show="awardResult !== -1">
      <div class="award-result-non"></div>
      <div class="award-result-win">
        <div class="input-code">abcdefg123321</div>
        <div class="code-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShare: true,
      awardTimes: 0,
      awardResult: -1
    }
  },
  methods: {
    toggleShare () {
      this.isShare = !this.isShare
    }
  }
}
</script>

<style scoped>
.award-title {
  width: 454px;
  height: 110px;
  position: absolute;
  left: 99px;
  top: 116px;
}
.award-title:nth-child(1) {
  background: url("../assets/images/award_title_01.png") no-repeat;
}
.award-title:nth-child(2) {
  background: url("../assets/images/award_title_00.png") no-repeat;
}
.award-box {
  width: 626px;
  height: 606px;
  position: absolute;
  left: 4px;
  top: 248px;
  background: url("../assets/images/award_bg.png") no-repeat;
}
.award-rotate {
  width: 517px;
  height: 517px;
  position: absolute;
  left: 64px;
  top: 33px;
  background: url("../assets/images/award_rotate.png") no-repeat;
}
.award-point {
  width: 162px;
  height: 183px;
  position: absolute;
  left: 241px;
  top: 192px;
  background: url("../assets/images/award_point.png") no-repeat;
}

.award-result, .award-share {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
.award-result-non {
  width: 541px;
  height: 476px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -270px;
  margin-top: -288px;
  background: url("../assets/images/award_result_non.png") no-repeat;
}
.award-result-win {
  width: 541px;
  height: 592px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -270px;
  margin-top: -354px;
  background: url("../assets/images/award_result_win.png") no-repeat;
}
.input-code {
  width: 352px;
  height: 52px;
  position: absolute;
  left: 146px;
  top: 281px;
  line-height: 52px;
  text-align: center;
  font-size: 30px;
  color: #000;
  letter-spacing: 2px;
}
.code-btn {
  width: 226px;
  height: 72px;
  position: absolute;
  left: 153px;
  top: 478px;
}

.share-tip {
  width: 292px;
  height: 236px;
  position: absolute;
  right: 10px;
  top: 10px;
  background: url("../assets/images/share_tip.png") no-repeat;
}
</style>
