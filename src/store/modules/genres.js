export default{
    namespaced: true,
    state(){
        return{
            genres: [],
            genre: {},
        }
    },
    getters: {
        genresData(state){
            return state.genres;
        },
        genreData(state){
            return state.genre;
        }
    },
    mutations: {
        setGenres(state, genres){
            state.genres = genres;
        },
        setGenre(state, genre){
            state.genre = genre;
        }
    },
    actions: {
        async getGenres(context){
            try{
                const data = await fetch("https://localhost:5001/api/genres");
                const response = await data.json();
                context.commit('setGenres', response);
            }
            catch(error){
                console.log(error);
            }
        }
    }
}