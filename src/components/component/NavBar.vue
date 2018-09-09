<template>
    <p class="title">
        {{titles}}
    </p>
</template>
<script>
export default {
    name:'nav-bar',
    props:['titles']
}
</script>
<style scoped>
    .title{
        font-size: 24px;
        color: white;
        display: inline-block;
        margin-top: 70px;
        width: 100%;
        text-align: center;
    }
</style>
