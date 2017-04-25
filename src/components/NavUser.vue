<template>
  <div class="nav-user">
    <ul>
      <template v-if="userState">
        <li><a href="#/">{{ username }}</a></li>
        <li><a href="" v-on:click.prevent="signOut">Sign out</a></li>
      </template>
      <template v-else>
        <li><a href="#/login">Sign in</a></li>
        <li><a href="#/">Sign up</a></li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navUser',
  props: {
    userState: {
      default: false
    },
    username: {
      default: ''
    }
  },
  methods: {
    signOut: function () {
      this.$emit('signOut')
    }
  }
}
</script>

<style scoped>
  div.nav-user {
    float: right;
  }
  li
  {
    float: left;
    margin: 0 10px;
  }
  a
  {
    color: #888888;
  }
  a:hover
  {
    color: #000000;
  }
</style>
