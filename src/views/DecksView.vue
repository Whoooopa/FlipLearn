<script setup>
import { ref, onMounted, onBeforeMount, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { doc, getDoc, setDoc, getFirestore, collection, getDocs, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '@/firebase';
import dummyDecks from "@/data/dummyDecks.json";

const decks = ref([])
const router = useRouter()
const showDeleteOverlay = ref(false)
const agreeToDelete = ref(false)


const isLoggedIn = ref(false);
const role = ref("");

onBeforeMount(() => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            isLoggedIn.value = true;
            const userDoc = doc(db, "users", user.uid)
            const docSnap = await getDoc(userDoc);
            if (docSnap.exists()) {
                role.value = docSnap.data().role;
            }
        } else {
            isLoggedIn.value = false;
            role.value = "";
        }
    })
});

onBeforeMount(async() => {

    let decksCollection = await getDocs(collection(db, 'decks'))
    decks.value.push(...dummyDecks)
    decksCollection.forEach(async (deck) => {
        let flashcardsCollection = await getDocs(collection(db, 'decks/' + deck.id + "/cards"))
        const flashcardsArray = flashcardsCollection.docs.map(flashcard => flashcard.data());
        decks.value.push({...deck.data(), cards: flashcardsArray, id: deck.id})
    })
})

async function deleteRecord(id) {
    await deleteDoc(doc(db, 'decks', id))
}

const openDeleteOverlay = (id) => {
    
    showDeleteOverlay.value = true
    deleteRecord(id)
}
</script>
<template>
    <div class="container">
        <div class="overlay" v-if="showDeleteOverlay">
            <div class="overlayBox">
                <h1>Warning</h1>
                <h2>This will erase the deck permanently
                    <br>
                    Are you sure?
                </h2>
                <div class="overlayButtons">
                    <button @click="showDeleteOverlay=false" style="background-color: #DF5555;">Yes</button>
                    <button @click="showDeleteOverlay=false">No</button>
                </div>
                
            </div>
        </div>
        <div class="deckLayout">
            <div class="deckHeader">
                <p>Decks</p>
                <p>Cards</p>
            </div>
            <div v-for="deck in decks" :key="deck.id" class="deckItem">
                <p class="deckName">{{ deck.name }}</p>
                <div class="secondHalf">
                    <div class="cardCount">
                        <p>{{ deck.cards.length }}</p>
                    </div>
                    <div class="buttonGroup">
                        <button v-if="role==='teacher'" @click="$router.push('edit-deck')">Edit</button>    
                        <button v-if="role==='teacher'" @click="deleteRecord(deck.id), showDeleteOverlay=true">Delete</button>
                        <button v-if="role==='student'" @click="$router.push('study')">Review</button>
                    </div>
                </div>
            </div>
        </div>
        <button v-if="role==='teacher'" class="createButton" @click="$router.push('create-deck')">Create Deck</button>
        <button v-if="role==='student'" class="createButton" @click="$router.push('search')">Search Decks</button>
    </div>
</template>
<style scoped>
.container {
    background-color: #f3f6f9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #18061E;
}

.overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, 0.33);
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

.overlayBox h2 {
    display: block;
    height: 25%;
    text-align: center;
}

.overlayBox h1 {
    display: block;
    height: 25%;
    color: #DF5555;
    font-weight: bolder;
    margin-bottom: 1rem;
}

.overlayButtons{
    display: flex;
    flex-direction: row;
    gap: 3rem;
}

.overlayBox button {
    background-color: #f3f6f9;
    border: 1px solid #9C47D1;
    border-radius: 10px;
    width: 80px;
    margin-top: 1rem;
    padding: 0.4rem 0;
}
.deckLayout {
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 80%;
    height: 50%;
    border: 1px solid black;
    border-radius: 15px;
    padding: 1rem;
}

.deckHeader {
    display: flex;
    flex-direction: row;
    padding: 0 1rem;
    border-bottom: 1px solid black;
}

.deckItem {
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    width: 95%;
    border-bottom: 1px solid black;
}

.deckName {
    width: 50%;
}

.secondHalf {
    width: 50%;
}

.deckItem, .secondHalf, .buttonGroup  {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.buttonGroup {
    gap: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: end;  
    margin: 0 auto;
    width: 200px;
}

.deckHeader p:first-child {
    width: 57%;
}

.cardCount {
    width: 100px;
    text-align: end;
}

.buttonGroup button {
    width: 5rem;
    border-radius: 15px;
    font-weight: 600;
    font-size: 14px;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-align: center;
    color: #F3F6F9;
    background-color: #C682ED;
    border: 1px solid #C682ED;
    cursor: pointer;
}

.createButton {

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

button {
    cursor: pointer;
}
</style>