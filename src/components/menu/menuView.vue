<template>
    <ul>
      
        
                    <li><a   @click="() => this.$router.push({path:'/Controle-de-Produtos'})" >Produtos</a></li>
                      

                            

    </ul>
</template>

<style scorped>
ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--cor-primaria);
}

li{
    float:  left
}
li:first-child{
    margin-left: 40px;
   
}

 li a {
    display: block;
    color: #ffff;
    padding: 15px 17px;
    text-decoration: none ;
    text-align: center;
 }
</style>