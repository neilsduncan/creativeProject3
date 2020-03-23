<template>
<div id="app">
  <div id="title">
    <h1> Game Picker </h1>
  </div>
  <div id="menu">
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/building.png">
          <p>Search by Company</p>
        </div>
      </router-link>
      <router-link to="/type">
        <div class="menu-item browse">
          <img src="/images/155-1550936_game-theory-symbol-game-theory-logo-transparent-hd.png">
          <p>Search by Type</p>
        </div>
      </router-link>

    </div>
    <div id="brand">
      <router-link to="/">
        <img src="/images/computer-game-png-6.png">
      </router-link>
    </div><div id="side2">
      <router-link to="/List">
        <div class="menu-item">
          <img src="/images/list.png">
          <p>{{numberOfItems}} items in list</p>
        </div>
      </router-link>
      <router-link to="/About">
        <img src="/images/logo.png">
        <p>About</p>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<script>

export default {
  computed:{
  numberOfItems(){
    return this.$root.$data.list.length;
  }
  }
}
</script>


<style>

#title{
  display: flex;
  margin-bottom: 32px;
  justify-content: center;
  background-color: #343434;
  color: #dedede;
}

* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  background-color: #fefefe;
}

#menu {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-column-gap: 5px;
  grid-template-areas: "side brand side2";
  margin-bottom: 24px;
}

#menu a {
  color: #123456;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 150px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: right;
}

#side2 {
  grid-area: side2;
  display: flex;
  justify-content: right;
}

#side img {
  width: 50px;
}

#side2 img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
