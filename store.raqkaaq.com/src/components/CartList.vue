<template>
<div class="wrapper">
  <div class="products">
    <div v-if="numProducts === 0" classs="empty-cart">Cart is empty</div>
    <div v-else class="product" v-for="product in cart" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="quantity">Quantity: {{product.quantity}}</div>
      <div class="price">
        <h2>{{product.price}} EA</h2>
        <button @click="removeFromCart(product)" class="auto">Remove all</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    cart: Array
  },
  computed: {
    numProducts() {
        return this.$root.$data.cart.length;
    },
  },
  methods: {
    removeFromCart(product) {
        this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(product), 1);
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.empty-cart {
    font-size: 2em;
    font-weight: bold;
}
.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}
.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}
.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.info {
  background: greenyellow;
  color: #000;
  padding: 10px 30px;
  height: 100px;
}
.info h1 {
  font-size: 16px;
}
.info h2 {
  font-size: 14px;
}
.info p {
  margin: 0px;
  font-size: 10px;
}
.quantity {
    color: blue;
    font-weight: bold;
}
.price {
  display: flex;
}
button {
  height: 50px;
  background: black;
  color: white;
  border: none;
}
.auto {
  margin-left: auto;
}
</style>
