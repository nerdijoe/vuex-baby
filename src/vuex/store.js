import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: "Heyoo",
    playerList: [
      {name: 'Steph Curry', team: 'Warriors'},
      {name: 'Kevin Durant', team: 'Warriors'},
      {name: 'James Harden', team: 'Rockets'},
      {name: 'Kawhi Leonard', team: 'Spurs'},
      {name: 'Lebron James', team: 'Cavs'}
    ],
    filter: ''
  },
  getters: {
    getMessage ( state ) {
      return state.message;
    },
    getPlayers ( state ) {
      var pattern = new RegExp(`${state.filter.toLowerCase()}.*`)
      return state.playerList.filter( p => pattern.test(p.name.toLowerCase()) || pattern.test(p.team.toLowerCase()) );

    }
  },
  mutations: {
    changeMessage ( state, newMsg ) {
      state.message = newMsg
    },
    setFilter ( state, filter ) {
      state.filter = filter
      console.log("state.filter=", state.filter);
    }
  },
  actions: {
    changeMessage ({ commit }, newMsg) {
      commit('changeMessage', newMsg)
    },
    changeFilter ({ commit }, filter) {
      commit('setFilter', filter)
    }
  }
})

export default store
