// import moviesData from '../../assets/movies.js';

export default {
    namespaced: true,
    state(){
        return {
            movies: [],
            movie: {}
        }
    },
    getters: {
        moviesData(state){
            return state.movies;
        },
        movieData(state){
            return state.movie;
        }
    },
    mutations:{
        setMovies(state, movies){
            state.movies = movies;
        },
        setMovie(state, movie){
            state.movie = movie;
        },
        addMovie(state, movie){
            state.movies.push(movie);
        },
        updateMovie(state, movie){
            const index = state.movies.findIndex((m) => m.id === movie.id);
            if(index !== -1)state.movies.splice(index, 1, movie);
        },
        deleteMovie(state, movieId){
            state.movies = state.movies.filter(m => m.id !== movieId);
        },
    },
    actions:{
        async getMovies(context){
            try{
                const data = await fetch("https://localhost:5001/api/movies");
                const response = await data.json();
                context.commit('setMovies', response);
            }
            catch(error){
                console.log(error);
            }
        },
        async getMovie(context, id){
            try{
                const data = await fetch(`https://localhost:5001/api/movies/${id}`);
                const response = await data.json();
                context.commit('setMovie', response);
            }
            catch(error){
                console.log(error);
            }
        },
        async deleteMovie(context, movieId){
            try{
                const response = await fetch(`https://localhost:5001/api/movies/${movieId}`, {
                    method: 'DELETE',
                });
                if(!response.ok){
                    throw new Error('Movie is not deleted');
                }
                context.commit('deleteMovie', movieId);
            }
            catch(error){
                console.log(error);
            }
        },
        async createMovie(context, movie) {
            try {
                const response = await fetch("https://localhost:5001/api/movies", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(movie)
                });
        
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
        
                const responseData = await response.json();
                movie.id = responseData;
                context.commit('addMovie', movie);
            } catch (error) {
              console.log(error);
            }
          },
          async updateMovie(context, movie) {
            try {
                const response = await fetch(`https://localhost:5001/api/movies/${movie.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(movie)
                });
        
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                context.commit('updateMovie', movie);
            } catch (error) {
              console.log(error);
            }
          },
    },
}