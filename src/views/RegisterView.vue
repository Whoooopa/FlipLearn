<script setup>
import Showcase from '@/components/Showcase.vue';
import { RouterLink } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { db, auth } from '@/firebase';
import { ref } from 'vue';
import router from '@/router';

const userInfo = ref({
    name: '',
    email: '',
    role: ''
})
const password = ref("")
const userId = ref("")

const saveUser = async () => {
  await setDoc(doc(db, "users", userId.value), userInfo.value);
}
const signup = () => {
  createUserWithEmailAndPassword(auth, userInfo.value.email, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      userId.value = user.uid;

      // Save new user to database
      saveUser();
      router.push('decks')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode)
    });
}
</script>
<template>
    <div class="container">
        <Showcase />
        <div class="loginForm">
            <h2>JOIN US!</h2>
            <div>
                <input type="name" placeholder="Name" v-model="userInfo.name"/>
                <input type="email" placeholder="Email" v-model="userInfo.email"/>
                <input type="password" placeholder="Password" v-model="password"/>
                <label for="roles">Choose a type:</label>
                <select name="roles" id="roles" v-model="userInfo.role">
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
            </div>
            <button class="submit" @click="signup">Sign Up</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    padding: 6rem 5rem 3rem 5rem;
    background-color: #f3f6f9;
    color: #18061E;
}
h2 {
    color: #000000;
    font-weight: 900;
}
.loginForm {
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 3px 6px #D9D9D9;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem;
    margin: 1rem;
    gap: 1rem;
}
.loginForm div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
}

input {
    margin: 0 auto;
    padding: 0.5rem 1rem;
    width: 60%;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    font-size: 1rem;
}

.submit {
    margin: 1rem auto;
    background-color: #C682ED;
    color: #18061E;
    width: 100px;
    padding: 0.3rem 0;
    border-radius: 10px;
    border: 1px solid #C682ED;
    cursor: pointer;
    font-weight: 600;
}

label, select {
    margin: 0 auto;
    padding: 0.5rem 1rem;
    width: 60%;
    font-size: 1rem;
}
label {
    margin: 0 auto;
    padding: 0.2rem 1rem;
    width: 60%;
    font-size: 1rem;
}

p {
    margin: 0 auto;
    width: 60%;
    font-size: 0.5rem;
    color: red;
}

select {
    border-radius: 10px;
    border: 1px solid #D9D9D9;
}

</style>