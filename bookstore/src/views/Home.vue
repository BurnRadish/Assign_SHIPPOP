<template>
  <div class="container p-2">
    <Carousal></Carousal>
    <br />
    <Slider title="สินค้าขายดี"></Slider>
    <br>
    <Slider title="สินค้าแนะนำ"></Slider>
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
