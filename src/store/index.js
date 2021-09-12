import Vue from 'vue';
import Vuex from 'vuex';
import photos from './modules/photos';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        'photos': photos
    }
})

export default store;
