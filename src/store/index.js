import Vue from 'vue'
import Vuex from 'vuex'
import fetchCompanies from '@/helpers/fetchCompanies'
import filterList from '@/helpers/filterList'
import mapResErrors from '@/helpers/mapResErrors'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companies: [],
    filteredCompanies: [],
    loading: false,
    errors: []
  },
  mutations: {
    SET_COMPANIES(state, payload) {
      state.companies = payload
    },
    SET_FILTERED_COMPANIES(state, payload) {
      state.filteredCompanies = payload
    },
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_ERRORS(state, payload) {
      state.errors = payload
    },
  },
  actions: {
    async getCompanies({commit}) {
      commit('SET_LOADING', true)

      try {
        const companies = await fetchCompanies()
        commit('SET_COMPANIES', companies.data)
        commit('SET_FILTERED_COMPANIES', companies.data)
      } catch {
        const errors = mapResErrors([{field: 'error_response', message: 'Неудалось загрузить данные, попробуйте позже.'}])
        commit('SET_ERRORS', errors)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    filterCompanies({state, commit}, {id, name}) {
      const filteredCompanies = filterList(state.companies, id, name)
      commit('SET_FILTERED_COMPANIES', filteredCompanies)
    },
  },
  getters: {
    filteredCompanies (state) {
      return state.filteredCompanies
    },
    loading (state) {
      return state.loading
    },
    errors (state) {
      return state.errors
    }
  }
})
