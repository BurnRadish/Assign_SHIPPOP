<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/home">Book</router-link>
    <!-- toggle when half disply -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">สินค้าใหม่</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">สินค้าขายดี</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">สินค้าลดราคา</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">สินค้าแนะนำ</router-link>
        </li>
      </ul>
      <form class="d-flex">
         <div class="input-group" v-if="searchToggle">
                <input class="form-control border-end-0 border" type="search" value="search" id="example-search-input" style="border-top-left-radius: 25px; border-bottom-left-radius: 25px;">
                <span class="input-group-append">
                    <button class="btn btn-outline bg-white border-start-0 border-bottom border" type="button" style="height : 100%; border-top-right-radius: 25px; border-bottom-right-radius: 25px;">
                        <i class="bi bi-search"></i>
                    </button>
                </span>
            </div>
        <button class="btn btn-outline" @click="searchToggle = !searchToggle" v-if="searchToggle == false"><i class="bi bi-search"></i></button>
        <button class="btn btn-outline" @click="searchToggle = !searchToggle" v-if="searchToggle"><i class="bi bi-x-lg"></i></button>
        <button class="nav-item dropdown btn btn-outline">
          <div class="nav-link dropdown-toggle btn btn-outline" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-cart"></i>
          </div>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </button>
        <img src="https://placekitten.com/g/35/35" class="d-inline-block align-top circle">
      </form>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  name: "Navbar",
  data(){
    return{
      searchToggle : false,
    }
  }
};
</script>

<style scoped>
.dropdown-toggle::after {
    content: none;
}


.btn:focus {
  outline: none !important;
}

.navB{
  font-weight: "bold";
}

.circle{
  border-radius: 50%;
  margin: 10px;
}
</style>
