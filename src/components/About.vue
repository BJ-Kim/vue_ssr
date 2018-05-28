<template>
  <div>
    <p>about about hohihihoihio</p>
    <button>테스트</button>
    {{customData}}
    <CustomInput v-on:addNewItem="addItem"></CustomInput>
    <CustomInput @addNewItem="addItem"></CustomInput>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">얼라려</h3>
      <span slot="body" @click="showModal = false">
        {{customData}}
        <i class="closeModalBtn fa fa-times" aria-hidden="True"></i>
      </span>
    </Modal>
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue'
import Modal from './Modal.vue'

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
  components: {
    'CustomInput': CustomInput,
    'Modal': Modal
  },
  data () {
    return {
      showModal: false,
      customData: ''
    }
  },
  created () {
    // router 전달 받을때 param 받아서 사용가능
    console.log(this.$route.params)
  },
  methods: {
    addItem (item, aaa) {
      this.customData = item
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss">
</style>
