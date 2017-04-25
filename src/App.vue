<template>
  <div id="app" >
    <nav>
      <div class="nav-container">
        <div class="head">
          <div class="logo"><img src="./assets/image/favicon.png" alt=""/></div>
          <a class="nav-head" href="#/">INTERONET</a>
        </div>
        <nav-user v-bind:userState="userState" v-bind:username="username" v-on:signOut="signOut"></nav-user>
        <nav-bar></nav-bar>
      </div>
    </nav>
    <div class="body">
      <router-view v-on:changeUserState="changeUserState" v-bind:userState="userState" v-bind:username="username" v-bind:password="password"></router-view>
    </div>
  </div>
</template>

<script>
import navUser from '@/components/NavUser'
import navBar from '@/components/NavBar'

export default {
  name: 'app',
  components: {
    'nav-bar': navBar,
    'nav-user': navUser
  },
  data: function () {
    return {
      userState: false,
      username: '',
      password: ''
    }
  },
  methods: {
    changeUserState: function (state, username, password) {
      if (state) {
        this.userState = true
        this.username = username
        this.password = password
      }
    },
    signOut: function () {
      this.userState = false
      this.username = ''
      this.password = ''
      this.$router.push('/')
    }
  }
}
</script>

<style>
  @import './assets/css/style.css';
  nav
  {
    background-color: #f4f4f4;
    width: 100%;
  }

  nav > div.nav-container
  {
    width: 90%;
    margin: 0 auto;
    height: 50px;
  }
  nav > div.nav-container > div.head
  {
    margin:5px 0;
    width: 25%;
    float: left;
  }
  nav > div.nav-container > div.head > a.nav-head
  {
    font-size: 2em;
    color: black;
    text-decoration: none;
  }
  nav > div.nav-container > div.head > div.logo
  {
    display: inline-block;
    width:13%;
  }
  nav > div.nav-container > div.head > div.logo >img
  {
    width: 100%;
  }
  nav::after
  {
    clear: both;
  }
</style>
