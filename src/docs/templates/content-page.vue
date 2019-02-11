<template>
  <section v-html="content">
  </section>
</template>

<script>
  export default {
    name: "Herbology",
    props: [ 'topic' ],
    computed: {
      content(){
        return require( `@pages/${ this.$route.name }` );
      }
    },
    mounted(){
      console.log(this.$route);
    },
    beforeRouterEnter(){
      console.log('before');
    }
  }

</script>