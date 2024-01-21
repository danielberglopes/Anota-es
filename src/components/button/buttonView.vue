<template>
    <button @click="callback">{{ value }}</button>

   
</template>

<script>
export default{
 name: ' buttonView',

 props:{
    value:{type: String, require: true},

    callback: {type: Function, defaul:() => {}}
 }

}

</script>

<style scoped>
button{
    width: 100%;
    background-color: var(--cor-primaria);
    color:#fff;
    padding: 14px 20px;
    margin: 8px 0;
    border-radius: none;
    cursor: pointer;
}

button:hover{
    background-color: var( --cor-secundaria);
}
</style>