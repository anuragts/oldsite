<script>
import { RouterLink, RouterView } from "vue-router";
import MakePost from "@/components/MakePost.vue";
export default {
  name: "Posts",
  components: {
    MakePost,
    RouterLink,
    RouterView,
  },
};
</script>
<template>
  <div class="posts">
    <div class="title">Posts</div>
    <MakePost
      title="Test Title"
      body="Satoshi Nakamoto is the name used by the presumed pseudonymous[1][2][3][4] person or persons who developed bitcoin, authored the bitcoin white paper, and created and deployed bitcoin's original reference implementation.[5] As part of the implementation, Nakamoto also devised the first blockchain database.[6] Nakamoto was active in the development of bitcoin up until December 2010.[7] Many people have or have been claimed to be Nakamoto"
      to="books"
    />
    <MakePost
      title="Test Title"
      body="Satoshi Nakamoto is the name used by the presumed pseudonymous[1][2][3][4] person or persons who developed bitcoin, authored the bitcoin white paper, and created and deployed bitcoin's original reference implementation.[5] As part of the implementation, Nakamoto also devised the first blockchain database.[6] Nakamoto was active in the development of bitcoin up until December 2010.[7] Many people have or have been claimed to be Nakamoto"
      to="books"
    />
    <MakePost
      title="Test Title"
      body="Satoshi Nakamoto is the name used by the presumed pseudonymous[1][2][3][4] person or persons who developed bitcoin, authored the bitcoin white paper, and created and deployed bitcoin's original reference implementation.[5] As part of the implementation, Nakamoto also devised the first blockchain database.[6] Nakamoto was active in the development of bitcoin up until December 2010.[7] Many people have or have been claimed to be Nakamoto"
      to="books"
    />
  </div>
</template>
<style scoped>
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
