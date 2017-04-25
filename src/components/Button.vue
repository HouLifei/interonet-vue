<template>
  <button v-on:click="clickButton">{{ msg }}</button>
</template>

<script>
export default {
  name: 'button',
  props: {
    msg: {
      default: 'button'
    }
  },
  methods: {
    clickButton: function () {
      this.$emit('clickButton')
    }
  }
}
</script>

<style scoped>
  button {
    background-image: -webkit-linear-gradient(top, #7db7f0, #1874cd);
    background-image: -moz-linear-gradient(top, #7db7f0, #1874cd);
    text-align: center;
    border: 1px solid #7db7f0;
    margin: 10px;
    padding: 10px 20px;
    color: #f4f4f4;
    border-radius:4px ;
    cursor: pointer;
    font-size: 1em;
  }
</style>
