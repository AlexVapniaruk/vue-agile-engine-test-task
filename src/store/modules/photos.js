const state = {
    photos: [],
    photo: {},
    pageCount: 0,
    page: 0,
    hasMore: false
}

const getters = {}

const actions = {
    async getPhotos({commit}) {
        let response = await window.api.call('get', '/images');
        console.log(response.data);
        commit('setPhotos', response.data);
    },
    async getPhoto({commit}, payload) {
        let response = await window.api.call('get', `/images/${payload.id}`);
        console.log(response.data);
        commit('setPhoto', response.data);
    }
}

const mutations = {
    setPhotos(state, photos) {
        state.photos = photos.pictures
        state.page = photos.page
        state.pageCount = photos.pageCount
        state.hasMore = photos.hasMore
    },
    setPhoto(state, photo) {
        state.photo = photo
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}