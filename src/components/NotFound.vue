<template>
    <div class="not">
        <h1>404</h1>
        <h2>Page Not Found</h2>
    </div>
</template>
<style scoped>
    .not {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        background: var(--primary);
    }
    h1 {
        font-size: 100px;
        font-weight: 400;
        font-family: "Josefin Sans", sans-serif;
        color: var(--black);
        text-shadow: 2px 2px 15px rgb(58, 165, 236);
    }
    h2 {
        font-size: 40px;
        font-weight: 400;
        font-family: "Josefin Sans", sans-serif;
        color: var(--black);
        text-shadow: 2px 2px 15px rgb(58, 165, 236);
    }
</style>