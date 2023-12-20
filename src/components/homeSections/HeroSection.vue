script
<template>
    <div class="container">
        <div>
            <h1>
                We aim to leverage your learning
                <br>
                experience to the best it can be
            </h1>
            <div class="buttons">
                <button @click="$router.push('about')">Learn More</button>
                <button @click="$router.push('register')">Join Us</button>
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
    align-items: center;
}

h1 {
    color: #B951F6;
    font-size: 40px;
    font-weight: 900;
}

.buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
}

button {
    border: 2px solid #C682ED;
    border-radius: 15px;
    background: #C682ED;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: #18061E;
    padding: 0.5rem 1rem;
    cursor: pointer;
}

.buttons button:hover {
    background: #f3f6f9;
    color: #C682ED;
}

</style>