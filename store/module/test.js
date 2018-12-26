import {
    GetLanguages
  } from '@/api/index.js'
  
  export default {
    state: {
      languageList:[]
    },
    mutations: {
      GetLanguages(state, data){
        state.languageList = data;
      }
    },
    actions: {
      async GETLANGUAGES({ commit }, data){
        const res = await GetLanguages(data);
        if (res.status === 200) {
          commit("GetLanguages", res.data);
        } else {
          throw new Error(res);
        }
      }
    }
  };
  