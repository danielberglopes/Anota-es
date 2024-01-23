<template>
  <div>
     <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="titulo">Anotações</h2>
          <hr>
        </div>
      </div>
      <div class="row sub-container">
     <div class="col-sm-3">
          <ButtonView value="Adicionar" data-toggle="modal" data-target="#myModal"  />
        </div>
      </div>
      <div class="row tabelaPrincipal">
        <div class="col-sm-12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Data</th>
                <th>Ação</th>
              </tr>
            </thead>
          <tbody>
              <tr v-for="(item, index) in dataItems" :key="index">
                <td >{{ item.description }}</td>
             
                <td>{{ item.date }}</td>
                <td  class="acao">
                 <svg @click="editItem(index)"  data-toggle="modal" data-target="#myModal"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
                  <span style="margin-right: 10px;"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" data-toggle="modal" data-target="#myModall"
                    viewBox="0 0 24 24" width="24px" fill="#000000">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="modal fade" id="myModal">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Registrar anotações</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <div class="modal-body">
          
            <form @submit.prevent="submitForm">
              <label for="name">Nome:</label>
              <input type="text" v-model="formData.name" required>
              <label for="value">Valor:</label>
              <input type="number" v-model="formData.value" required>
              <label for="date">Data:</label>
              <input type="date" v-model="formData.date" required>
              <label for="description">Descrição:</label>
              <textarea v-model="formData.description" rows="4" required></textarea>

              <div class="modal-footer ">
                <button type="button" class="btn buttonSecuntadrio" @click="goToDashboard"  data-dismiss="modal">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                  </svg>
                </button>

            
                <button type="button" class="btn btn-success" data-dismiss="modal"  @click="submitForm">  Registrar</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>

   
  </div>
  <div   v-if="successAlertVisible" class="alert alert-success custom-alert" role="alert">
  Registro adicionado com sucesso!
</div>

   <div class="modal fade" id="myModall">
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
           
                <div class="col-sm-3">
            <ButtonView value="Excluir" @click="deleteItem(index)" data-dismiss="modal"  />
          </div>

            </div>
          </div>
        </div>
      </div>
</template>

<script>
import router from "@/router";
import ButtonView from "@/components/button/buttonView.vue";


export default {
  name: "ControleDeProdutosView",
  data() {
    return {
      formData: {
        name: "",
        value: "",
        date: "",
        description: ""
      },
      dataItems: [],
      editMode: false,
      editIndex: null
    };
  },

  
  methods: {

    

    submitForm() {
    if (
      this.formData.name &&
      this.formData.value &&
      this.formData.date &&
      this.formData.description
    ) {
      if (this.editMode) {
        this.dataItems[this.editIndex] = { ...this.formData };
        this.editMode = false;
        this.editIndex = null;
      } else {
        this.dataItems.push({ ...this.formData });
      }

      this.formData = {
        name: "",
        value: "",
        date: "",
        description: ""
      };

      localStorage.setItem("dataItems", JSON.stringify(this.dataItems));

    
      this.showSuccessMessage();
    } else {
      alert("Por favor, preencha todos os campos antes de salvar.");
    }
  },

    editItem(index) {
      this.editMode = true;
      this.editIndex = index;
      this.formData = { ...this.dataItems[index] };
    },
    deleteItem(index) {
      this.dataItems.splice(index, 1);
      localStorage.setItem("dataItems", JSON.stringify(this.dataItems));
    },
    goToDashboard() {
      router.push({ name: "DashboardView" });
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



<style scoped>
.custom-alert {
  position: fixed;
  top: 10px;
  right: 10px; 
  animation: slideUp 2s ease-in-out; 
}

@keyframes slideUp {
  from {
    opacity: 1;
    transform: translateY(90%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

  th{
    text-align: center;
  }
  td{
    text-align: center;
  }
  .modal-footer {
    border-top: none; 
}
.salVar {
  float: right;
}


.buttonPrimeiro{
      background-color: #218838;
}
.buttonPrimeiro:hover{
      background-color: #218838;
}
.buttonSecuntadrio:hover  {
  color:#fff;
  background-color: var(--cor-primaria);
}

.buttonSecuntadrio{
 background-color: var(--cor-primaria);
}


form {

  padding: 33px;
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="date"] {

  appearance: none;
  padding: 8px;
}
</style>

