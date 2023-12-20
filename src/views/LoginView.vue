<script setup>
import Showcase from '@/components/Showcase.vue';
import { RouterLink } from "vue-router";
import router from '@/router';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
import { db, auth } from '@/firebase';
import { ref } from 'vue';
const email = ref("")
const password = ref("")
const errMsg = ref()
const role = ref("")

const login = async () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then(async (data) => {
        const userDoc = doc(db, "users", data.user.uid)
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
            role.value = docSnap.data().role;

            if(role.value){
                router.push('decks')
            }
        }
    })
    .catch((error) => {
        alert(error.message)
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid email";
                break;
            case "auth/user-not-found":
                errMsg.value = "No account with that email was found";
                break;
            case "auth/wrong-password":
                errMsg.value = "Incorrect password";
                break;
            default:
                errMsg.value = "Email or password was incorrect";
                break;
        }
    })
};

const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const userDoc = doc(db, "users", result.user.uid)
                const docSnap = await getDoc(userDoc);
                if (docSnap.exists()) {
                    role.value = docSnap.data().role;

                    router.push('decks')
                } else {
                    router.push('register')
                }
            })
            .catch((error) => {

            })
};
</script>
<template>
    <div class="container">
        <Showcase />
        <div class="loginForm">
            <button class="google" @click="signInWithGoogle">Sign in with Google
                <i class="fa-brands fa-google"></i>
            </button>
            <h2>Or</h2>
            <div>
                <input type="email" placeholder="Email" v-model="email" />
                <input type="password" placeholder="Password" v-model="password" />
                <p class="error" v-if="errMsg">{{ errMsg }}</p>
            </div>
            <button class="submit" @click="login">Login</button>
            <RouterLink 
                style="text-decoration: none;
                font-weight: 600;
                text-align: center"  
                active-class="active" 
                to="/register"
            >Dont have an account?
            <br> 
                Sign Up !</RouterLink>
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

.google {
    margin: 0 auto;
    padding: 0.75rem 4rem;
    border-radius: 10px;
    background-color: #f3f6f9;
    cursor: pointer;
    border: 1px solid #D9D9D9;
}

.loginForm div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
}

.error {
    text-align: center;
    color: red;
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

</style>