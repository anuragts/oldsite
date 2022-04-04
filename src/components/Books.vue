<template>
  <div class="books">
    <div class="title">Bookshelf</div>
    <div class="head">
      I love to <span class="und">read books</span> and many times wanted to share them with others, so  so through this, I am making my own 
      <span class="und">bookshelf.</span>
      <div class="book">
        ⭐<span class="und">
          Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad
          Ones</span
        >
        - James Clear
      </div>
      <div class="book">
        ⭐<span class="und">
          The Psychology of Money: Timeless Lessons on Wealth, Greed, and
          Happiness</span
        >
        - Morgan Housel
      </div>
      <div class="book">
        ⭐<span class="und"> Do Epic Shit</span>
        - Ankur Warikoo
      </div>
      <div class="book">
        ⭐<span class="und"> A Brief History of Time</span>
        - Stephen Hawking
      </div>
      <div class="book">
        ⭐<span class="und"> Full-Stack React, Typescript, and Node</span>
        - David Choi
      </div>
    </div>
    <!-- To Read -->

    <div class="title" id="secnd">To Read Checklist!</div>
    <div class="book">
      <i
        class="fa fa-star fa-sm"
        style="color: rgb(121, 190, 219)"
        aria-hidden="true"
      ></i
      ><span class="und"
        >Zero to One: Notes on Start Ups, or How to Build the Future
      </span>
      - Peter Thiel
    </div>
    <div class="book">
      <i
        class="fa fa-star fa-sm"
        style="color: rgb(121, 190, 219)"
        aria-hidden="true"
      ></i
      ><span class="und">Deep Work </span>
      - Cal Newport
    </div>
    <div class="book">
      <i
        class="fa fa-star fa-sm"
        style="color: rgb(121, 190, 219)"
        aria-hidden="true"
      ></i
      ><span class="und">Rejection Proof </span>
      - Jia Jiang
    </div>
    <div class="book">
      <i
        class="fa fa-star fa-sm"
        style="color: rgb(121, 190, 219)"
        aria-hidden="true"
      ></i
      ><span class="und"
        >What If? Serious Scientific Answers to Absurd Hypothetical Questions
      </span>
      - Randall Munroe
    </div>
    <div class="book">
      <i
        class="fa fa-star fa-sm"
        style="color: rgb(121, 190, 219)"
        aria-hidden="true"
      ></i
      ><span class="und"
        >The Man Who Knew Infinity: A Life of the Genius Ramanujan
      </span>
      - Robert Kanigel
    </div>
    <div class="book">
      <i
        class="fa fa-star fa-sm"
        style="color: rgb(121, 190, 219)"
        aria-hidden="true"
      ></i
      ><span class="und">My Inventions, Autobiography of Nikola Tesla </span>
      - Nikola Tesla
    </div>
    <div class="book">
      <i
        class="fa fa-star fa-sm"
        style="color: rgb(121, 190, 219)"
        aria-hidden="true"
      ></i
      ><span class="und">The Adventures of Sherlock Holmes </span>
      - Sir Arthur Conan Doyle
    </div>

    <div class="git">
      Have a <span class="und">book recommendation</span>? Get in touch!
    </div>
  </div>
</template>
<style scoped>
#secnd {
  margin-top: 8rem;
}
.book {
  margin-top: 2rem;
  line-height: 1cm;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
}
.head {
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  margin-top: 2rem;
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
.git {
  margin-top: 5rem;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Josefin Sans", sans-serif;
  padding-bottom: 10px;
  text-align: center;
}
.und {
  text-decoration: underline;
  text-decoration-color: var(--third);
  text-decoration-thickness: 0.25rem;
}
@media only screen and (max-width: 420px) {
  .title {
    font-size: 30px;
  }
  .head {
    font-size: 1.2rem;
  }
  .book {
    font-size: 1rem;
    line-height: 0.8cm;
  }
}
</style>
