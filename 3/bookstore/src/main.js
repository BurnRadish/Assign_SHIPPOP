import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import VueSlickCarousel from 'vue-slick-carousel' 
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css' 
import "vue-slick-carousel/dist/vue-slick-carousel.css";

Vue.config.productionTip = false;
Vue.use(VueSlickCarousel)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
