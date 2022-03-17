<template>
  <div class="container" style="text-align: left;">
    <h2 style="margin: 10px;"><b>ตระกร้าสินค้า</b></h2>
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col">
            <table class="table table-borderless border-bottom">
              <thead class="border-bottom">
                <tr>
                  <th scope="col">สินค้า</th>
                  <th scope="col">ราคา</th>
                  <th scope="col">จำนวน</th>
                  <th scope="col">ยอดรวม</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart" :key="item.id">
                  <td>
                    <div style="align-items: start; display: flex">
                      <img
                        src="https://placekitten.com/125/150"
                        alt=""
                        style="margin: 5px"
                      />
                      <b style="margin: 5px">
                        {{ item.name }}
                      </b>
                    </div>
                  </td>
                  <td>
                    <b>
                      <p>THB{{ item.price - item.discount }}</p>
                    </b>
                  </td>
                  <td>
                    <div
                      class="input-group md-2 col-auto"
                      style="width: 150px; height: 40px"
                    >
                      <input
                        type="number"
                        class="form-control"
                        v-model="item.amounts"
                        disabled
                      />
                      <div class="btn-group-vertical">
                        <button
                          type="button"
                          class="btn btn-light"
                          @click="
                            function plus() {
                              item.amounts++;
                              updateLocal();
                            }
                          "
                        >
                          +
                        </button>
                        <button
                          type="button"
                          class="btn btn-light"
                          @click="
                            function minus() {
                              if (item.amounts > 0) {
                                item.amounts--;
                              } else {
                                item.amounts = 0;
                              }
                              updateLocal();
                            }
                          "
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <b>
                      <p>
                        {{ (item.price - item.discount) * item.amounts }}
                      </p>
                    </b>
                  </td>
                  <td>
                    <button
                      class="btn btn-outline"
                      @click="removeFromCart(item.id)"
                    >
                      <i class="bi bi-x-circle"></i></button
                    ><br />
                    <button class="btn btn-outline">
                      <i class="bi bi-pencil-square"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button
              class="btn btn-outline-secondary rounded-pill"
              type="button"
              @click="toHome()"
              style="width: 200px; margin: 5px"
            >
              ซื้อสินค้าต่อไป
            </button>
            <button
              class="btn btn-dark rounded-pill"
              type="button"
              @click="clearCart()"
              style="width: 200px; margin: 5px"
            >
              ล้างตระกร้าสินค้า
            </button>
          </div>
        </div>
      </div>
      <div class="col-4" style="background-color: aqua">Test2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  components: {},
  created() {
    this.cart = JSON.parse(localStorage.getItem("Cart"));
    console.log(this.cart);
  },
  data() {
    return {
      cart: [],
      totalAmounts: 0,
    };
  },
  methods: {
    clearCart() {
      (this.cart = []), localStorage.setItem("Cart", JSON.stringify([]));
    },
    toHome() {
      this.$router.push({ path: "/" });
    },
    updateLocal() {
      localStorage.setItem("Cart", JSON.stringify(this.cart));
    },
    removeFromCart(id) {
        var newArr = this.cart.filter((product) => product.id != id)
        this.cart = newArr;
        this.updateLocal();
    },
  },
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid;
}
</style>
