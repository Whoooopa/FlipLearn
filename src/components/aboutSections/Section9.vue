<script setup>
import { ref } from "vue"
import FlashCard from "@/components/FlashCard.vue";
import mushroomCard from "@/data/mushroomCard.json";
const card = ref(mushroomCard)

</script>
<template>
    <div class="container">
        <div class="quiz-container">
            <p>1 of 10</p>
            <div class="card-container">
                <FlashCard 
                style="box-shadow: 1px 1px 10px #D9D9D9;"
                :card="card"
                :showQuiz="true"
                />
            </div>
        </div>
        <div class="text-container">
            <h1>Quiz Mode</h1>
            <p>Pick the most approriate answer based on the question</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: #F3F6F9;
    padding: 0rem 7rem;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;    
    width: 100%;
}

.quiz-container {
    flex: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.quiz-container p {
    text-align: end;
    margin-right: 1.5rem;
}

.card-container {
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center; 
}

button {
    width: 120px;
    height: 35px;
    border: 2px solid #9C47D1;
    border-radius: 15px;
    background: #F3F6F9;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #18061E;
    cursor: pointer;
}

.text-container {
    
    width: 65%; 
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

h1 {
    color: #9C47D1;
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 5rem;
}

p {
    width: 70%;
    color: black;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
}

</style>