<script setup>
import ProfileView from './ProfileView.vue';
</script>

<template>
    <div class="container">
        <ProfileView 
        :is-owner="no"
        />
    </div>
</template>