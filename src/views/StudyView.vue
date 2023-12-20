<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { doc, getDoc, setDoc, getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '@/firebase';
import t from "@/data/dummyTags.json"
import FlashCard from "@/components/FlashCard.vue";
import animals from '@/data/dummyFlashCards.json';
import router from "@/router";

const showQuiz = ref(false)
const animalsref = ref(animals) 

const currentIndex = ref(0);

const onRightButtonClick = () => {
  currentIndex.value = (currentIndex.value + 1) % animalsref.value.length;
};

const onLeftButtonClick = () => {
  currentIndex.value = (currentIndex.value - 1 + animalsref.value.length) % animalsref.value.length;
};


</script>
<template>
    <div class="outerContainer">
      <div class="flashcard-section">
        <h1>Study Mode</h1>
        <div class="flashcards">
          <i class="fa-solid fa-circle-left fa-2x" @click="onLeftButtonClick"></i>
          <div class="cardsContainer">
            <FlashCard
              :showQuiz="showQuiz"
              :card="animalsref[currentIndex]"
              :style="{ 
                'box-shadow': '0px 7px 6px #D9D9D9',
                'overflow': 'hidden'
              }"
            ></FlashCard>
          </div>
          <i class="fa-solid fa-circle-right fa-2x" @click="onRightButtonClick"></i>
        </div>
        <div class="buttonGroup">
          <button class="editButton" @click="$router.push('quiz')">Quiz</button>
        </div>
      </div>
    </div>
  </template>
<style scoped>
.outerContainer {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f3f6f9;
    align-items: center;
    padding-top: 4rem;
}

i {
    cursor: pointer;
}

.buttonGroup {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
.createButton,.editButton {

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

.flashcard-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
}
.flashcards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 82%;
}

.cardsContainer {
    width: 45%; 
    height: 100%;
    
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    display: flex;
    justify-content: center;    
}

</style>