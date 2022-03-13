<template>
    <div style="text-align: left">
      <p >Lorem plum</p>
      <VueSlickCarousel v-bind="settings">
        <div
          class="card"
          style="width: 18rem"
          v-for="(mock, index) in 6"
          :key="{ index }"
        >
          <img
            src="https://placekitten.com/1000/300"
            class="card-img-top"
            alt="1"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
</template>

<script>

import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "Slider",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>