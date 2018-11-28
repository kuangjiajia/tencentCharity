<template lang="pug">
  div.charity-page
    Header
    Content
    Footer
</template>

<script>
import {
  Header,
  Footer,
  Content
} from "@components"

export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer
  }
};
</script>

<style lang="stylus" scoped>

.charity-page
  min-height 100vh
  background-color #292d36

</style>
