<template>
  <div class="container">
    <div class="row" style="margin: 50px; text-align: left">
      <div class="col-8">
        <h2><b>ชำระเงิน</b></h2>
        <br />
        <div class="row">
          <p><b>ที่อยู่ในการจัดส่ง</b></p>
          <hr style="border: 1px solid; width: 98%" />
          <form class="row g-3">
            <div class="col-6">
              <label for="sname" class="form-label">ชื่อ</label>
              <input
                type="text"
                class="form-control rounded-pill"
                id="inputEmail4"
              />
            </div>
            <div class="col-6">
              <label for="lname" class="form-label">นามสกุล</label>
              <input
                type="text"
                class="form-control rounded-pill"
                id="inputPassword4"
              />
            </div>
            <div class="col-12">
              <label for="country" class="form-label">ประเทศ</label>
              <select class="form-select rounded-pill">
                <option selected disabled>Choose your country</option>
                <option>Thailand</option>
                <option>Japan</option>
                <option>etc.</option>
              </select>
            </div>
            <div class="col-12">
              <label for="address" class="form-label"
                >ที่อยู่
                <span style="color: #ff6b6b"
                  >(บ้านเลขที่ / หมู่บ้าน / หมู่ที่ / ซอย / ถนน)</span
                ></label
              >
              <input type="text" class="form-control rounded-pill" />
            </div>
            <div class="col-6">
              <label for="subdistrict" class="form-label">แขวง/ตำบล</label>
              <input type="text" class="form-control rounded-pill" />
            </div>
            <div class="col-6">
              <label for="district" class="form-label">เขต/อำเภอ</label>
              <input type="text" class="form-control rounded-pill" />
            </div>
            <div class="col-6">
              <label for="province" class="form-label">จังหวัด</label>
              <input type="text" class="form-control rounded-pill" />
            </div>
            <div class="col-6">
              <label for="postcode" class="form-label">รหัสไปรษณีย์</label>
              <input type="text" class="form-control rounded-pill" />
            </div>
            <div class="col-12">
              <label for="phone" class="form-label"
                >เบอร์ติดต่อ (กรุณาระบุหมายเลขโทรศัพท์
                เฉพาะตัวเลขเท่านั้น)</label
              >
              <input type="text" class="form-control rounded-pill" />
            </div>
          </form>
          <form class="row g-3">
            <p><b>ที่อยู่ในการจัดส่ง</b></p>
            <hr style="border: 1px solid" />
            <div class="col-12">
              <!-- <div class="d-flex justify-content-between">
                    <span>MASTER CARD</span> <span>**** 5069</span>
                  </div> -->
              <div class="form-check">
                <div class="card">
                  <div class="card-body">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex justify-content-between"
                    >
                      <span>Free Shipping</span><span>THB0.00</span>
                    </label>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex justify-content-between"
                    >
                      <span>Kerry Express</span><span>THB40.00</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <form class="row g-3">
            <p><b>วิธีการชำระเงิน</b></p>
            <hr style="border: 1px solid" />
            <div class="col-12">
              <div class="form-check">
                <div class="card">
                  <div class="card-body">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label">
                      <span></span><span>Cash</span>
                    </label>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label">
                      <span>Credit / Debit</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-4 total-section">
        <h3 style="margin-bottom: 20px"><b>สรุปคำสั่งซื้อ</b></h3>
        <div class="row">
          <div class="col">
            <p><b>ยอดรวม</b></p>
          </div>
          <div class="col col-right">
            <p>
              <b>THB{{ this.totalAmounts }}</b>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p><b>ค่าส่ง</b></p>
          </div>
          <div class="col col-right">
            <p>
              <b>THB{{ this.shippingCost }}</b>
            </p>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col">
            <p><b>ยอดสุทธิ</b></p>
          </div>
          <div class="col col-right">
            <h5>
              <b>THB{{ this.totalWithShipping }}</b>
            </h5>
          </div>
        </div>
        <div class="text-center">
          <button
            type="button"
            class="btn btn-primary btn-lg rounded-pill"
            style="width: 80%"
          >
            <i class="bi bi-shield-lock-fill"></i> ชำระเงิน
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      cart: [],
      totalAmounts: 0,
      shippingCost: 1,
      totalWithShipping: 0,
    };
  },
  created(){
      this.setCart();
  },
  methods:{
      setCart(){
      this.cart = JSON.parse(localStorage.getItem("Cart"));
      this.setTotal();
    },
    setTotal(){
      console.log("Call total")
      let sum = 0;
      for(var i=0; i < this.cart.length; i++){
        sum += (this.cart[i].price-this.cart[i].discount)*this.cart[i].amounts;
      }
      this.totalAmounts = sum;
      this.totalWithShipping = this.totalAmounts + this.shippingCost;
    },
  },
};
</script>

<style scoped>
.box {
  border: 2px solid black;
}
.card {
  margin: 10px;
}

.form-check .form-check-input {
  float: left;
  margin-left: 0;
  margin-right: 10px;
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 0em;
  margin-bottom: 0.125rem;
}

input[type="radio"] {
  transform: scale(1.5);
}

.total-section {
  background-color: rgb(242, 255, 255);
  padding: 20px;
  height: 100%;
}

.col-right{
  text-align: right;
}
</style>
