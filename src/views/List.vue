<template>
<div>
  <h2>Items in List</h2>
  <CartList :products="products" />
</div>

</template>

<script>
import CartList from "../components/List.vue"
export default {
  name: 'Browse',
  components: {
    CartList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.list;
    }
  },
  methods: {
    select(country) {
      this.country = country;
    }
  }
}
</script>
