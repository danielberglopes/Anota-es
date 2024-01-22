<template>
  <div>
    <!-- Formulário para adicionar novos dados -->
    <form @submit.prevent="submitForm">
      <label for="name">Nome:</label>
      <input type="text" v-model="formData.name" required>
      <label for="value">Valor:</label>
      <input type="number" v-model="formData.value" required>
      <label for="date">Data:</label>
      <input type="date" v-model="formData.date" required>
      <label for="description">Descrição:</label>
      <textarea v-model="formData.description" rows="4" required></textarea>
      <ButtonView value="Adicionar" @click="submitForm" class="salVar col-sm-3" />
    </form>
  </div>
</template>

<script>
import ButtonView from "@/components/button/buttonView.vue";
import router from "@/router"; 

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
   
      if (
        this.formData.name &&
        this.formData.value &&
        this.formData.date &&
        this.formData.description
      ) {
        this.dataItems.push({ ...this.formData });
        this.formData = {
          name: "",
          value: "",
          date: "",
          description: ""
        };

        localStorage.setItem("dataItems", JSON.stringify(this.dataItems));

       
        router.push({ name: "ControleDeProdutosView" });
      } else {
        alert("Por favor, preencha todos os campos antes de salvar.");
      }
    },

    editItem(index) {
      this.formData = { ...this.dataItems[index] };
      this.dataItems.splice(index, 1);
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


<style scoped>


.salVar{
    float: right;
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
            /* Customize date input appearance */
            appearance: none;
            padding: 8px;
        }

        button {
            background-color: #4caf50;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }
    </style>

