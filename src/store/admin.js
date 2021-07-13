import Api from "@/utils/api";
const END_POINT = "insights";

const state = {
  allInsights: [],
  singleInsight: [],
  allUsers: [],
  allNotifications: [],
  allFaq: [],
  allNewsletters: [],
  allUsersPaginated: [],
  singleUser: [],
  allTransactions: [],
};

const getters = {};

const mutations = {
  SET_ALL_INSIGHTS(state, data) {
    return (state.allInsights = data);
  },
  SET_SINGLE_INSIGHT(state, data) {
    return (state.singleInsight = data);
  },
  SET_ALL_USERS(state, data) {
    return (state.allUsers = data);
  },
  SET_ALL_NOTIFICATIONS(state, data) {
    return (state.allNotifications = data);
  },
  SET_ALL_FAQ(state, data) {
    return (state.allFaq = data);
  },
  SET_ALL_NEWSLETTERS(state, data) {
    return (state.allNewsletters = data);
  },
  SET_ALL_USERS_PAGINATED(state, data) {
    return (state.allUsersPaginated = data)
  },
  SET_SINGLE_USER(state, data) {
    return (state.singleUser = data)
  },
  SET_ALL_TRANSACTIONS(state, data) {
    return (state.allTransactions = data)
  }
};

const actions = {
  // ALL INSIGHTS VUEX OPERATIONS
  // Add Insight
  async addInsight(_, payload) {
    const response = await Api.post(`${END_POINT}/create`, payload, true);
    return response;
  },
  // Edit Insight
  async editInsight(_, payload) {
    const test = payload.get("id");
    payload.delete("id");
    const response = await Api.put(`${END_POINT}/edit/${test}`, payload, true);
    return response;
  },
  // Get All Insights
  async allInsights({ commit }, payload) {
    const response = await Api.get(`${END_POINT}/get?page=${payload}&perpage=5`, true);
    if (response.status === 200 || response.status === 201) {
      commit("SET_ALL_INSIGHTS", response.data.insights);
      return response;
    } else {
      return response;
    }
  },
  // Get single Insight
  async singleInsight(_, payload) {
    const response = await Api.get(`${END_POINT}/get/${payload}`, true);
    if (response.status === 200 || response.status === 201) {
      // commit("SET_SINGLE_INSIGHT", response.data.insightDetails);
      return response;
    }
  },
  // Delete An Insight
  async destroyInsight(_, payload) {
    const response = await Api.post(`${END_POINT}/delete/${payload}`, _, true);
    return response;
  },

  // ALL NOTIFICATION VUEX OPERATIONS
  // Add Notification
  async addNotification(_, payload) {
    const response = await Api.post("/admin/notification/create", payload, true);
    return response;
  },
  // Get All Notifications
  async allNotifications({ commit }, payload) {
    const response = await Api.get(`admin/notification/get?page=${payload}&perpage=5`, true);
    if (response.status === 200 || response.status === 201) {
      commit("SET_ALL_NOTIFICATIONS", response.data.notifications);
      return response;
    }
  },
  // Get single Notification
  async singleNotification(_, payload) {
    const response = await Api.get(`admin/notification/get/${payload}`, _, true);
    if (response.status === 200 || response.status === 201) {
      return response;
    }
  },
  // Delete A Notification
  async destroyNotification(_, payload) {
    const response = await Api.delete(`admin/notification/${payload}/delete`, _, true);
    return response;
  },

  // ALL FAQ VUEX OPERATIONS
  async addFaq(_, payload) {
    const response = await Api.post(`faq/create`, payload, true);
    return response;
  },
  // Get All Insights
  async allFaq({ commit }, payload) {
    const response = await Api.get(`faq/get?page=${payload}&perpage=5`, true);
    if (response.status === 200 || response.status === 201) {
      commit("SET_ALL_FAQ", response.data.faq);
    }
  },
  // Get single Faq
  async singleFaq(_, payload) {
    const response = await Api.get(`faq/get/${payload}`, true);
    if (response.status === 200 || response.status === 201) {
      return response;
    }
  },
  // Edit Insight
  async editFaq(_, payload) {
    const data = {
      category: payload.category,
      question: payload.question,
      answer: payload.answer,
    }
    const response = await Api.post(`faq/edit/${payload._id}`, data, true);
    return response;
  },
  // Delete A Faq
  async destroyFaq(_, payload) {
    const response = await Api.delete(`faq/delete/${payload}`, _, true);
    return response;
  },

  // ALL NEWSLETTER VUEX OPERATIONS
  // Get All Newsletter
  async allNewsletters({ commit }, payload) {
    // const response = await Api.get(`newsletter/get?page=${payload}&perpage=5`, true);
    const response = await Api.get(`newsletter/get`, true);
    if (response.status === 200 || response.status === 201) {
      commit("SET_ALL_NEWSLETTERS", response.data.newsletters);
    }
  },


  // ALL USER VUEX OPERATIONS
  async allUsers({ commit }) {
    const response = await Api.get("users/get", true);
    if (response.status === 200 || response.status === 201) {
      commit("SET_ALL_USERS", response.data.users);
    }
  },
  // Get All Paginated Users List
  async allUsersPaginated({ commit }, payload) {
    // const response = await Api.get("users/get", true);
    const response = await Api.get(`users/get?page=${payload}&perpage=5`, true);
    if (response.status === 200 || response.status === 201) {
      commit("SET_ALL_USERS_PAGINATED", response.data.users);
    }
  },
  // Delete A User
  async destroyUser(_, payload) {
    const response = await Api.delete(`users/delete/${payload}`, _, true);
    return response;
  },
  // Get single Faq
  async singleUser(_, payload) {
    const response = await Api.get(`users/get/${payload}`, true);
    if (response.status === 200 || response.status === 201) {
      return response.data.user
    }
  },

  // ALL TRANSACTIONS VUEX OPERATIONS
  async allTransactions({commit}, payload) {
    const response = await Api.get(`transactions/get?page=${payload}&perpage=10`, true);
    if (response.status === 200 || response.status === 201) {
      commit("SET_ALL_TRANSACTIONS", response.data.transactions);
      return response;
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
