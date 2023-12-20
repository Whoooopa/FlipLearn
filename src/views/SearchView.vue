<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import t from "@/data/dummyTags.json"
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';
import dummyDecks from "@/data/dummyDecks.json";
const searchName = ref("")

const tags = ref(t)
const decks = ref([])
const pickedTags = ref([])

const toggleTag = (tag) => {
    if (pickedTags.value.includes(tag)) {
        pickedTags.value = pickedTags.value.filter(selectedTag => selectedTag !== tag);
    } else {
        pickedTags.value.push(tag);
    }
};


onBeforeMount(async() => {

    let decksCollection = await getDocs(collection(db, 'decks'))
    decks.value.push(...dummyDecks)
    decksCollection.forEach(async (deck) => {
        let flashcardsCollection = await getDocs(collection(db, 'decks/' + deck.id + "/cards"))
        const flashcardsArray = flashcardsCollection.docs.map(flashcard => flashcard.data());
        decks.value.push({...deck.data(), cards: flashcardsArray, id: deck.id})
    })
})

const filteredDecks = computed(() => {
  return decks.value.filter(deck => 
    deck.name.toLowerCase().includes(searchName.value.toLowerCase()) &&
    (pickedTags.value.length === 0 || deck.tags.some(tag => pickedTags.value.includes(tag)))
  );
});

const filterDecks = () => {
  return filteredDecks.value; // Return the filtered decks
}

</script>
<template>
    <div class="container">
        <div class="search">
                <div class="search-bar" placeholder="Enter a deck name">
                    <input type="text" v-model="searchName">
                    <i @click="filterDecks" class="fa-brands fa-searchengin fa-2x"></i>
                </div>
                <div class="tags-recommendation">
                    <div v-for="tag in tags" class="tag" :key="tag.id" :class="{ 'selected': pickedTags.includes(tag.name) }" @click="toggleTag(tag.name)">{{ tag.name }}</div>
                </div>
        </div>
        <div class="results">
            <div v-for="deck in filteredDecks" :key="deck.id" class="card">
                <h1>{{ deck.name }}</h1>
                <div class="tags-container">
                    <div v-for="tag in deck.tags" :key="tag.id" class="tag">{{ tag }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    background: #f3f6f9;
    color: #18061E;
}

.search {
    margin-top: 3rem;
    width: 100%;
    height: 20%;
}

.search-bar {
    width: 70%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    border: 1px thin black;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 10px 0px 5px #d9d9d9;
}

.tags-recommendation .tag.selected {
    background-color: #acacac;
    color: black;
}

i {
    cursor: pointer;
}

input {
    width: 100%;
    background-color: #f3f6f9;
}

.tags-recommendation {
    margin: 0 auto;
    width: 70%;
    height: 55%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding-left: 1rem;
    gap: 0rem;
    background-color: #ffffff;
    box-shadow: 10px 5px 5px #d9d9d9;
}
.tags-recommendation .tag {
    display: inline-block;
    padding: 0rem 1rem;
    background-color: #60BAAE;
    cursor: pointer;
    border: 1px solid #60BAAE;
    border-radius: 15px;
    margin: 1rem 0.5rem;
    font-size: 10px;
}
.results {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 7rem;
    gap: 4rem;
}

.card {
    width: 250px;
    height: 300px;
    border: 1px thin black;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px #d9d9d9;
}

.card h1 {
    display: block;
    height: 40%;
    text-align: center;
    color: black;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
.tags-container {
    width: 100%;
    height: 60%;
    padding: 1rem;
    overflow-y: hidden;
}

.tags-container .tag {
    display: inline-block;
    padding: 0.2rem 1rem;
    background-color: #60BAAE;
    cursor: pointer;
    border: 1px solid #60BAAE;
    border-radius: 15px;
    margin: 1rem 0.5rem;
}
</style>