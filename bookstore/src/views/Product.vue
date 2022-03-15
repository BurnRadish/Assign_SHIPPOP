<template>
  <div class="container p-2">
    <p>{{this.product}}</p>
  </div>
</template>

<script>

export default {
  name: "Product",
  components: {

  },
  data() {
    return {
        product: this.$route.params.id,
    };
  },
};
</script>
