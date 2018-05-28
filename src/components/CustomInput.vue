<template>
  <div class="inner">
    <input type="text" v-model="newItem">
    <button v-on:click="addItem">add</button>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data () {
    return {
      newItem: ''
    }
  },
  methods: {
    addItem () {
      this.$emit('addNewItem', this.newItem, 'okok')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

