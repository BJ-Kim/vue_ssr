<template>
  <div>
    <p>main page????</p>
    <button v-on:click="storeTest">테스트</button>
    <button v-on:click="secondStore">2store</button>
    <button v-on:click="pageMove">페이지이동</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
    storeTest () {
      const data = {
        email: "1234@nana.com"
      }
      this.$store.dispatch('LOGIN', data)
        .then(() => console.log(this.$store.state))
    },
    secondStore () {
      const data = {
        email: "1234@nana.com"
      }
      this.$store.dispatch('HOHO', data)
        .then(() => console.log(this.$store.state))
    },
    pageMove () {
      //this.$router.push('about')
      //this.$router.push({path:'about'})
      this.$router.push({name:'abt', params: { data: 123123 }})
    }
  }
}
</script>

<style lang="scss">
</style>
