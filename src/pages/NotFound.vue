<template>
  <v-container class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>
      The page you are looking for might have been removed, had its name changed
      or is temporarily unavailable.
    </p>
    <router-link to="/">Go to Home</router-link>
  </v-container>
</template>

<style scoped>
.not-found {
  text-align: center;
}
h1 {
  font-size: 10rem;
  color: var(--main-color);
}
h2 {
  font-size: 2rem;
  color: var(--main-color);
}
p {
  font-size: 1.5rem;
  color: var(--secondary-color);
  opacity: 0.8;
  max-width: 50rem;
  margin: 1rem auto 3rem auto;
}
a {
  color: var(--main-color);
  font-size: 1.5rem;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
