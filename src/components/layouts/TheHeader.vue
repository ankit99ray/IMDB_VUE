<template>
    <header>
        <nav>
            <div>
            <v-img :src="imdbLogo" width="100px" class="imdb_logo" ></v-img>
            </div>
            <ul>
                <li><router-link to="/movies">Home</router-link></li>
                <li><router-link to="/add-movie">Add Movie</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
import imdbLogo from '../../assets/imdb_logo.jpg';
export default {
    computed: {
        imdbLogo(){
            return imdbLogo;
        }
    }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: rgb(220, 212, 212);
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid black;
  background-color: black;
  color: white;
  scale: 1.05;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imdb_logo{
    border-radius: 2px;
}
li {
  margin: 0 0.5rem;
}
</style>