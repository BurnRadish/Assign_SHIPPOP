<template>
  <div class="container p-2">
    <Carousal></Carousal>
    <br />
    <Slider></Slider>
  </div>
</template>

<script>
import Carousal from "../components/Carousal.vue";
import Slider from "../components/Slider.vue"

export default {
  name: "Home",
  components: {
    Carousal,
    Slider,
  },
  data() {
    return {
    };
  },
};
</script>
