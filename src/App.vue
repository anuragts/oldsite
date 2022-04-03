<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";

</script>

<template>
<Navbar />
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

:root {
  --primary: #F3F8FF;
  --black: #1f1c1c;
  --third: #8e84d0;

}
</style>
