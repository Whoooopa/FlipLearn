<script setup>
import {ref} from 'vue';
import FlashCard from "@/components/FlashCard.vue";
import animals from '@/data/dummyFlashCards.json';

const showQuiz = ref(false)
const homeAnimalCards = ref(animals)
</script>
<template>
    <div class="container">
        <div class="text-container">
            <h1>Share your personalized deck with students</h1>
        </div>
        <div class="card-container">
            <div v-for="(card, idx) in homeAnimalCards.slice(0,5)" :key="card.id">
                <FlashCard
                    :showQuiz="false" 
                    :card="card" 
                    :style="{ 
                    'position': 'relative',
                    'float': 'right',
                    'top': idx * -407 + 'px',
                    'left': (idx % 2 === 0 ? -1 : 1) * (idx) * 25 + (idx === 0 ? -10 : 0) + 'px',
                    'z-index': 5 - idx,
                    'box-shadow': '0px 7px 6px #D9D9D9',
                    'overflow': 'hidden'
                    }">
                </FlashCard>
            </div>
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

.card-container {
    width: 45%; 
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 7rem;
    height: 100%;
}

.text-container {
    flex: 2;
    height: 100%;
    display: flex;
    align-items: center;

}

h1 {
    color: #B951F6;
    font-size: 40px;
    font-weight: 900;
}

</style>