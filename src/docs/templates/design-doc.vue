<template>
  <div class="doc-root">
    <div class="menu-wrapper">
      <menu>
        <h4>table of contents</h4>
      </menu>
    </div>
    <div class="content-wrapper">
      <Herbology/>
    </div>
  </div>
</template>

<script>
  import * as page from "@pages/sample.md";
  import Herbology from "./herbology";
  export default {
    name: "App",
    components: {
      Herbology
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,700|Nanum+Gothic:400,700');
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
    font-size: 16px;
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
    font-family: "Nanum Gothic";
  }
  .menu-wrapper {
    margin: 0;
    padding: 24px;
    background: #eaeced;
    
  }
  .content-wrapper {
    padding: 24px 48px;
    background: white;
  }
</style>