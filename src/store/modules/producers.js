export default {
    namespaced: true,
    state(){
        return {
            producers: [],
            producer: {}
        }
    },
    getters: {
        producersData(state){
            return state.producers;
        },
        producerData(state){
            return state.producer;
        }
    },
    mutations: {
        setProducers( state, producers){
            state.producers = producers;
        },
        setProducer(state, producer){
            state.producer = producer;
        },
        addProducer(state, producer){
            state.producers.push(producer);
        }
    },
    actions: {
        async getProducers(context) {
            try{
                const data = await fetch("https://localhost:5001/api/producers");
                const response = await data.json();
                context.commit('setProducers', response);
            }
            catch(error){
                console.log(error);
            }
        },
        async createProducer(context, producer) {
            try {
                const response = await fetch("https://localhost:5001/api/producers", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producer)
                });
        
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
        
                const responseData = await response.json();
                producer.id = responseData
                context.commit('addProducer', producer);
            } catch (error) {
              console.log(error);
            }
        },
      },
}