<script setup>
import { ref, onMounted } from "vue"
import { doc, getDoc, setDoc, getFirestore, collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from '@/firebase';
import router from "@/router";
import dummyDecks from "@/data/dummyDecks.json";
import FlashCard from "@/components/FlashCard.vue";
import mushroomCard from "@/data/mushroomCard.json";
const card = ref(mushroomCard)
const decks = ref([])
const selectedDeck = ref("")

const styleFlip = ref("")

const isFlipped = ref(false)
const editMode = ref(false)
const editButtonName = ref("Edit")
const openOverlay = ref(false);


const onAdd = () => {
    openOverlay.value = true;
}

const redirectDecks = () => {
    return router.push('/decks');
}

const onFlip = () => {
    
    if(styleFlip.value){
        styleFlip.value = ""
    }else{
        styleFlip.value = "transform: rotateY(180deg); transition: 1s transform linear;"
    }
    setTimeout(()=>{
        isFlipped.value = !isFlipped.value
        styleFlip.value = " transform: rotateY(360deg); transition:  none;";
    }, 900)
}

const onEdit = () => {
    if(editButtonName.value === "Edit"){ 
        editButtonName.value = "Save";
        editMode.value = true;
    } else {
        editButtonName.value = "Edit";
        editMode.value = false;
    }
}

onMounted(async() => {

    let decksCollection = await getDocs(collection(db, 'decks'))
    decks.value.push(...dummyDecks)
    decksCollection.forEach(async (deck) => {
        let flashcardsCollection = await getDocs(collection(db, 'decks/' + deck.id + "/cards"))
        const flashcardsArray = flashcardsCollection.docs.map(flashcard => flashcard.data());
        decks.value.push({...deck.data(), cards: flashcardsArray, id: deck.id})
    })
})
</script>
<template>
    <div class="container">
        <div v-if="openOverlay" class="overlay">
            <div class="overlayBox">
                <h2>Successfuly Added Card to destined Deck</h2>
                <button @click="redirectDecks">Okay</button>
            </div>
        </div>
        <div class="card-container">
            <FlashCard 
                style="box-shadow: -15px 15px #D9D9D9;"
                :style="styleFlip"
                :card="card"
                :showQuiz="isFlipped"
                :editMode="editMode"
            />
            <div class="buttonGroup">
                <button class="cardButton" @click="onFlip">Flip</button>
                <button class="cardButton" @click="onEdit">{{ editButtonName }}</button>
            </div>
        </div>
        <div class="text-container">
            <h1>Select a deck to add to</h1>
            <select name="decks" id="decks" v-model="selectedDeck">
                <option value="" disabled>Please choose a deck</option>
                <option :value="deck.name" v-for="deck in decks" :key="deck.id">{{ deck.name }}</option>
            </select>
            <div class="buttonGroup">
                <button class="deckButton" @click="onAdd">Add</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: #f3f6f9;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;    
    width: 100%;
}

.overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, 0.33);
    z-index: 10;
}

.overlayBox {
    background-color: white;
    border: 1px solid white;
    border-radius: 15px;
    width: 50%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 10px black;
}

.overlayBox button {
    background-color: #f3f6f9;
    border: 1px solid #9C47D1;
    border-radius: 10px;
    width: 80px;
    margin-top: 1rem;
    padding: 0.4rem 0;
    cursor: pointer;
}

.overlayBox h2 {
    display: block;
    height: 25%;
}

.overlayBox input {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #9C47D1;
    border-radius: 5px;
    padding: 1rem 1rem;
    font-size: 15px;
    position: relative;
}
.card-container {
    padding: 2rem 2rem 0rem 2rem;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.cardButton {
    background-color: #C682ED;
    color: #18061E;
    width: 100px;
    padding: 0.3rem 0;
    border-radius: 10px;
    border: 1px solid #C682ED;
    cursor: pointer;
    font-weight: 600;
}

.text-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    box-shadow: -1px -5px 10px black;
}

h1 {
    color: #000000;
    font-size: 40px;
    font-weight: 900;
}
select {
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    width: 60%;
    font-size: 1rem;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
}

.buttonGroup {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.deckButton {

    margin-top: 10rem;
    width: 120px;
    height: 35px;
    border: 2px solid #9C47D1;
    border-radius: 5px;
    background: #F3F6F9;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #18061E;
    cursor: pointer;
}
</style>