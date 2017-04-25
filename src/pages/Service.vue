<template>
  <div class="container">
    <h3>SERVICE</h3>
    <div class="div-type">
      <div>
        <a href="#/create"><img src="../assets/image/create.png" alt=""/></a>
        <p>Create</p>
      </div>
      <div>
        <a href="#/check"><img src="../assets/image/check.png" alt=""/></a>
        <p>Check
        </p>
      </div>
    </div>
    <div><img src="../assets/image/divider.png" alt=""/></div>
    <div class="div-service">
      <div>
        <img src="../assets/image/create.png" alt=""/>
        <p>Create</p>
      </div>
      <div>
        <p>a distributed system which contains the one master node called Global Domain Manager (gdm) and serveral slave node called Local Domain Manager (ldm).</p>
      </div>
    </div>
    <div class="clear"></div>
    <div class="div-service">
      <div>
        <img src="../assets/image/check.png" alt=""/>
        <p>Create</p>
      </div>
      <div>
        <p>a distributed system which contains the one master node called Global Domain Manager (gdm) and serveral slave node called Local Domain Manager (ldm).</p>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: 'service',
  props: {
    userState: {
      default: false
    }
  },
  created: function () {
    if (!this.userState) {
      this.$router.replace('/login')
    }
  }
}
</script>

<style>
  div.div-type > div {
    display: inline-block;
    width: 8%;
    margin: 80px 20%;
    text-align: center;
    cursor: pointer;
    font-weight: 400;
  }
  img
  {
    width: 100%;
  }
  div.div-service {
    margin: 30px auto;
  }
  div.div-service > div {
    display: inline-block;
    width: 70%;
    margin-top: 10px;
    vertical-align: middle;

  }
  div.div-service > div:first-child
  {
    width: 8%;
    margin: 10px 5% 10px 10%;
    text-align: center;
    cursor: pointer;
    font-weight: 400;
  }
</style>
