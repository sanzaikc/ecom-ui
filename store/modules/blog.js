const state = {
  allBlogs: [
    {
      id: 1,
      title: 'Spring sunner fashion trends',
      image: 'blog-1',
      content: '',
    },
    {
      id: 2,
      title: 'Current Styling Trend',
      image: 'blog-2',
      content: '',
    },
    {
      id: 3,
      title: 'Best fashion trends for women',
      image: 'blog-3',
      content: '',
    },
  ],
}

const mutations = {
  SET_BLOGS: (state, products) => {
    state.allBlogs = products
  },
}

const actions = {
  setProducts: ({ commit }, products) => {
    commit('SET_BLOGS', products)
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
