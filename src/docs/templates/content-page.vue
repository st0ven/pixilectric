<template>
  <section v-html="content">
  </section>
</template>

<script>
  import markdown from "@pages/herbology";
  export default {
    name: "Herbology",
    props: [ 'pageName', 'name' ],
    computed: {
      content(){
        return require( `@pages/${this.pageName}` );
      }
    }
  }
</script>