import { createStore } from 'vuex'
import EventService from '@/services/EventService.js'

export default createStore({
  state: {
    user: 'Johnny B. Good',
    events: [],
    event: {},
    totalEvents: 0,
    perPage: 3
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENT(state, event) {
      state.event = event
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    DEL_EVENT(state, id) {
      state.events.splice(
        state.events.findIndex(element => element.id === id),
        1
      )
    },
    SET_TOTAL_EVENTS(state, totalEvents) {
      state.totalEvents = totalEvents
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch(error => {
          throw error
        })
    },
    fetchEvents({ commit }, page) {
      this.events = null
      //TODO add animated spinner
      return EventService.getEvents(this.state.perPage, page)
        .then(response => {
          commit('SET_EVENTS', response.data)
          commit('SET_TOTAL_EVENTS', response.headers['x-total-count'])
        })
        .catch(error => {
          throw error
        })
    },
    fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find(event => event.id === id)
      if (existingEvent) {
        commit('SET_EVENT', existingEvent)
      } else {
        return EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            throw error
          })
      }
    },
    removeEvent({ commit }, id) {
      EventService.deleteEvent(id)
        .then(() => {
          commit('DEL_EVENT', id)
        })
        .catch(error => {
          throw error
        })
    }
  },
  modules: {}
})
