<template>
    <div class="box-login">
        <div class="logo">
            <h1>Login</h1>
        </div>
        <InputView
        label="E-mail"
        
        placeHolder="exemplo@gmail.com"></InputView>


         <InputView label="Senha"
         
         placeHolder="123456"
         type="password"></InputView>
     <ButtonView value="Entrar" :callback="() => alert('Fui clicado')" />
    
        
    </div>
</template>

<script>
import InputView from '@/components/input/inputView.vue';
import ButtonView from '@/components/button/buttonView.vue';
export default {
    name: 'LoginView',
    components: {
        InputView,
        ButtonView
    }
};
</script>


<style scoped>
.box-login{
    padding: 20px;
    width: 300px;
    margin: auto;
    border:  1px solid #ddd;
    margin-top: 70px;
    
}
.logo{
   text-align:  center;
   color: var(--cor-primaria)
}
</style>