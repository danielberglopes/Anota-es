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
     <ButtonView value="Adicionar" @click="() => this.$router.push({ path: '/DashboardView' })"/>
  </div>
</div>
<div class="row tabelaPrincipal">
      <div class="col-sm-12">
        <table class="table table-bordered" >
      <thead>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
          <th>Data</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataItems" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
            <td>{{ item.date }}</td>
            <td>
            <svg @click="() => { editItem(index);  this.$router.push({ path: '/DashboardView' }); }" data-toggle="modal" data-target="#myModall"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
</svg>
    <span style="margin-right: 10px;"></span>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" data-toggle="modal" data-target="#myModal" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
    </svg>
</td>
</tr>
    </tbody>
    </table>
    </div>
</div>
</div>
<!-- modal-01 -->
 <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
      
        <div class="modal-header">
          <h4 class="modal-title">Deseja excluir esta anotações</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
       
        <div class="modal-body">
          <p>Você esta prestes a deletar uma anotação e esta anotação não poderá se recupera</p>
        <p>Tem certeza que deseja excluir?</p>
        </div>
      
        <div class="modal-footer">
          <ButtonView value="Excluir" @click="deleteItem(index)"  class="btn btn-secondary salVar col-sm-3" data-dismiss="modal"   />
          
        </div>
      </div>
    </div>
  </div>


<div class="modal fade" id="myModall">
      <div class="modal-dialog">
        <div class="modal-content">
        
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Modal Heading</h4>
            <button type="button" class="close" data-dismiss="modall">&times;</button>
          </div>
          
          <!-- Modal body -->
          <div class="modal-body">
            Modal body..
          </div>
          
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
          
        </div>
      </div>
    </div>

</template>

<script>
  import ButtonView from "@/components/button/buttonView.vue";
  
  export default {
    name: "DashboardView",
    data() {
      return {
        formData: {
          name: "",
          value: "",
          date: "",
          description: ""
        },
        dataItems: []
        
      };
    },

    methods: {
      submitForm() {
       
        this.dataItems.push({ ...this.formData });
  
        this.formData = {
          name: "",
          value: "",
          date: "",
          description: ""
        };
        
       
        localStorage.setItem("dataItems", JSON.stringify(this.dataItems));
      
      
      },
      editItem(index) {
    // Create a copy of the data at the specified index using the spread operator
    this.formData = { ...this.dataItems[index] };

  
    localStorage.setItem("dataItems", JSON.stringify(this.dataItems));
},

      deleteItem(index) {
       
        this.dataItems.splice(index, 1);
  
     
        localStorage.setItem("dataItems", JSON.stringify(this.dataItems));
        
      }
    },
    mounted() {
      const savedDataItems = localStorage.getItem("dataItems");
      if (savedDataItems) {
        this.dataItems = JSON.parse(savedDataItems);
      }
    },
    components: {
      ButtonView
    }
  };

  

  </script>
  

<style  scorped>
   tr{
    text-align: center;
   }

   td i {
      margin-right: 20px; 
    }

    @media only screen and (max-width: 600px) {
      td i {
        font-size: 1.5em; 
      }
    }

   
</style>