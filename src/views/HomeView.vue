<script setup>
import FlashCard from '@/components/FlashCard.vue';
import HeroSection from '@/components/homeSections/HeroSection.vue';
import Section2 from '@/components/homeSections/Section2.vue';
import Section3 from '@/components/homeSections/Section3.vue';
import Section4 from '@/components/homeSections/Section4.vue';
import Section5 from '@/components/homeSections/Section5.vue';
import { ref, onBeforeMount, onMounted } from "vue";
import { db, auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from "firebase/firestore";

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

</script>

<template>
  <main>
    <HeroSection />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 v-if="!isLoggedIn" />
  </main>
</template>

<style scoped>
</style>
