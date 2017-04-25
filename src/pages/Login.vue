<template>
  <div class="div-login">
    <form action="">
      <h2>Login</h2>
      <div class="input-group">
        <input id="username" name="username" type="text" v-model="username" placeholder="username"/>
      </div>
      <div class="input-group">
        <input id="password" name="password" type="password" v-model="password" placeholder="password"/>
      </div>
      <p>{{ msg }}</p>
      <div class="button-group">
        <button type="button" v-on:click="submit">Login</button>
        <button type="button">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      username: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    submit: function () {
      // ajax
      var result = true
      if (result) {
        this.$emit('changeUserState', true, this.username, this.password)
        this.$router.go(-1)
      } else {
        this.password = ''
        this.msg = 'This is something wrong with the username or password'
      }
    }
  }
}
</script>

<style scoped>
  div.div-login {
    margin: 100px 35%;
    background-color: #f8f8f8;
    border-radius: 5px;
  }
  h2 {
    line-height: 60px;
    text-align: center;
    border-bottom: 1px dotted #888888;
  }
  div.input-group {
    text-align: center;
    margin: 35px auto;
  }
  input {
    height: 50px;
    width: 60%;
    font-size: 20px;
    border-radius: 2px;
    border: 1px solid #cccccc;
    padding: 15px;
    font-weight: 300;
  }
  p {
    color: red;
    text-align: center;
    font-size: 12px;
    line-height: 15px;
    margin-top: -18px;
  }
  div.button-group {
    text-align: center;
    padding: 20px;
  }
  button
  {
    width:25%;
    height: 40px;
    margin: 3%;
    border-radius: 5px;
    border: 1px solid #cccccc;
    color: #ffffff;
    cursor: pointer;
  }
  button:first-child
  {
    background-color: rgb(0,162,202);

  }
</style>
