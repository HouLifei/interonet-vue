<template>
  <div class="div-content">
    <h3>Switch</h3>
    <div>
      <div class="type-list">
        <div class="row">
          <img src="../assets/image/onetswitch.png" alt="#">
          <ul v-for="num in 8">
            <li key="num" v-bind:class="num == onsNum? 'active': ''" v-on:click="changeOnsNum(num)">{{ num }}</li>
          </ul>
          <div class="input-group">
            <input type="number" v-model.number="onsNum" />台
          </div>
        </div>
        <div class="row">
          <img src="../assets/image/openvswitch.png" alt="#">
          <div class="select-number">
            <ul v-for="num in 8">
              <li key="num"  v-bind:class="num == ovsNum? 'active': ''" v-on:click="changeOvsNum(num)">{{ num }}</li>
            </ul>
            <div class="input-group">
              <input type="number" v-model.number="ovsNum" />台
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'switch',
  data: function () {
    return {
      onsNum: 0,
      ovsNum: 0
    }
  },
  methods: {
    changeOnsNum: function (num) {
      this.onsNum = num
    },
    changeOvsNum: function (num) {
      this.ovsNum = num
    }
  },
  watch: {
    onsNum: function (val) {
      this.$emit('changeOnsNum', val)
    },
    ovsNum: function (val) {
      this.$emit('changeOvsNum', val)
    }
  }
}
</script>

<style scoped>
  div.row:after{
    display: block;
    clear: both;
    content: '';
  }
  img {
    float: left;
    width: 100px;
    height: 40px;
    cursor: pointer;
    margin: 8px 30px;
    border: 1px solid #eeeeee;
  }
  ul {
    float: left;
    margin: 8px 0;
  }
  li {
    border: 1px solid #7db7f0;
    margin: 0 3px;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    border-radius: 2px;
    cursor: pointer;
    color: #888;
  }
  div.input-group{
    display: inline;
    margin: 10px 30px;
    float: left;
  }
  input {
    width: 50px;
    height: 36px;
    color: #888;
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 2px;
    text-align: center;
  }
  .active{
    background-color: #f2f2f2;
  }
</style>
