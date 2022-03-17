<template>
  <div style="text-align: left; padding: 20px; margin: auto">
    <h1 class="sliderTitle">{{ title }}</h1>
    <a style="float: right" href="#">ดู{{ title }}ทั้งหมด</a><br />
    <VueSlickCarousel v-bind="settings">
      <div
        class="card border-light mb-3 card-pointer"
        v-for="(data, index) in mockProduct"
        :key="{ index }"
      >
        <div v-if="data.quantity != 0">
          <h6 class="instock">
            <i class="bi bi-check-circle-fill instock"></i> มีสินค้า
          </h6>
        </div>
        <div v-if="data.quantity == 0">
          <h6 class="outstock">
            <i class="bi bi-x-circle-fill outstock"></i> ไม่มีสินค้า
          </h6>
        </div>
        <img
          src="https://placekitten.com/1000/600"
          class="card-img-top"
          alt="1"
          @click="viewProduct(data.id)"
        />
        <div class="card-body">
          <div @click="viewProduct(data.id)">
          <div>
            <h6>
              <i
                v-for="(icon, index) in data.rating"
                :key="index"
                class="bi bi-star-fill star"
                role="img"
                aria-label="GitHub"
              ></i>
              Reviews ({{ data.rating }})
            </h6>
          </div>
          <h5 class="card-title">{{ data.name }}</h5>
          <br />
          <h6 class="card-text">THB{{ data.price }}</h6>
          <h5 class="card-text">THB{{ data.price - data.discount }}</h5>
          </div>
          <button href="#" class="btn btn-outline-primary cart-btn" @click="addToCart(data)">
            <i class="bi bi-cart"></i> Add to cart
          </button>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import mdata from "../assets/mockdata";

export default {
  name: "Slider",
  components: {
    VueSlickCarousel,
  },
  props: {
    title: String,
  },
  methods: {
    viewProduct(product) {
      this.$router.push({ path: `/product/${product}` });
      location.reload();
    },
    addToCart(product) {
      console.log(product)
      this.Cart = JSON.parse(localStorage.getItem('Cart'))
      let counter = 0;

        if (this.Cart.length > 0) {
          for (var i = 0; i < this.Cart.length; i++) {
            if (this.Cart[i].id == product.id) {
              alert("--Add more item--");
              this.Cart[i].amounts++;
              localStorage.setItem("Cart", JSON.stringify(this.Cart));
              counter++;
            }
          }

          if (counter == 0) {
            alert("--Add new item--");
            let newItem = {
              id: product.id,
              name: product.name,
              price: product.price,
              discount : product.discount,
              total: (product.price-product.discount),
              amounts: 1,
            };
            this.Cart.push(newItem);
            localStorage.setItem("Cart", JSON.stringify(this.Cart));
          }
        } else {
          alert("--Add first item--");
          let addItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            discount : product.discount,
            total: (product.price-product.discount),
            amounts: 1,
          };
          this.Cart.push(addItem);
          localStorage.setItem("Cart", JSON.stringify(this.Cart));
        }
      
    },
  },
  data() {
    return {
      mockProduct: mdata,
      Cart: [],
      settings: {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        accessibility: true,
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

<style scoped>
.card-img-top {
  border-radius: 10px;
}

.card-pointer {
  cursor: pointer;
  width: 18rem;
  padding: 5px;
}

.sliderTitle {
  font-size: 28px;
  font-weight: "bold";
}

h6.card-text {
  text-decoration: line-through;
  color: gray;
}

h5.card-text {
  font-weight: bold;
}

.cart-btn {
  border-radius: 20px;
}

.card-title {
  font-weight: bold;
}

a {
  color: rgb(0, 0, 0);
}

.star {
  color: gold;
}

.instock {
  color: rgb(105, 211, 0);
}

.outstock {
  color: crimson;
}
</style>
