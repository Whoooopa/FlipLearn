
import { routerViewLocationKey } from 'vue-router';
<template>
    <div class="container">
        <div>
            <h1>What is a deck ?</h1>
            <div class="desc">
                <p>
                    A deck is a place to group your flashcard. You can customize deck name and tags to fit your course material
                </p>
                <p>
                    There are 2 different version of decks. One is intended for teachers and the other is for student
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: #F3F6F9;
    padding: 0 7rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    display: block;
    text-align: center;
    color: #B951F6;
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 10rem;
}

.desc {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 5rem;
    font-size: 20px;
    color: black;
    font-weight: bold;
    display: flex;
    flex-direction: row;
}

p {
    width: 30%;
    margin: 0 auto;
    font-weight: 600;
}


</style>