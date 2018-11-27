<template lang="pug">
  div.content
    h2.free-lunch(ref="freeLunch") 免费午餐小善大爱
    p.free-lun-content(ref="freeLunchContent") 达成目标竞猜娱乐场将为小朋友支持37500份免费午餐
    div.contribution-progress(ref="processBar")
      progress.progress-bar(v-bind:max="heartCountConfig[0].count" v-bind:value="heartCountConfig[1].count") 
      span.period 
        span 01
        span 期
    article.heart-count(ref="heartCount")
      section.heart-count-item(v-for="item in heartCountConfig" :key="item.title")
        div.title {{item.title}}
        div.count {{item.formatCount}}
    article.mine-contribution(ref="contribution")
      section.contribution-item(v-for="item in contributionConfig" :key="item.title") 
        div.title {{item.title}}
        div.count 
          span {{item.formatCount}}
          span {{item.cnText}}
    p.get-more-heart(ref="getMoreHeart")
      a.get-more-heart-link(href="#") 获取更多爱心
        span.arrow
</template>
<script>
import { formatCount , isFullScreen} from '@utils/index.js'

export default {
  name: "Content",
  mounted() {
    if(isFullScreen()) {
      this.init()
    }
  },
  data() {
    return {
      heartCountConfig: [
        {title: "爱心筹集目标数量",count: 15000000,formatCount: formatCount(15000000)},
        {title: "已筹集爱心数量",count: 1234825,formatCount: formatCount(1234825)}
      ],
      contributionConfig: [
        {title: "累计献出的爱心",count: 5600,formatCount: formatCount(5600),cnText: ""},
        {title: "为项目贡献",count: 0.14,formatCount: formatCount(0.14),cnText: " 份午餐"}
      ]
    }
  },
  methods:{
    init() {
      this.$refs.getMoreHeart.style.margin="2vw 0"
      this.$refs.contribution.style.margin="2vw 0"
      this.$refs.heartCount.style.margin="2vw 0"
      this.$refs.processBar.style.margin="1vw 0"
      this.$refs.freeLunchContent.style.margin="1vw 0"
    }
  }
}
</script>
<style lang="stylus" scoped>
@font-face  
  font-family kuangjiajia 
  src url('../assets/number.ttf')  
  font-weight normal 
  font-style normal  

.content
  width 92.7vw
  padding-top 3.72vw
  margin 0 auto
  .free-lunch
    font-size 5.2vw
    color white
  .free-lun-content
    line-height 8vw
    font-size 3.7vw
    color #585e73
  .contribution-progress
    display flex 
    justify-content space-between
    align-items center
    width 100%   
    height 6vw
    .progress-bar
      display block
      width 90%
      height 1.1vw
      background-color #23262d
      color #ee503f
      &::-webkit-progress-bar
        background-color #23262d
        border-radius 0.8vw 
      &::-webkit-progress-value
        background-color #ee503f    
        border-radius 0.8vw 
      &::-webkit-progress-inner-element 
        border-radius 0.8vw 
    .period 
      span
        &:nth-child(1)
          font-family kuangjiajia
          font-size 4.3vw
        &:nth-child(2)
          font-size 3vw           
  .heart-count 
    display flex
    height 18vw
    width 100%
    margin-top 2vw
    section
      flex 1
      .title
        font-size 3.7vw
      .count 
        line-height 12vw
        font-family kuangjiajia
        font-size 6.7vw       
  .mine-contribution
    display flex
    width 100%
    height 25vw
    background-color #4b526d
    border-radius 2vw
    section.contribution-item
      flex 1
      height 17vw
      padding 4vw
      .title 
        font-size 3.7vw
        color #656b83
      .count 
        line-height 15vw
        span 
          color #f0f4ff
          &:nth-child(1)
            font-family kuangjiajia
            font-size 6.2vw
          &:nth-child(2)
            font-size 3.7vw
  .get-more-heart
    display flex
    align-items center 
    justify-content center
    width 100%
    height 11.5vw
    .get-more-heart-link
      position relative
      font-weight 100
      font-size 3.7vw
      .arrow
        position absolute
        top 1.9vw
        right -1.8vw
        width 1.2vw
        height 1.2vw
        border-top 1.2px solid #ffffff
        border-right 1.2px solid #ffffff
        transform rotate(45deg)
</style>
