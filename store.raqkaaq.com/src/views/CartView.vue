<template>
    <div>
        <CartList :cart="cart" />
    </div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'CartView',
  components: {
    CartList
  },
  data() {
    return {
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
}
</script>