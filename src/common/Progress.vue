<template lang="pug">
  progress.progress-bar(v-bind:max="max" v-bind:value="progressValue") 

</template>
<script>
  var timer = null
  var speed = 15
  export default {
    name: "Progress",
    props: {
      value: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        progressValue: 0,
        maxValue: this.value
      }
    },
    mounted() {
      if(this.value > this.progressValue) {
        setTimeout(() => {
          this.progressValue = this.progressValue + (this.max/100)
          speed += 0.3
        },speed)
      }
    },
    beforeUpdate() {
      if(this.value > this.progressValue) {
        setTimeout(() => {
          this.progressValue = this.progressValue + (this.max/200)
          speed -= 0.3
        },speed)
      }
    },
  }
</script>
<style lang="stylus">
.progress-bar
  display block
  width 90%
  height 1.4vw
  background-color $bg-color-highlight
  color #ee503f
  &::-webkit-progress-bar
    background-color $bg-color-highlight
    border-radius 0.8vw 
  &::-webkit-progress-value
    background-color $progress-value  
    border-radius 0.8vw 
  &::-webkit-progress-inner-element 
    border-radius 0.8vw 
</style>