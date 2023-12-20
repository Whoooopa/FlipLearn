<script setup>
import { ref } from "vue";
import FlashCard from '@/components/FlashCard.vue';
import mushroomCard from "@/data/mushroomCard.json";
const card = ref(mushroomCard)
const quizVisible = ref(false)
const rotationStyle = ref("")

const showQuiz = () => {
    quizVisible.value = !quizVisible.value;
    setTimeout(showQuiz, 3000);
};

showQuiz()
</script>
<template>
    <div class="showcase">
        <h2>Make the best out of your learning experience !</h2>
        <FlashCard 
            :card="card" 
            :showQuiz="quizVisible"
            :style="{
            'margin': '0 auto',
            'box-shadow': '0px 10px 6px #D9D9D9'
            }
            "
            />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    padding: 6rem 5rem 3rem 5rem;
    background-color: #f3f6f9;
}
.showcase {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

h2 {
    color: #000000;
    font-weight: 900;
}
</style>