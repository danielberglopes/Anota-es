<template>
  <div class="container">
    <div class="row">

 <div class="col-sm-12">
  <h2  class="titulo">Anotações</h2>
        <hr>
 </div>
     </div> 
<div class="row sub-container">
  <div class="col-sm-3">
     <ButtonView value="Adicionar" @click="() => this.$router.push({ path: '/' })"/>
  </div>
</div>

<div class="row">
      <div class="col-sm-12">
        <table class="table table-bordered" >
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th>Data</th>
              <th>Acoes</th>
            </tr>
          </thead>
        </table>      </div>
</div>

    </div>

</template>

<script>
import ButtonView from '@/components/button/buttonView.vue';

export default{

  components: {

    ButtonView
  },
}
</script>

<style  scorped>
  
</style>