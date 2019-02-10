<template>
  <section v-html="content">

  </section>
</template>

<script>
  import markdown from "@pages/herbology.md";
  export default {
    name: "Herbology",
    computed: {
      content: () => markdown
    }
  }
</script>