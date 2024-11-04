import { createStore } from "vuex";
import moviesModule from './modules/movies.js';
import genresModule from './modules/genres.js';
import actorsModule from './modules/actors.js';
import producersModule from './modules/producers.js';

const store = createStore({
    modules: {
        movies: moviesModule,
        genres: genresModule,
        actors: actorsModule,
        producers: producersModule
    }
});

export default store;