import { createRouter  , createWebHistory} from "vue-router";
import MoviesList from './pages/MoviesList.vue';
import AddMovie from './pages/AddMovie.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/movies'},
        {path: '/movies', component: MoviesList, name: 'movies'},
        {path: '/add-movie', component: AddMovie, name: 'add-movie'},
        {path: '/edit-movie/:id', component: AddMovie, name: 'edit-movie', props: true},
        {path: '/:notfound(.*)', component: NotFound, name: 'not-found'},
    ]
});

export default router;