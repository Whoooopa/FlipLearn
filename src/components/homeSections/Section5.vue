<template>
    <div class="container">
        <div class="signup-card">
            <h1>Customize your own flashcard now</h1>
            <div>
                <h4>Get teacher account</h4>
                <button @click="$router.push('register')">SignUp</button>
            </div>
        </div>
        <div class="signup-card">
            <h1>Experience learning with us</h1>
            <div>
                <h4>Get student account</h4>
                <button @click="$router.push('register')">SignUp</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    height: 100vh;
    background-color: #F3F6F9;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 3rem;
    gap: 3rem;
}

.signup-card{
    width: 50%;
    padding: 2rem 6rem;
    display: flex;
    flex-direction: column;
    gap: 10rem;
    border: 1px solid white;
    border-radius: 15px;
    box-shadow: 1px 1px 10px #d9d9d9;
}

.signup-card div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

h1 {
    color: #B951F6;
    font-size: 36px;
    font-weight: 900;
    text-align: center;
}

h4 {
    color: #B951F6;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
}

button{
    background-color: #C682ED;
    color: #18061E;
    width: 100px;
    padding: 0.3rem 0;
    border-radius: 10px;
    border: 1px solid #C682ED;
    cursor: pointer;
    font-weight: 600;
}

button:hover {
    background: #f3f6f9;
    color: #C682ED;
}
</style>