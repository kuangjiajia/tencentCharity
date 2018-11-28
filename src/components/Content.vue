<template lang="pug">
  div.content
    h2.free-lunch(ref="freeLunch") 免费午餐小善大爱
    p.free-lunch-content(ref="freeLunchContent") 达成目标竞猜娱乐场将为小朋友支持37500份免费午餐
    div.contribution-progress(ref="processBar")
      Progress(:value="heartCountConfig[1].count" :max="heartCountConfig[0].count")
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
import Progress from '../common/Progress'
export default {
  name: "Content",
  components: { 
    Progress
  },
  mounted() {
    //判断是不是全面屏,是的话,简单的修改样式,让布局更好看
    if(isFullScreen()) {
      this.init()
    }
  },
  data() {
    return {
      heartCountConfig: [
        {title: "爱心筹集目标数量",count: 15000000,formatCount: formatCount(15000000)},
        {title: "已筹集爱心数量",count: 12348250,formatCount: formatCount(12348250)}
      ],
      contributionConfig: [
        {title: "累计献出的爱心",count: 5600,formatCount: formatCount(5600),cnText: ""},
        {title: "为项目贡献",count: 0.14,formatCount: formatCount(0.14),cnText: " 份午餐"}
      ]
    }
  },
  methods:{
    init() {
      //是全面屏 修改样式
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

.content
  width 92.7vw
  padding-top 3.72vw
  margin 0 auto
  .free-lunch
    font-size 5.2vw
    color white
  .free-lunch-content
    line-height 8vw
    font-size $font-base
  .contribution-progress
    display flex 
    justify-content space-between
    align-items center
    width 100%   
    height 6vw
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
        font-size $font-base
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
        font-size $font-base
        color #7a85af
      .count 
        line-height 15vw
        color #f0f4ff
        span 
          &:nth-child(1)
            font-family kuangjiajia
            font-size 6.2vw
          &:nth-child(2)
            font-size $font-base
  .get-more-heart
    display flex
    align-items center 
    justify-content center
    width 100%
    height 11.5vw
    .get-more-heart-link
      position relative
      font-weight 100
      font-size $font-base
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
