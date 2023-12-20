<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import FooterVue from './components/Footer.vue';
</script>

<template>
  <div class="container">
      <NavBar />
      <RouterView v-slot="{ Component }"> 
        <Transition name="route" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </RouterView>
      <FooterVue />
  </div>

</template>

<style scoped>
.container{
  height: 100vh;
  background-color: #f3f6f9;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}


.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
