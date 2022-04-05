<script>
import { RouterLink, RouterView } from "vue-router";
import MakeProject from "@/components/MakeProject.vue";

export default {
  name: "Posts",
  components: {
    MakeProject,

    RouterLink,
    RouterView,
  },
};
</script>
<template>
  <div class="projects">
    <div class="title">Projects</div>
    <!-- project start -->
    <div class="box">
      <MakeProject
        title="Project 1"
        body="This is Test Project 1"
      />
      <div class="rt">
        <router-link to="/" class="btn">Read-More</router-link>
      </div>
    </div>
    <!-- project end -->
     <!-- project start -->
    <div class="box">
      <MakeProject
        title="Project 2"
        body="This is Test Project 2"
      />
      <div class="rt">
        <router-link to="/" class="btn">Read-More</router-link>
      </div>
    </div>
    <!-- project end -->
     <!-- project start -->
    <div class="box">
      <MakeProject
        title="Project 3"
        body="This is Test Project 3"
      />
      <div class="rt">
        <router-link to="/" class="btn">Read-More</router-link>
      </div>
    </div>
    <!-- project end -->
    
  </div>
</template>
<style scoped>
.btn:hover {
  color: var(--third);
  background-color: var(--primary);
  border: 2px solid var(--third);
}
.box {
  outline-style: solid;
  outline-color: var(--third);
  outline-width: 2px;
}
.btn {
  background-color: var(--third);
  color: var(--primary);
  padding: 1rem 1.5rem;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.3rem;
}
.rt {
  text-align: center;
  padding-bottom: 3rem;
}
.title {
  font-size: 40px;
  font-weight: 400;
  font-family: "Josefin Sans", sans-serif;
  padding-bottom: 10px;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: var(--third);
}
@media only screen and (max-width: 420px) {
  .title {
    font-size: 30px;
  }
}
</style>
