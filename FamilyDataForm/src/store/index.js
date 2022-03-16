import { createStore } from 'vuex'

export default createStore({
  state: {
    parent: {},
    childrenName: [],
    childrenAge: [],
    family: []
  },
  getters: {},
  mutations: {
    addForm: state => {
      state.childrenName.length++
      state.childrenAge.length++
    },
    removeChild(state, i) {
      state.childrenName.splice(i,1)
      state.childrenAge.splice(i,1)
    },
    saveFamilyData: state => {
      state.family = []
      state.family.push({name: state.parent.name, age: state.parent.age})
      for (let j = 0; j <= state.childrenName.length; j++) {
        if (state.childrenName[j] && state.childrenAge[j]){
          state.family.push(
              {
                name: state.childrenName[j],
                age: state.childrenAge[j]
              }
          )
        }
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
