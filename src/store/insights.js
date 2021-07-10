import Api from "@/utils/api";
const END_POINT = 'insights'

const state = {

};

const getters = {
  getPersonalDetails(state) {
    return state.userPersonalDetails;
  },


};

const mutations = {
  setPersonalDetails(state, data) {
    return (state.userPersonalDetails = data);
  },
};

const actions = {
  async addInsight(_, payload) {
    const response = await Api.post(`${END_POINT}/create`, payload, true);
    return response;
  },
  // eslint-disable-next-line no-unused-vars
  async uploadUserAvatar({ commit, dispatch }, payload) {
    let res = await Api.post(`settings/image`, payload, true);
    if (res.status === 200 || res.status === 201) {
      dispatch("getUserProfileDetails");
      return res;
    } else {
      return res;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
