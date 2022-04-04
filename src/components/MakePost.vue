<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="makepost">
    <div class="title">{{ title }}</div>
    <div class="body">{{ body }}</div>
    <!-- <router-link to="/books" class="btn" id="last">ReadMore</router-link> -->
  </div>
</template>
<style scoped>
.makepost {
  margin-top: 2rem;
  outline-style: solid;
  outline-color: var(--third);
  outline-width: 2px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
}
.title {
  margin-bottom: 1rem;
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
  text-align: center;
}
.body {
  font-family: "Josefin Sans", sans-serif;
  font-size: 20px;
  text-align: center;
}
@media only screen and (max-width: 550px) {
  .title {
    font-size: 25px;
  }
}
.body {
  font-size: 15px;
}
</style>
