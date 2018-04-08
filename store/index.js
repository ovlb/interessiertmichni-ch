import Vuex from 'vuex'
import images from './state/images'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      images,
      currentImage: null
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore
