<script></script>
<template>
  <div class="home">
    <div class="img"><img src="../img/big.png" alt="" class="profile" /></div>
    <div class="slogan">Hey, I'm <span class="und">Anurag</span>!</div>
    <div class="about">
      I'm fullstack developer , currently learning
      <span class="und">Web3 and Blockchain.</span> Interested in
      <span class="und">startups, finance, Blockchain </span>
      and many more. I love to work with other people in
      <span class="und">hackathons and collaborative projects.</span><br />
      I'm always looking to meet <span class="und">new people</span> so get in
      <span class="und">touch!</span> <br />
      <div class="rtr">
        <a class="cnt" href="https://twitter.com/theanuragdev">Connect with me! </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.rtr {
  margin-top: 1.2rem;
}
.slogan {
  margin-top: 2rem;
  font-size: 40px;
  font-weight: 400;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  margin-bottom: 2rem;
}
.cnt {
  font-size: 1.8rem;
  text-decoration: underline;
  text-decoration-color: var(--third);
  text-decoration-thickness: 0.25rem;
}
.about {
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.3rem;
  margin-left: 6rem;
  margin-right: 6rem;
  line-height: 1.6;
}
.und {
  text-decoration: underline;
  text-decoration-color: var(--third);
  text-decoration-thickness: 0.25rem;
}
.img {
  text-align: center;
}
.profile {
  margin-top: 2rem;
  width: 250px;
  border-radius: 50%;
  box-shadow: 0 4px 40px rgb(0 0 0 / 40%);
}
@media only screen and (max-width: 650px) {
  .about{
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  }
}
@media only screen and (max-width: 420px) {
.slogan{
  font-size: 30px;

}
.profile{
  width: 200px;
}
.cnt{
  font-size: 1.5rem;
}
}
</style>
