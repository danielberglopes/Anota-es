<template>
  <div>
    
    <MenuView v-if="$route.name !== 'LoginView'"></MenuView>

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
  .container{
    margin-top: 15px
  }
  .titulo{
    font-weight: 600px;
    color: #363636;
  }
  hr{
    margin: 0;
  }
  .sub-container{
  margin-top: 15px;
  }
</style>

