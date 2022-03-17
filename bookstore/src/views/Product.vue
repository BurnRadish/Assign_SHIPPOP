<template>
  <div>
    <div class="container p-2">
      <div class="row">
        <div class="col-4">
          <img :src="currentImg" alt="" />
        </div>
        <!-- product title -->
        <div class="col-8">
          <div class="row product-detail">
            <div class="col">
              <h1 class="title">{{ this.product.name }}</h1>
            </div>
          </div>
          <!-- product detail -->
          <div class="row product-detail">
            <div class="col">
              <p>
                รหัสสินค้า : {{ this.product.id }}<br />
                ผู้เขียน : นาย A<br />
                หมวดหมู่ : สัตว์โลก<br />
                ประเภท : สิ่งมีชีวิต<br />
              </p>
            </div>
          </div>
          <!-- product price -->
          <div class="row product-detail">
            <div class="col">
              <p>
                &nbsp;<b class="price-p">ราคา</b>&nbsp;<b class="product-price"
                  >THB{{ this.product.price }}</b
                >&nbsp;<b class="text-line"
                  >THB{{ this.product.price - this.product.discount }}</b
                >
              </p>
            </div>
          </div>
          <div class="row">
            <div
              class="input-group md-2 col-auto"
              style="width: 150px; height: 40px"
            >
              <input
                type="number"
                class="form-control"
                v-model="amount"
                disabled
              />
              <div class="btn-group-vertical">
                <button
                  type="button"
                  class="btn btn-light"
                  @click="addProduct(1)"
                >
                  +
                </button>
                <button
                  type="button"
                  class="btn btn-light"
                  @click="addProduct(0)"
                >
                  -
                </button>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-primary btn-lg rounded-pill col-4 md-2"
              style="margin: 5px"
              @click="addToCart()"
            >
              Add
            </button>
            <button
              type="button"
              class="btn btn-warning btn-lg rounded-pill col-4 md-2"
              style="margin: 5px"
            >
              <i class="bi bi-heart-fill"></i> wishlist
            </button>
          </div>
          <div class="row product-detail">
            <p class="sh">
              แชร์ : &nbsp;<i class="bi bi-twitter"></i>&nbsp;<i
                class="bi bi-facebook"
              ></i
              >&nbsp;<i class="bi bi-bootstrap"></i>&nbsp;<i
                class="bi bi-google"
              ></i>
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col product-img">
          <img
            src="https://placekitten.com/150/200"
            alt=""
            style="margin: 5px"
            @click="
              currentImg = 'https://placekitten.com/300/500';
              imgActive = true;
            "
            v-bind:class="[imgActive ? 'selectedImg' : '']"
          />
          <img
            src="https://placekitten.com/150/200"
            alt=""
            style="margin: 5px"
            @click="
              currentImg = 'https://placekitten.com/310/500';
              imgActive = false;
            "
            v-bind:class="[imgActive ? '' : 'selectedImg']"
          />
        </div>
      </div>
      <div class="row" style="text-align: left; margin-top: 20px">
        <div class="col">
          <p>
            <a
              v-bind:class="[aActive ? 'selected' : 'nonselected']"
              @click="aActive = true"
              >เกี่ยวกับสินค้า</a
            >&nbsp;<a
              v-bind:class="[aActive ? 'nonselected' : 'selected']"
              @click="aActive = false"
              >รายละเอียด</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid line"></div>
    <div class="container bt-content">
      <div v-if="aActive">
        <p><b>เกี่ยวกับ : </b>{{ this.product.name }}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
          justo, mollis mattis cursus sit amet, venenatis eu velit. Pellentesque
          efficitur dolor eu velit ultrices rhoncus. Sed tempus neque vel rutrum
          vehicula. Sed tincidunt leo non lobortis tempus. Vivamus nisi nunc,
          varius et purus in, sagittis posuere libero. Curabitur feugiat eu
          metus sed dignissim. Quisque interdum dui in urna bibendum ornare.
          Proin dignissim, massa quis dignissim mollis, dolor felis rutrum eros,
          sed ultrices tortor nunc id massa. Aliquam consequat magna non luctus
          pulvinar. Donec ut metus sem. Donec tempor, orci at malesuada aliquet,
          libero dolor maximus massa, eget semper nulla lacus ac nisi. Nullam in
          congue justo. Aliquam eu tortor at diam fermentum efficitur.
          Suspendisse a ultrices lacus. Sed pretium ante quis erat ultrices, et
          cursus turpis ornare. Mauris dignissim aliquam justo, eu facilisis
          ligula commodo ut. Etiam pretium mattis turpis eu porttitor.
        </p>
      </div>
      <div v-if="aActive == false">
        <p><b>รายละเอียด : </b>{{ this.product.name }}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
          justo, mollis mattis cursus sit amet, venenatis eu velit. Pellentesque
          efficitur dolor eu velit ultrices rhoncus. Sed tempus neque vel rutrum
          vehicula. Sed tincidunt leo non lobortis tempus. Vivamus nisi nunc,
          varius et purus in, sagittis posuere libero. Curabitur feugiat eu
          metus sed dignissim. Quisque interdum dui in urna bibendum ornare.
          Proin dignissim, massa quis dignissim mollis, dolor felis rutrum eros,
          sed ultrices tortor nunc id massa. Aliquam consequat magna non luctus
          pulvinar. Donec ut metus sem. Donec tempor, orci at malesuada aliquet,
          libero dolor maximus massa, eget semper nulla lacus ac nisi. Nullam in
          congue justo. Aliquam eu tortor at diam fermentum efficitur.
          Suspendisse a ultrices lacus. Sed pretium ante quis erat ultrices, et
          cursus turpis ornare. Mauris dignissim aliquam justo, eu facilisis
          ligula commodo ut. Etiam pretium mattis turpis eu porttitor.
        </p>
      </div>
      <Slider title="สินค้าที่เกี่ยวข้อง"></Slider>
    </div>
  </div>
