<template>
  <div class="doc-root">
    <div class="menu-wrapper">
      <menu class="main-menu">
        <h4 class="menu-header">
          table of contents
        </h4>
        <router-link 
          :key="route.name"
          class="nav-link"
          v-for="route in routes"
          :to="{
            name: route.name,
            params: { pageName: route.name }
          }">
            {{ route.name }}
          </router-link>
      </menu>
    </div>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    props: [
      'routes'
    ]
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,700|Muli:300,400,700');
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
  }
  html, 
  body {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  p {
    font-size: 1rem;
    margin-top: 1.5rem;
    line-height: 1.5;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Rubik";
    font-weight: 400;
  }
  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 20px;
    font-size: 700;
  }
  h5 {
    font-size: 18px;
    font-weight: 700;
  }
  h6 {
    font-size: 16px;
    font-weight: 700;
  }


  .doc-root{
    display: grid;
    grid-template-columns: 264px 1fr;
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Muli";
    color: rgb(32,35,40);
  }
  .menu-wrapper {
    margin: 0;
    padding: 24px;
    background: #eaeced;
  }
  .main-menu {
    display: flex;
    flex-direction: column;
  }
  .menu-header {
    margin-bottom: .75rem;
  }
  .nav-link{
    position: relative;
    padding: .5rem 0 .5rem 1rem;
    text-transform: capitalize;
    color: rgb(95,102,104);
    font-weight: 400;
    font-size: 16px;
    text-decoration: none;
    border-left: 3px solid rgb(174,178,178);
    box-sizing: border-box;
  }
  .router-link-exact-active{
    color: rgb(22,148,150);
    border-left-color: rgb(22,148,150);
  }
  .content-wrapper {
    padding: 24px 48px;
    background: white;
  }
  .content-wrapper h3{
    margin-top: 3rem;
    text-transform: capitalize;
  }
  .content-wrapper h4 {
    margin-top: 1.5rem;
  }
</style>