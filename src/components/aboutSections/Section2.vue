<script setup>
import { ref } from "vue"
import FlashCard from "@/components/FlashCard.vue";
import mushroomCard from "@/data/mushroomCard.json";
const card = ref(mushroomCard)

</script>
<template>
    <div class="container">
        <div class="text-container">
            <h1>How does Fliplearn work ?</h1>
            <p>As a teacher you have the ability to create a card. A card can have an image, for example human anatomy or words in different language. The title and the description will provide your explanation of what’s in the image.</p>
        </div>
        <div class="card-container">
            <FlashCard 
                style="box-shadow: 15px 15px #D9D9D9;"
                :card="card"
                :showQuiz="false"
            />
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
    flex: 2;
    width: 45%; 
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
    color: #F3F6F9;
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 5rem;
}

p {
    width: 70%;
    color: #F3F6F9;
    font-size: 20px;
    font-weight: 900;
}

</style>