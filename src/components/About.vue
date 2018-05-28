<template>
  <p>about about hohihihoihio</p>
</template>

<script>
export default {
  name: 'about',
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeRouteUpdate (to, from, next) {
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  data () {
    return {
    }
  },
  created () {
    // router 전달 받을때 param 받아서 사용가능
    console.log(this.$route.params)
  }
}
</script>

<style lang="scss">
</style>
