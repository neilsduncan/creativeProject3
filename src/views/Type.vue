<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('RPG')" href="#" class="pure-menu-link">RPG</a></li>
      <li class="pure-menu-item"><a @click="select('RTS')" href="#" class="pure-menu-link">RTS</a></li>
      <li class="pure-menu-item"><a @click="select('H&S')" href="#" class="pure-menu-link">Hack n' Slash</a></li>

    </ul>
  </div>
  <ProductList :products="products" />
</div>

</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Type',
  components: {
    ProductList
  },
  data() {
    return {
     type: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.type === this.type);
    }
  },
  methods: {
    select(type) {
      this.type = type;
    }
  }
}
</script>
