
export default {
    namespaced: true,
    state(){
        return {
            actors: [],
            actor: {}
        }
    },
    getters: {
        actorsData(state){
            return state.actors;
        },
        actorData(state){
            return state.actor;
        }
    },
    mutations: {
        setActors(state, actors){
            state.actors = actors;
        },
        setActor( state, actor){
            state.actor = actor;
        },
        addActor(state, actor){
            state.actors.push(actor);
        }
    },
    actions: {
        async getActors(context){
            try{
                const data = await fetch("https://localhost:5001/api/actors");
                const response = await data.json();
                context.commit('setActors', response);
            }
            catch(error){
                console.log(error);
            }
        },
        async createActor(context, actor) {
            try {
                const response = await fetch("https://localhost:5001/api/actors", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(actor)
                });
        
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
        
                const responseData = await response.json();
                actor.id = responseData;
                context.commit('addActor', actor);
            } catch (error) {
              console.log(error);
            }
        },
    }
}