<template>
 <div class="nav-bar">
   <ul>
     <li><a href="#/">Home</a></li>
     <li><a href="">Product</a></li>
     <li><a href="#/service">Service</a>
       <ul>
         <li><a href="#/create">Create</a></li>
         <li><a href="#/check">Check</a></li>
       </ul>
     </li>
     <li><a href="">About</a></li>
     <li><a href="">News</a></li>
   </ul>
 </div>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style>
  div.nav-bar {
    display: block;
  }
  a
  {
    color: #888888;
    line-height: 30px;
  }
  li:hover {
    background-color: #eeeeee;
  }
  li:hover > a
  {
    color: #000000;
  }
  div.nav-bar > ul {
    height: 50px;
  }
  div.nav-bar > ul > li {
    float: left;
    line-height: 50px;
    width: 100px;
    text-align: center;
  }
  div.nav-bar > ul > li > ul {
    display: none;
    background-color: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    width: 100px;
    position: absolute;
  }
  div.nav-bar > ul >li >ul >li {
    background-color: #f4f4f4;
    text-align: center;
  }
  div.nav-bar > ul >li:hover > ul
  {
    display: block;
  }
</style>
