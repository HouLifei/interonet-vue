<template>
  <div class="container">
    <h3>CREATE</h3>
    <div><img src="../assets/image/divider.png" alt=""/></div>
    <order-time></order-time>
    <set-topology></set-topology>
  </div>
</template>

<script>
import time from '@/components/Time'
import setTopology from '@/components/Topology'
export default {
  name: 'create',
  components: {
    'order-time': time,
    'set-topology': setTopology
  },
  data: function () {
    return {
      onsNum: 0,
      ovsNum: 0,
      ubuntuNum: 0,
      windowsNum: 0
    }
  },
  methods: {

  }
}
</script>

<style>
  div.div-content {
    margin: 20px 5%;
  }
  div.div-content::after {
    clear: both;
    content: ' ';
    display: block;
  }
  div.div-content h3{
    text-align: left;
    font-size: 25px;
    line-height: 25px;
    padding: 10px;
  }
</style>
