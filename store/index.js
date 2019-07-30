export const state = () => {
    return {
        user: {},
        errorLogs: [],
    }
  }

  export const actions = {
    async saveCurrentUser({commit},params){
        commit('SAVE_CURRENT_USER',params)
    },
    async saveErrorLogs({commit},params){
        commit('SAVE_ERROR_LOGS',params)
    },
  }

  export const mutations = {
    SAVE_CURRENT_USER(state,params){
        state.user = params;
    },
    SAVE_ERROR_LOGS(state,params){
        state.errorLogs = params;
    }
  }

  export const getters = {
    "getCurrentUser": state => state.user,
    "getErrorLogs": state => state.errorLogs,
  }
