<template>
  <div>
    <!--
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    -->
    <MenuView></MenuView>
    <router-view />
  </div>
</template>

<script>

import MenuView from '@/components/menu/menuView.vue';

export default {
  components: {
    MenuView
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  :root
  {
    --cor-primaria:#FF3D00;
    --cor-secundaria: #FF6E40;
  }
  body{
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;

  }
</style>

