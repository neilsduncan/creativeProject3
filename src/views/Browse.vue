<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Black Isle')" href="#" class="pure-menu-link">Black Isle</a></li>
      <li class="pure-menu-item"><a @click="select('Inxile')" href="#" class="pure-menu-link">Inxile</a></li>
      <li class="pure-menu-item"><a @click="select('Larian Studios')" href="#" class="pure-menu-link">Larian Studios</a></li>
      
    </ul>
  </div>
  <ProductList :products="products" />
</div>

</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  data() {
    return {
      company: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.company === this.company);
    }
  },
  methods: {
    select(company) {
      this.company = company;
    }
  }
}
</script>
