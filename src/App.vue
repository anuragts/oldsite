<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue";
import Contact from './components/Contact.vue';

</script>

<template>
<Navbar />
  <RouterView />
  <Contact />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

:root {
  --primary: #F3F8FF;
  --secondary: #1f1c1c;
  --third: #8e84d0;

}
</style>
