import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

let data = {
  //currentID: 0,
  products: mock,
  list: [],
  getList() {
    return this.list;
  },
  addtoList(product) {
    this.list.push(
      product
    );
    //this.currentID += 1;
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
