<template>
<div class="contact">
  <a href="https://twitter.com/theanuragdev" class="icon"> <i class="fa-brands fa-twitter"></i></a>
  <a href="mailto:anuragsharma011011@gmail.com" class="icon"><i class="fa fa-envelope" aria-hidden="true"></i>
  <a href="https://github.com/Anurag30112003" class="icon"><i class="fa-brands fa-github"></i></a>
  <div class="mdw">Made with  <i class="fa-solid fa-heart" style="color: rgb(253, 91, 245);"></i> by <span class="cnt"> Anurag</span></div>
</a>
</div>
</template>
<style scoped>
.mdw{
    margin-top: 0.5rem;
    font-size: 1.2rem;
}
.icon{
    margin-left: 10px;
    margin-right: 10px;
}
.icon:hover{
    color: var(--third);
}
.contact {
    margin-top: 1rem;
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    font-size: 2rem;
    line-height: 1.6;
}
.cnt {
  text-decoration: underline;
  text-decoration-color: var(--third);
  text-decoration-thickness: 0.25rem;
}
</style>