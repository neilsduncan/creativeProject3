<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="inliner">
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="stacked">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.company}}</p>
      </div>
      <div class="year">
        <h2>{{product.year}}</h2>
        <button class="auto" @click="removeList(product)">Drop from List</button>
      </div>
    </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    products: Array
  },

  methods: {
    removeList(item) {
    var index = this.$root.$data.list.indexOf(item);
      if (index > -1)
        this.$root.$data.list.splice(index,1);
    }
  }
}


</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ababab;
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
  width: 400px;
}

.product img {
  border: 2px solid #333;
  height: 200px;
  width: 300px;
  object-fit: stretch;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  width: 50%;
  color: #222222;
  padding: 10px 30px;
  height: 80px;
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

.inliner {
  width: 400px;
  height: 120px;
  background: #787878;
  color: #dcdcdc;
  display: inline-flex;
  border-radius: 8px;
}

.stacked {
  width: 120px;
  height: 200px;
  background: #787878;
  color: #dcdcdc;
  border-radius: 8px;
}

.year {
  width: 50%;
  display: flex;
  padding-left: 8px;
  padding-top: 48px;
}

button {
  height: 60px;
  width: 120px;
  background: #121212;
  color: #efefef;
  border: none;
}

.auto {
  margin-left: 12px;
  border-radius: 8px;
}
</style>