</template>

<script>
import data from "../assets/mockdata";
import Slider from "../components/Slider.vue";

export default {
  name: "Product",
  components: {
    Slider,
  },
  data() {
    return {
      id: this.$route.params.id,
      product: {},
      aActive: false,
      imgActive: true,
      currentImg: "https://placekitten.com/300/500",
      amount: 1,
      Cart: [],
    };
  },
  created() {
    this.findProduct(this.id);
    this.setCart();
  },
  methods: {
    findProduct(id) {
      this.product = data.find((product) => product.id == id);
      console.log(this.product);
    },
    setCart() {
      this.Cart = JSON.parse(localStorage.getItem("Cart"));
    },
    addProduct(quantity) {
      if (quantity == 0) {
        if (this.amount <= 0) {
          this.amount = 0;
        } else {
          this.amount--;
        }
      } else {
        this.amount++;
      }
    },
    addToCart() {
      this.setCart();
      let counter = 0;

      if (this.amount == 0) {
        alert("Please enter product amounts");
      } else {
        if (this.Cart.length > 0) {
          for (var i = 0; i < this.Cart.length; i++) {
            if (this.Cart[i].id == this.product.id) {
              alert("--Add more item--");
              this.Cart[i].amounts += this.amount;
              localStorage.setItem("Cart", JSON.stringify(this.Cart));
              counter++;
            }
          }

          if (counter == 0) {
            alert("--Add new item--");
            let newItem = {
              id: this.product.id,
              name: this.product.name,
              price: this.product.price,
              amounts: this.amount,
            };
            this.Cart.push(newItem);
            localStorage.setItem("Cart", JSON.stringify(this.Cart));
          }
        } else {
          alert("--Add first item--");
          let addItem = {
            id: this.product.id,
            name: this.product.name,
            price: this.product.price,
            amounts: this.amount,
          };
          this.Cart.push(addItem);
          localStorage.setItem("Cart", JSON.stringify(this.Cart));
        }
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-weight: bolder;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.line {
  border-top: 2px solid gainsboro;
  margin-top: 20px;
  margin-bottom: 20px;
}

.bt-content {
  text-align: left;
}

.selectedImg {
  opacity: 0.5;
}

i {
  margin: 5;
}

.sh {
  font-size: 28px;
}

.selected {
  text-decoration: underline;
  text-decoration-color: rgb(185, 185, 255);
  text-decoration-thickness: 3px;
}

.nonselected {
  text-decoration: none;
}

a {
  color: black;
  font-weight: bold;
  text-decoration: none;
}

.price-p {
  font-size: 20px;
  vertical-align: center;
}

.product-price {
  font-size: 32px;
  vertical-align: center;
}

.text-line {
  text-decoration: line-through;
  color: rgb(182, 182, 182);
  font-size: 24px;
  vertical-align: center;
}

.product-detail {
  text-align: left;
  margin-top: 5%;
}

.product-img {
  margin-top: 5px;
  text-align: left;
}
</style>
