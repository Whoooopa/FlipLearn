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

const isEdit = ref(false)
const styleFlip = ref("")
const selectedTags = ref([]) 


const redirectEditFlashcard = () => {
    router.push('/add-flashcard')
}

const onDelete = () => {
    // Remove the first card from the array
    const deletedCard = animalsref.value.shift();

    // Update the id for all remaining cards based on their new order
    animalsref.value.forEach((card, idx) => {
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
    const shiftedCard = animalsref.value.shift();
    animalsref.value.push(shiftedCard);

    // Update the id for all cards based on their new order
    animalsref.value.forEach((card, idx) => {
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
    const poppedCard = animalsref.value.pop();
    animalsref.value.unshift(poppedCard);

    // Update the id for all cards based on their new order
    animalsref.value.forEach((card, idx) => {
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


const deckName = ref("")
const tags = ref(t)
const singleTag = ref("")
const deck = ref({
    name: '',
    tags: []
})

const addTag = () => {
    if (!deck.value.tags.includes(singleTag.value) && singleTag.value) deck.value.tags.push(singleTag.value);
}

const addTagToDeck = (tagName) => {
  if (!deck.value.tags.includes(tagName)) {
    deck.value.tags.push(tagName);
  }
};

const toggleTag = (tag) => {
    if (selectedTags.value.includes(tag)) {
        selectedTags.value = selectedTags.value.filter(selectedTag => selectedTag !== tag);
        deck.value.tags = deck.value.tags.filter(selectedTag => selectedTag !== tag);
    } else {
        selectedTags.value.push(tag);
        addTagToDeck(tag);
    }
};




</script>
<template>
    <div class="outerContainer">
        <div class="innerContainer">
            <div class="inputGroup">
                <label for="name">Choose a name for your deck</label>
                <input class="input" type="text" name="name" id="name" placeholder="Name" v-model="deck.name">
                <label for="tag">Create a new tag</label>
                <div class="tagInput">
                    <input type="text" name="tag" id="tag" placeholder="Add a tag" v-model="singleTag"><button @click="addTag">+</button>
                </div>
                <div class="selectedTags">
                    <div class="inlineTag" v-for="tag in deck.tags" :key="tag.id">{{ tag }}</div>
                </div>
            </div>
            <div class="tagsGroup">
                <h1>Browse available tags</h1>
                <div class="tagsBox">
                    <div class="tag" v-for="tag in tags" :key="tag.id" :class="{ 'selected': selectedTags.includes(tag.name) }" @click="toggleTag(tag.name)">{{ tag.name }}</div>
                </div>
            </div>
        </div>
        <div class="flashcard-section">
            <h1>FlashCards</h1>
            <div class="flashcards">
                <i class="fa-solid fa-circle-left fa-2x" @click="onLeftButtonClick"></i>
                <div class="cardsContainer">
                    <div v-for="(card, idx) in animalsref.slice(0,5)" :key="card.id">
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
                <i class="fa-solid fa-circle-right fa-2x" @click="onRightButtonClick"></i>
            </div>
            <div class="buttonGroup">
                <button class="editButton" @click="redirectEditFlashcard">Edit</button>
                <button class="editButton" @click="onFlip">Flip</button>
                <button class="editButton" @click="onDelete">Delete</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.outerContainer {
    display: flex;
    flex-direction: column;
    height: 190vh;
    background-color: #f3f6f9;
    align-items: center;
    color: #18061E;
}


.innerContainer {
    display: flex;
    flex-direction: row;
    height: 90vh;
    gap: 4rem;
    padding: 0 7rem;
}

.tagsGroup {
    width: 500px;
    height: 50%;
}


.inputGroup {
    padding-top: 3rem;
}

.inputGroup, .tagsGroup {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
}

.inputGroup label {
    font-size: 24px;
}

.inputGroup .input{
    width: 80%;
    height: 100%;
    padding: 0.4rem 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;

    background: #EFEFEF;
    border: 1px solid #000000;
    border-radius: 10px;
    font-weight: 400;
    font-size: 18px;

    color: #000000;

}
i {
    cursor: pointer;
}
.tagInput {
    width: 80%;
    height: 100%;
    margin-bottom: 1rem;
    box-sizing: border-box;

    background: #EFEFEF;
    border: 1px solid #000000;
    border-radius: 10px;
    font-weight: 400;
    font-size: 18px;

    color: #000000;
    display: flex;
    flex-direction: row;
}

.tagInput input {
    width: 100%;
    padding: 0.4rem 1rem;
    border: 0px solid #000000;
    border-radius: 10px;
    font-size: 18px;
    background: #EFEFEF;
}

.tagInput button {
    border: 0px solid #000000;
    border-radius: 10px;
    width: 20%;
    background-color: #D9D9D9;
    font-size: 18px;
    cursor: pointer;
}

.tagsBox {
    background-color: white;
    height: 100%;
    border: 1px solid white;
    border-radius: 15px;
    padding: 1rem;
    box-shadow: 1px 1px 10px black inset;
    overflow-y: scroll;
}

.tag {
    display: inline-block;
    padding: 0.2rem 1rem;
    background-color: #60BAAE;
    cursor: pointer;
    border: 1px solid #60BAAE;
    border-radius: 15px;
    margin: 1rem 0.5rem;
}

.tag.selected {
    background-color: #acacac;
    color: black;
}

.selectedTags {
    width: 400px;
    height: 100px;
}

.inlineTag {
    display: inline-block;
    padding: 0.1rem 1rem;
    background-color: #60BAAE;
    cursor: pointer;
    border: 1px solid #60BAAE;
    border-radius: 15px;
    margin: 0.4rem 0.2rem;
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
    padding-right: 7rem;
    padding-top: 3rem;
}

</style>