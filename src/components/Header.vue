<template lang="pug">
  header
    div.banner
      img.banner-img(src="@assets/banner.png")
      img.logo(src="@assets/logo.png")
      img.tab(src="@assets/tab.png")
</template>
<script>
export default {
  name: "Header"
}
</script>
<style lang="stylus" scoped>
header
  .banner
    width 100vw
    height 79vw
    position relative
    overflow hidden
    .banner-img
      width 100% 
      position absolute
      top -2.5vw
    .logo
      position fixed
      top 3.07vw
      left 1.33vw
      width 26.9vw
      height 8.67vw
    .tab
      position fixed
      top 4.8vw
      right 3.73vw
      width 6vw
      height 4.8vw
</style>
