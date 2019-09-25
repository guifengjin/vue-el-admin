import Cookies from 'js-cookie';
import * as types from "../constant";

const app = {
  state: {
    sliderState: true,
    lang: 'zh'
  },
  mutations: {
    [types.SET_SLIDERSTATE](state, newState) {
      state.sliderState = newState
    },

    [types.SET_LANGUAGE](state, lang) {
      Cookies.set('lang', lang)
      state.lang = lang
    }
  },
  actions: {
    toggleSideBar({ commit }, newState) {
      commit(types.SET_SLIDERSTATE, newState);
    },

    changeLanguage({ commit }, lang) {
      commit(types.SET_LANGUAGE, lang);
    },
  }
};

export default app;
