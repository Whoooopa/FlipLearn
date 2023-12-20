<script setup>
import {ref, onMounted} from 'vue';
import FlashCard from "@/components/FlashCard.vue";
import animals from '@/data/dummyFlashCards.json';

const showQuiz = ref(false)
const animalCards = ref([])



const onDelete = () => {
    // Remove the first card from the array
    const deletedCard = animalCards.value.shift();

    // Update the id for all remaining cards based on their new order
    animalCards.value.forEach((card, idx) => {
        card.id = idx + 1; // Update the id
        card.style = {
            'position': 'relative',
            'float': 'right',
            'top': idx * -407 + 'px',
            'left': (idx % 2 === 0 ? -1 : 1) * (idx) * 25 + (idx === 0 ? -10 : 0) + 'px',
            'box-shadow': '0px 7px 6px #D9D9D9',
            'overflow': 'hidden'
        };
    });
    console.log('Deleted Card:', deletedCard);
};

const onRightButtonClick = () => {
    // Move the first card to the end of the array
    const shiftedCard = animalCards.value.shift();
    animalCards.value.push(shiftedCard);

    // Update the id for all cards based on their new order
    animalCards.value.forEach((card, idx) => {
        card.id = idx + 1; // Update the id
        card.style = {
            'position': 'relative',
            'float': 'right',
            'top': idx * -407 + 'px',
            'left': (idx % 2 === 0 ? -1 : 1) * (idx) * 25 + (idx === 0 ? -10 : 0) + 'px',
            'box-shadow': '0px 7px 6px #D9D9D9',
            'overflow': 'hidden'
        };
    });
};

const onLeftButtonClick = () => {
    // Move the last card to the beginning of the array
    const poppedCard = animalCards.value.pop();
    animalCards.value.unshift(poppedCard);

    // Update the id for all cards based on their new order
    animalCards.value.forEach((card, idx) => {
        card.id = idx + 1; // Update the id
        card.style = {
            'position': 'relative',
            'float': 'right',
            'top': idx * -407 + 'px',
            'left': (idx % 2 === 0 ? -1 : 1) * (idx) * 25 + (idx === 0 ? -10 : 0) + 'px',
            'box-shadow': '0px 7px 6px #D9D9D9',
            'overflow': 'hidden'
        };
    });
};

onMounted(()=>{
    animalCards.value.push(...animals)
})

</script>
<template>
    <div class="container">
        <div class="flashcard-section">
            <div class="flashcards">
                <i class="fa-solid fa-circle-left fa-2x" @click="onLeftButtonClick"></i>
                <div class="cardsContainer">
                    <div v-for="(card, idx) in animalCards.slice(0,5)" :key="card.id">
                        <FlashCard
                            :showQuiz="false" 
                            :card="card" 
                            :style="{ 
                            'position': 'relative',
                            'float': 'right',
                            'top': idx * -407 + 'px',
                            'left': (idx % 2 === 0 ? -1 : 1) * (idx) * 20 + (idx === 0 ? -10 : 0) + 'px',
                            'z-index': 5 - idx,
                            'box-shadow': '0px 7px 6px #D9D9D9',
                            'overflow': 'hidden'
                            }">
                        </FlashCard>
                    </div>
                </div>
                <i class="fa-solid fa-circle-right fa-2x" @click="onRightButtonClick"></i>
            </div>
            <div class="buttonGroup">
                <button class="editButton" @click="onDelete">Delete</button>
            </div>
        </div>
        <div class="text-container">
            <h1>Edit Mode</h1>
            <div class="desc">
                In the edit mode you can scroll down to see the flashcard that are contained in that deck
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: #F3F6F9;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;    
    width: 100%;
}

.flashcard-section {
    width: 55%; 
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 7rem;
    height: 100%;
    flex-direction: column;
    align-items: center;
}

.flashcards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    height: 82%;
}

.cardsContainer {
    width: 100%; 
    height: 100%;
    padding-left: 1rem;
    padding-right: 4rem;
}

.buttonGroup {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 1rem;
    justify-content: center;
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
    flex: 2;
    padding-right: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

}

h1 {
    color: #B951F6;
    font-size: 40px;
    font-weight: 900;
}

.desc {
    margin-top: 6rem;
    padding-bottom: 2rem;
    width: 70%;
    text-align: center;
    color: black;
    font-size: 20px;
    font-weight: 600;
}

i {
    cursor: pointer;
}

</style>