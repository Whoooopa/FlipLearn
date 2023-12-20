<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import t from "@/data/dummyTags.json"
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';
const searchName = ref("")

const tags = ref(t)
const users = ref([])
const pickedTags = ref([])

const toggleTag = (tag) => {
    if (pickedTags.value.includes(tag)) {
        pickedTags.value = pickedTags.value.filter(selectedTag => selectedTag !== tag);
    } else {
        pickedTags.value.push(tag);
    }
};


onBeforeMount(async () => {
    let usersCollection = await getDocs(collection(db, 'users'));
    usersCollection.forEach(user => {
        if (user.data().role === 'teacher') {
            users.value.push({...user.data(), id: user.id});
        }
    });
});

const filteredUsers = computed(() => {
    return users.value.filter(user => 
        user.name.toLowerCase().includes(searchName.value.toLowerCase()) &&
        (pickedTags.value.length === 0 || user.tags.some(tag => pickedTags.value.includes(tag)))
    );
});
const filterUsers = () => {
    return filteredUsers.value;
}

</script>
<template>
    <div class="container">
        <div class="search">
                <div class="search-bar" placeholder="Enter a deck name">
                    <input type="text" v-model="searchName">
                    <i @click="filterUsers" class="fa-brands fa-searchengin fa-2x"></i>
                </div>
                <div class="tags-recommendation">
                    <div v-for="tag in tags" class="tag" :key="tag.id" :class="{ 'selected': pickedTags.includes(tag.name) }" @click="toggleTag(tag.name)">{{ tag.name }}</div>
                </div>
        </div>
        <div class="results">
            <div v-for="user in filteredUsers" :key="user.id" class="card" @click="$router.push('teacher-profile')">
                <div class="boxContainer">
                    <div class="roundedContainer">
                        <i class="fa-regular fa-user fa-3x"></i>
                    </div>
                </div>
                <h1>{{ user.name }}</h1>
                <div class="tags-container">
                    <div v-for="tag in user.tags" :key="tag.id" class="tag">{{ tag }}</div>
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
    cursor: pointer;
}


.boxContainer {
    width: 70%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.roundedContainer {
    width: 120px;
    height: 120px;
    background-color: #D9D9D9;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}


.card h1 {
    display: block;
    height: 25%;
    text-align: center;
    color: black;
    padding-top: 1rem;
}
.tags-container {
    width: 100%;
    height: 25%;
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