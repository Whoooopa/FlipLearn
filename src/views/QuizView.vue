<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import FlashCard from "@/components/FlashCard.vue";
import animals from '@/data/dummyFlashCards.json';
import router from "@/router";
import Result from "@/components/Result.vue";
import QuizHeader from "@/components/QuizHeader.vue";

const route = useRoute()
const quizes = ref(animals)
const showQuiz = ref(true)

const currentQuestionIndex = ref(0)
const numberOfCorrectAnswer = ref(0)
const showResults = ref(false)

const questionStatus = computed (() => `${currentQuestionIndex.value}/${quizes.value.length}`)
const barPercentage = computed(() => `${currentQuestionIndex.value/quizes.value.length * 100}%`)

const onOptionSelected = (isCorrect) => {
    if(isCorrect){
        numberOfCorrectAnswer.value++;
    }

    if(quizes.value.length - 1 === currentQuestionIndex.value){
        showResults.value = true
    }

    currentQuestionIndex.value++;
}


</script>
<template>
    <div class="outerContainer">
      <div class="flashcard-section">
        <QuizHeader             
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
        />
        <div class="flashcards">
          <div class="cardsContainer">
            <FlashCard
              v-if="!showResults"
              :showQuiz="showQuiz"
              :card="quizes[currentQuestionIndex]"
              :style="{ 
                'box-shadow': '0px 7px 6px #D9D9D9',
                'overflow': 'hidden'
              }"
              @selectOption="onOptionSelected" 
            ></FlashCard>
            <Result 
                v-else
                :quizQuestionLength="quizes.length"
                :numberOfCorrectAnswer="numberOfCorrectAnswer"
            />
          </div>
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
    color: #18061E;
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