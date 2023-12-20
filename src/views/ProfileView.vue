<script setup>
import { ref } from 'vue';
const props = defineProps(['isOwner'])
const username = ref("Username#3290");
const editName = ref(false)
const editStyle = ref("")
const editTag = ref(false)
const profileTags = ref([
    "12th Grade", "Biology"
])
const newTag = ref("")

const addTag = () => {
    profileTags.value.push(newTag.value)
    editTag.value = false
    newTag.value = ""
}

console.log(props.isOwner)
</script>

<template>
    <div class="container">
        <div v-if="editTag" class="overlay">
            <div class="overlayBox">
                <h2>Add Tag</h2>
                <div class="inputWrapper">
                    <input type="text" v-model="newTag" maxlength="25" placeholder="Add a new tag">
                    <div class="charCount">{{ newTag.length }} / 25</div>
                </div>
                <button @click="addTag">Add</button>
            </div>
        </div>
        <div class="profileContainer">
            <div class="imageContainer">
                <div class="boxContainer">
                    <div class="roundedContainer">
                        <i class="fa-regular fa-user fa-10x"></i>
                    </div>
                    <i v-if="!$props.isOwner"  class="fa-solid fa-pen-to-square fa-2x editImage"></i>
                </div>
            </div>
            <div class="infoContainer">
                <div class="nameContainer">
                    <input v-if="!$props.isOwner" v-model="username">
                    <h1 v-else>{{ username }} </h1>
                    <i v-if="!$props.isOwner"  @click="editMode" class="fa-solid fa-pen-to-square fa-2x"></i>
                </div>
                <div class="tagsContainer">
                    <div class="tag" v-for="tag in profileTags" :key="tag.id">{{ tag }}</div>
                    <div v-if="!$props.isOwner" class="tag" @click="editTag=true">+</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container {
    height: 100vh;
    width: 100%;
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

.inputWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
}

.charCount {
    padding: 1rem 0.5rem;
    position: absolute;
    font-size: 12px;
    color: #9C47D1;
}

.overlayBox button {
    background-color: #f3f6f9;
    border: 1px solid #9C47D1;
    border-radius: 10px;
    width: 80px;
    margin-top: 1rem;
    padding: 0.4rem 0;
}
.profileContainer {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
}

.imageContainer {
    height: 70%;
    width: 45%;
}

.boxContainer {
    width: 70%;
    height: 70%;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: end;
}

.roundedContainer {
    width: 250px;
    height: 250px;
    background-color: #D9D9D9;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.infoContainer {
    margin-top: 3rem;
}

.editImage {
    cursor: pointer;
}

.nameContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
}

.tagsContainer {
    margin-top: 1rem;
    width: 400px;
    height: 200px;
}

.overlay .tag {
    display: inline-block;
    padding: 0.2rem 1.5rem;
    height: 2rem;
    background-color: #60BAAE;
    cursor: pointer;
    border: 1px solid #60BAAE;
    border-radius: 5px;
    margin: 1rem 0.5rem;
}

.tagsContainer .tag {
    display: inline-block;
    padding: 0.1rem 1rem;
    background-color: #60BAAE;
    cursor: pointer;
    border: 1px solid #60BAAE;
    border-radius: 15px;
    margin: 0.4rem 0.2rem;
}

.nameContainer input {
    padding: 0.2rem 0.5rem;
    font-size: xx-large;
}


</style>