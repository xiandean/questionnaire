<template>
  <div class="content">
    <div class="loading-box">
      <div class="loading-icon"></div>
      <div class="loading-text">{{loadingText}}</div>
    </div>
  </div>
</template>

<script>
import loadingImages from '../assets/js/loading'
export default {
  data () {
    return {
      count: 0,
      total: 0,
      loadingText: 'loading...'
    }
  },
  methods: {
    onProgress () {
      this.loadingText = Math.floor(this.count / this.total * 100) + '%';
      console.log(this.loadingText)
    },
    onComplete () {
      this.$emit('togglePage')
    }
  },
  created () {
    this.total = loadingImages.home.length
    loadingImages.home.map((src) => {
      let img = new Image()
      img.src = src
      img.onload = () => {
        this.count++
        this.onProgress()
        if (this.count === this.total) {
          this.onComplete()
        }
      }
    })
  }
}
</script>

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
  background: url("../../static/img/loading_icon.png") no-repeat;
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
