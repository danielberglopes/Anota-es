<template>
    <div>
        <form @submit.prevent="submitForm">
            <label for="name">Nome:</label>
            <input type="text" v-model="formData.name" required>

            <label for="value">Valor:</label>
            <input type="number" v-model="formData.value" required>

            <label for="date">Data:</label>
            <input type="date" v-model="formData.date" required>

            <label for="description">Descrição:</label>
            <textarea v-model="formData.description" rows="4" required></textarea>

            <ButtonView value="Adicionar" class="salVar col-sm-3" />
        </form>
    </div>
</template>


<script>
import ButtonView from '@/components/button/buttonView.vue';

export default {
    name: 'DashboardView',
    data() {
        return {
            formData: {
                name: '',
                value: '',
                date: '',
                description: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Aqui você pode acessar os valores do formulário em this.formData
            console.log('Valores do formulário:', this.formData);

            // Lógica para salvar os dados (por exemplo, enviar uma solicitação para o servidor)

            // Após salvar os dados, navegue para a rota '/Controle-de-Produtos'
            this.$router.push('/Controle-de-Produtos');
        }
    },
    components: {
        ButtonView
    },
}
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

