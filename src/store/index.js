import axios from 'axios'
//Lib oficial do vue para lidar com estados
import { createStore } from 'vuex';

export default createStore({
    state: {
        dataUser: []
    },
    //altarar/commitar nosso state
    mutations: {
        storeUsers(state, payload) {
            state.dataUser = payload
        },
    },
    actions: {
        getUsers({ commit }) {
            return axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
              commit('storeUsers', res.data.results)
            })
        },
    }
})