<script setup>
const {card, showQuiz, editMode} = defineProps(['card', 'showQuiz','editMode'])
const emit = defineEmits(["selectOption"])

const emitSelectedOption = (isCorrect) => {
    emit("selectOption", isCorrect)
}
</script>

<template>
    <div class="card">
        <div class="wrapper">
            <img :src="card.image" alt="">
            <div v-if="showQuiz" class="quiz">
                <input v-if="editMode" type="text" v-model="card.question">
                <h6 v-else>{{ card.question }}</h6>
                <div v-if="editMode" class="options-container">
                    <input v-for="answer in card.answers" :key="answer.id" v-model="answer.text" class="option">
                </div>
                <div v-else class="options-container">
                    <div v-for="answer in card.answers" :key="answer.id" class="option" @click="emitSelectedOption(answer.isCorrect)">
                        {{ answer.text }}
                    </div>
                </div>
            </div>
            <div v-else class="content">
                <input v-if="editMode" type="text" v-model="card.title">
                <h3 v-else>{{ card.title }}</h3>
                <div class="description-wrapper">
                    <textarea v-if="editMode" type="text" v-model="card.description" class="description-edit"  rows="4" cols="50">{{ card.description }}</textarea>
                    <p v-else class="description">{{ card.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 300px;
    height: 400px;
    background-color: #FFFFFF;
    padding: 0.75rem 2rem;
    border-radius: 15px;
    transition: 1s transform ease-in;
}

.wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

img {
    display: block;
    margin: 0 auto;
    padding: 1rem 0;
    width: 100%;
    height: 180px;
    border-radius: 30px / 40px;
}

.content, .quiz {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.description-wrapper {
    display: flex;
    align-items: center;    
    height: 100%;
}


h6, h3 {
    text-align: center;
    font-weight: 600;
}

.description { 
    display: block;
    text-align: center;
    margin: auto 0;
    
}

.options-container{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.option{
    background-color:#F3F6F9;
    color: black;
    border: 1px solid #9C47D1;
    border-radius: 15px;
    padding: 0.25rem 1rem;
    font-size: 12px;
}
</style>