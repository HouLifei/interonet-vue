<template>
  <div class="container">
    <h3>INTERONET</h3>
    <div><img src="../assets/image/divider.png" alt=""/></div>
    <div class="introduce">
      <p>a distributed system which contains the one master node called Global Domain Manager (gdm) and serveral slave node called Local Domain Manager (ldm).</p>
      <p>The gdm is the master node which recieve the user request, allocate resources and call ldm. gdm is the independent of complicated type of devices in interonet.</p>
      <p>The ldm is the slave node which dependent on serveral device (virtual-machine-manager, topology-transformer, power-system).</p>
    </div>
    <div class="picture">
      <img src="../assets/image/ons30.png" alt=""/>
    </div>
    <div class="clear"></div>
    <div class="start">
      <start-btn  msg="Get Start" v-on:clickButton="getStart"></start-btn>
    </div>
  </div>
</template>

<script>
import startButton from '@/components/Button'
export default {
  props: {
    userState: {
      default: false
    }
  },
  name: 'index',
  components: {
    'start-btn': startButton
  },
  methods: {
    getStart: function () {
      this.$router.push('/service')
      if (this.userState) {
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
  div.introduce
  {
    display: inline-block;
    width: 50%;
  }
  div.introduce > p
  {
    margin: 10px;
    font-size: 1.2em;
    padding: 10px;
    word-wrap:break-word;
  }
  div.picture
  {
    display: inline-block;
    float: right;
    margin-right: 10%;
    width: 30%;
  }
  div.picture >img
  {
    width: 100%;
    opacity: 0.8;
  }
  div.start
  {
    text-align: center;
    padding: 20px;
  }
</style>
