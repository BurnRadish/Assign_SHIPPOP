<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Book</router-link>
      <!-- toggle when half disply -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >สินค้าใหม่</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >สินค้าขายดี</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >สินค้าลดราคา</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >สินค้าแนะนำ</router-link
            >
          </li>
        </ul>
        <form class="d-flex">
          <div class="input-group" v-if="searchToggle">
            <input
              class="form-control border-end-0 border"
              type="search"
              placeholder="search"
              id="example-search-input"
              style="
                border-top-left-radius: 25px;
                border-bottom-left-radius: 25px;
              "
            />
            <span class="input-group-append">
              <button
                class="btn btn-outline bg-white border-start-0 border-bottom border"
                type="button"
                style="
                  height: 100%;
                  border-top-right-radius: 25px;
                  border-bottom-right-radius: 25px;
                "
              >
                <i class="bi bi-search"></i>
              </button>
            </span>
          </div>
          <button
            class="btn btn-outline"
            @click="searchToggle = !searchToggle"
            v-if="searchToggle == false"
          >
            <i class="bi bi-search"></i>
          </button>
          <button
            class="btn btn-outline"
            @click="searchToggle = !searchToggle"
            v-if="searchToggle"
          >
            <i class="bi bi-x-lg"></i>
          </button>
          <button class="nav-item dropdown btn btn-outline">
            <div
              class="nav-link dropdown-toggle btn btn-outline"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="updateNavCart()"
            >
              <i class="bi bi-cart"></i>
            </div>
            <ul
              class="dropdown-menu dropdown-menu-end dropdown-large"
              aria-labelledby="navbarDropdown"
              style="text-align: center"
            >
              <li>
                <h5>ตระกร้าของฉัน</h5>
                <p>{{this.navCart.length}} สินค้าในตระกร้า</p>
                <button class="btn btn-outline-primary rounded-pill" @click="toCart()" style="width: 80%;">
                  ดูหรือแก้ไขตระกร้าของฉัน
                </button>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li v-for="item in navCart" :key="item.id">
                <div class="row">
                  <div class="col-10">
                    {{ item.amounts }} x
                    <img
                      src="https://placekitten.com/50/70"
                      alt=""
                      style="margin: 5px"
                    />
                    <b>
                      {{item.name}}
                    </b>
                    
                  </div>
                  <div class="col-2">
                    <i class="bi bi-x-circle"></i>
                    <i class="bi bi-pencil-square"></i>
                  </div>
                </div>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <p><b class="total-cart">ยอดรวม</b> : <b class="total-bold">THB{{this.total}}</b></p>
                <button class="btn btn-primary rounded-pill" style="width: 80%;" @click="toCheckout()">
                  ไปหน้าชำระเงิน
                </button>
              </li>
            </ul>
          </button>
          <img
            src="https://placekitten.com/g/35/35"
            class="d-inline-block align-top circle"
          />
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      searchToggle: false,
      navCart: [],
      total: 0,
    };
  },
  methods: {
    updateNavCart() {
      this.navCart = JSON.parse(localStorage.getItem("Cart"));
      console.log(this.navCart)
      let sum = 0;
      for(var i=0; i < this.navCart.length; i++){
        sum += (this.navCart[i].price - this.navCart[i].discount)*this.navCart[i].amounts
      }
      this.total = sum

      console.log(this.total)
    },
    toCart(){
      this.$router.push({ path: '/cart' });
    },
    toCheckout(){
      this.$router.push({ path: "/checkout" });
    },
  },
};
</script>

<style scoped>

.total-cart{
  color: rgb(195, 195, 195);
}

.total-bold{
  font-size: 24px;
}

.dropdown-toggle::after {
  content: none;
}

.dropdown-menu {
  width: 300px !important;
}

.btn:focus {
  outline: none !important;
}

.navB {
  font-weight: "bold";
}

.circle {
  border-radius: 50%;
  margin: 10px;
}
</style>
