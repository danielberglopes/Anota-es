<template>
    <button @click="callback">{{ value }}</button>
</template>

<script>
export default {
    name: ' buttonView',

    props: {
        value: { type: String, require: true },

        callback: { type: Function, defaul: () => { } }
    }

}

</script>

<style scoped>
button {
    width: 100%;
   background-color: #218838;
    color: #fff;
    padding: 14px 20px;
    margin: 8px 0;
    border-radius: none;
    cursor: pointer;
}


</style>