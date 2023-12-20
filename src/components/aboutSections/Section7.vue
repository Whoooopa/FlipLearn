<template>
    <div class="container">
        <div>
            <h1>Student's deck anatomy</h1>
            <div class="image-container">
                <img src="@/assets/studentDeck.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: #9C47D1;
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
    color: #F3F6F9;
    font-size: 40px;
    font-weight: 900;
}

.image-container {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
}

img {
    width: 100%;
    height: 70%;
}


</style>