<script setup>
import {RouterLink} from "vue-router"
import { onMounted, ref, onBeforeMount } from "vue";
import { db, auth } from '@/firebase';
import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
import router from "@/router";

const isLoggedIn = ref(false);
const role = ref("");

onBeforeMount(() => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            isLoggedIn.value = true;
            const userDoc = doc(db, "users", user.uid)
            const docSnap = await getDoc(userDoc);
            if (docSnap.exists()) {
                role.value = docSnap.data().role;
            }
        } else {
            isLoggedIn.value = false;
            role.value = "";
        }
    })
});

const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push('/');
    });
}

</script>

<template>
    <div class="navbar">
        <div>
            <div>
                <RouterLink 
                style="text-decoration: none;" 
                class="logo"
                to="/"
            >FlipLearn</RouterLink>
            </div>
            <div>
                <RouterLink 
                    v-if="isLoggedIn"
                    style="text-decoration: none;
                    font-weight: 600;"  
                    active-class="active" 
                    to="/decks"
                >Decks</RouterLink>
                <RouterLink 
                    v-if="role==='teacher'" 
                    style="text-decoration: none;
                    font-weight: 600;"  
                    active-class="active" 
                    to="/create-deck"
                >Create Deck</RouterLink>
                <RouterLink 
                    v-if="role==='teacher'" 
                    style="text-decoration: none;
                    font-weight: 600;"  
                    active-class="active" 
                    to="/add-flashcard"
                >Add Flashcard</RouterLink>
                <RouterLink 
                    v-if="role==='student'" 
                    style="text-decoration: none;
                    font-weight: 600;"  
                    active-class="active" 
                    to="/search"
                >Search</RouterLink>
                <RouterLink 
                    v-if="role==='student'" 
                    style="text-decoration: none;
                    font-weight: 600;"  
                    active-class="active" 
                    to="/teachers"
                >Teachers</RouterLink>
                <RouterLink 
                    style="text-decoration: none;
                    font-weight: 600;"  
                    active-class="active" 
                    to="/about"
                >About</RouterLink>
            </div>
        </div>
        <div>
            <RouterLink
                v-if="!isLoggedIn" 
                style="text-decoration: none;
                font-weight: 600;"  
                active-class="active" 
                to="/register"
            >Register</RouterLink>
            <RouterLink 
                v-if="!isLoggedIn"
                style="text-decoration: none;
                font-weight: 600;"  
                active-class="active" 
                to="/login"
            >Login</RouterLink>
            <i @click="$router.push('profile')" class="fa-regular fa-user fa-xl" v-if="isLoggedIn"></i>
            <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
        </div>
    </div>
</template>
<style scoped>
.active {
    font-weight: 900;
    color: white;
}

.navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 60px;
    background-color: #C682ED;
    padding: 0 5rem;
    position: fixed;
    top: 0;
    z-index: 10;
}

.navbar div, i {
    display: flex;
    gap: 3rem;
    margin: auto 0;
}

.logo {
    font-weight: 800;
    font-size: 24px;
    color: black;
}

i {
    cursor: pointer;
}
button {
    cursor: pointer;
    font-weight: 600;
    background-color: #C682ED;
    border: none;
}


</style>