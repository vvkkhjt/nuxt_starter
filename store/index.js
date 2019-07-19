export const state = () => {
    return {
        user: {},
    }
  }

  export const actions = {
    async saveCurrentUser({commit},params){
        commit('SAVE_CURRENT_USER',params)
    },
  }

  export const mutations = {
    SAVE_CURRENT_USER(state,params){
        state.user = params;
    },
  }

  export const getters = {
    "getCurrentUser": state => state.user,
  }
