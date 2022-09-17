<template>
  <div class="navbar">
    <ul>
      <li class="start">
        <router-link class="active" to="/">anurag</router-link>
      </li>
      <li>
        <router-link to="/books" class="r-link" id="last">books</router-link>
      </li>

      <li><a href="https://posts.anuragdev.me/" class="r-link">posts</a></li>
      <li><a id="proj" href="https://builds.anuragdev.me/" class="r-link">projects</a></li>
    </ul>
  </div>
</template>
<style scoped>
.navbar {
  margin-top: 2rem;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: right;
}

.start {
  float: left;
}

li .active {
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: "Nunito", sans-serif;
  color: var(--black);
  font-size: 1.8rem;
  font-weight: 800;
  padding-bottom: 20px;
  text-decoration: underline;
  text-decoration-color: var(--third);
  text-decoration-thickness: 0.25rem;
}
li .r-link {
  color: var(--third);
  text-align: center;
  margin-top: 10px;
  margin-left: 14px;
  margin-right: 14px;
  padding-bottom: 5px;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  display: inline-block;
  position: relative;
}
.r-link:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--third);
  transform-origin: bottom right;
  transition: transform 0.35s ease-out;
}
.r-link:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
#last {
  margin-right: 4vw;
}
@media only screen and (max-width: 650px) {
  .navbar {
    display: flex;
    justify-content: center;
  }
  .start {
     position: absolute;
     left: 50%;
     transform: translate(-50%, 0);

  }
li .r-link{
  padding-top: 0;
  margin-top:4rem;
  margin-bottom: 2rem;
}
}
@media only screen and (max-width: 350px) {

li .r-link{
  padding-top: 0;
  margin-top:3rem;
  margin-bottom: 1rem;
}
}
</style>
