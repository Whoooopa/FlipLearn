<script setup>
import {RouterLink} from "vue-router"
</script>
<template>
    <div>
        <RouterLink style="text-decoration: none; color:black; font-weight: 600;" to="/">Fliplearn</RouterLink>
    </div>
</template>

<style scoped>
    div{
        display: flex;
        justify-content: flex-end;
        padding: 0.5rem 5rem;
        background-color: #C682ED;
    }
    h1{
        cursor: pointer;
    }
</style>