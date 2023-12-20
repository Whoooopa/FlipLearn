<script setup>
import { ref } from "vue"
import FlashCard from "@/components/FlashCard.vue";
import mushroomCard from "@/data/mushroomCard.json";
const card = ref(mushroomCard)

</script>
<template>
    <div class="container">
        <div class="card-container">
            <FlashCard 
                style="box-shadow: -15px 15px #D9D9D9;"
                :card="card"
                :showQuiz="false"
            />
        </div>
        <div class="text-container">
            <h1>Customize card to fit your learning needs</h1>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: #9C47D1;
    padding: 0rem 7rem;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;    
    width: 100%;
}

.card-container {
    width: 45%; 
}

.text-container {
    flex: 2;
    height: 100%;
    display: flex;
    align-items: center;

}

h1 {
    color: #F3F6F9;
    font-size: 40px;
    font-weight: 900;
}

</style>