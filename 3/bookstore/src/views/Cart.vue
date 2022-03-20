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
                              setTotal();
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
                              if (item.amounts > 1) {
                                item.amounts--;
                              } else {
                                item.amounts = 1;
                              }
                              updateLocal();
                              setTotal();
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
      <div class="col-4 total-section">
        <h3 style="margin-bottom: 20px;"><b>สรุปคำสั่งซื้อ</b></h3>
        <div class="row">
          <div class="col">
            <p><b>ยอดรวม</b></p>
          </div>
          <div class="col col-right" >
            <p><b>THB{{this.totalAmounts}}</b></p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p><b>ค่าส่ง</b></p>
          </div>
          <div class="col col-right" >
            <p><b>THB{{this.shippingCost}}</b></p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col">
            <p><b>ยอดสุทธิ</b></p>
          </div>
          <div class="col col-right" >
            <h5><b>THB{{this.totalWithShipping}}</b></h5>
          </div>
        </div>
        <div class="text-center">
          <button type="button" class="btn btn-primary btn-lg rounded-pill" style="width: 80%" @click="toCheckout()">
          ไปหน้าชำระเงิน
        </button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>

import Swal from 'sweetalert2'

export default {
  name: "Cart",
  components: {},
  created() {
    this.setCart();
    console.log(this.cart);
    console.log(this.totalAmounts)
  },
  data() {
    return {
      cart: [],
      totalAmounts: 0,
      shippingCost: 1,
      totalWithShipping: 0,
    };
  },
  methods: {
    setCart(){
      this.cart = JSON.parse(localStorage.getItem("Cart"));
      this.setTotal();
    },
    clearCart() {
      (this.cart = []), localStorage.setItem("Cart", JSON.stringify([]));
      Swal.fire({
                icon: "success",
                title: "ลบสินค้าออกจากตระกร้าทั้งหมดแล้ว",
        });
    },
    toHome() {
      this.$router.push({ path: "/" });
    },
    toCheckout(){
      this.$router.push({ path: "/checkout" });
    },
    updateLocal() {
      localStorage.setItem("Cart", JSON.stringify(this.cart));
    },
    removeFromCart(productId) {
      const result = this.cart.find( ({ id }) => id === productId );
        Swal.fire({
                icon: "success",
                title: "นำ "+ result.name +" ออกจากตระกร้าแล้ว",

        });
        var newArr = this.cart.filter((product) => product.id != productId)
        this.cart = newArr;
        this.updateLocal();
        this.setTotal()
    },
    setTotal(){
      console.log("Call total")
      let sum = 0;
      for(var i=0; i < this.cart.length; i++){
        sum += (this.cart[i].price-this.cart[i].discount)*this.cart[i].amounts;
      }
      this.totalAmounts = sum;
      this.totalWithShipping = this.totalAmounts + this.shippingCost;
    }
  },
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid;
}

.col-right{
  text-align: right;
}

.total-section{
  background-color: rgb(242, 255, 255);
  padding: 20px;
  height: 100%;
}

</style>
