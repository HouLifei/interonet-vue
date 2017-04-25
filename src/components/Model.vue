<template>
  <div class="model">
    <div class="model-body">
      <h4>{{ type }}</h4>
      <div class="input-group">
        <label>Name</label>
        <label>{{ deviceName }}</label>
      </div>
      <div class="input-group">
        <label for="selectName">Type</label>
        <select id="selectName" v-model="deviceType">
          <slot name="typeOption"></slot>
        </select>
      </div>
      <div class="input-group button-group">
        <button class="blue" v-on:click="ensure">OK</button>
        <button class="green" v-on:click="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'model',
  props: {
    type: {
      default: ''
    },
    deviceName: {
      default: 's0'
    }
  },
  data: function(){
    return {
      deviceType: ''
    }
  },
  methods: {
    ensure: function () {
      this.$emit('ensure',this.type, this.deviceName, this.deviceType)
    },
    cancel: function () {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>
  div.model{
    position: fixed;
    z-index: 20;
    background-color: rgba(150,150,150,0.5);
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    display: block;
  }
  div.model-body {
    position: fixed;
    width:500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
  }
  label {
    display: inline-block;
    width: 10%;
    cursor: pointer;
    margin: 10px;
    font-size: 16px;
    font-weight: normal;
    line-height: 30px;
  }
  input {
    background-color: #fff;
    border: 1px solid #ccc;
    display: inline-block;
    height: 30px;
    padding: 4px 6px;
    color: #555;
    border-radius: 4px;
    width: 220px;
    font-size: 15px;
  }
  select {
    width: 220px;
    background-color: #fff;
    border: 1px solid #ccc;
    height: 30px;
    font-size: 15px;
  }
  h4 {
    line-height: 25px;
    font-size: 25px;
    margin: 20px;
  }
  div.input-group {
    margin: 5px;
    padding: 5px;
  }
  div.button-group{
    text-align: center;
  }
  button {
    border-radius: 2px ;
    text-align: center;
    line-height: 40px;
    height: 40px;
    width: 140px;
    padding: 0 20px;
    color: #FFF;
    margin: 10px;
    font-size: 15px;
  }
  button.blue {
    background-color: #4cb0f9;
    border: 1px solid #4cb0f9;
  }
  button.green {
    background-color: #b9e563;
    border: 1px solid #b9e563;
  }

</style>
