<template>
  <div>
    <div class="menu-toggler-wrapper">
      <span>
        <svg
          @click="closeSidebar"
          v-if="sideBarNavMenuActive.open && sideBarNavMenuActive.stay"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lg-menu-toggler collapse-toggle-icon feather feather-disc"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>

        <svg
          @click="openSidebar"
          v-if="!sideBarNavMenuActive.stay && sideBarNavMenuActive.open"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lg-menu-toggler collapse-toggle-icon feather feather-disc"
        >
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <!-- cross -->
        <svg
          v-if="windowWidth < 1023"
          xmlns="http://www.w3.org/2000/svg"
          @click="smCloseSideBar"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="sm-menu-toggler d-block d-xl-none feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </span>
    </div>
    <div class="menu">
      <router-link to="/admin" class="main-route">
        <img src="@/assets/admin/icons/home.svg" alt="Overview Logo" class="logo" />
        <span v-if="sideBarNavMenuActive.open">Overview</span>
      </router-link>
      <router-link to="/admin/statistics" class="main-route">
        <img src="@/assets/admin/icons/statistics.svg" alt="Statistics Logo" class="logo" />
        <span v-if="sideBarNavMenuActive.open">Statistics</span>
      </router-link>
      <router-link to="/admin/all-users" :class="[myPath('/admin/users/'), 'main-route']">
        <img src="@/assets/admin/icons/user.svg" alt="User Logo" class="logo" />
        <span v-if="sideBarNavMenuActive.open">Users</span>
      </router-link>

      <div :class="[myPath('/admin/plans'), 'main-route']" tabindex="0" @click="noPlan = !noPlan">
        <img src="@/assets/admin/icons/checklist.svg" alt="Plans icon" class="logo" />
        <span v-if="sideBarNavMenuActive.open">Plans</span>
      </div>
      <div class="sub-nav" v-if="!noPlan">
        <router-link to="/admin/plans/"> <span></span>Plans</router-link>
        <router-link to="/admin/plans/add"> <span></span>Add Plan</router-link>
        <router-link to="/admin/plans/income"> <span></span>Income Plan</router-link>
        <router-link to="/admin/plans/rental"> <span></span>Growth Plan</router-link>
        <router-link to="/admin/plans/special"> <span></span>Flex Plan</router-link>
      </div>

      <div :class="[myPath('/admin/finance'), 'main-route']" tabindex="0" @click="noTransaction = !noTransaction">
        <img src="@/assets/admin/icons/money.svg" alt="Plans icon" class="logo" />
        <span v-if="sideBarNavMenuActive.open">Financial Report</span>
      </div>
      <div class="sub-nav" v-if="!noTransaction">
        <router-link to="/admin/finance/transactions"> <span></span>Transactions</router-link>
        <router-link to="/admin/finance/wallet"> <span></span>Wallet Accounts</router-link>
        <router-link to="/admin/finance/bank-accounts"> <span></span>Bank Accounts</router-link>
        <!-- <router-link to="/admin/plans/rental"> <span></span>Refer and Earn</router-link> -->
      </div>

      <div :class="[myPath('-insights'), 'main-route']" @click="noInsight = !noInsight">
        <img src="@/assets/admin/icons/window.svg" alt="Insight Logo" class="logo" />
        <span v-if="sideBarNavMenuActive.open">Insights</span>
      </div>
      <div class="sub-nav" v-if="!noInsight">
        <!-- <transition name="expand-fly"> -->
        <router-link to="/admin/view-insights"> <span></span>View Insights</router-link>
        <router-link to="/admin/add-insights"> <span></span>Add Insights</router-link>
        <!-- </transition> -->
      </div>
      <div :class="[myPath('-notification'), 'main-route']" @click="noNotification = !noNotification">
        <img src="@/assets/admin/icons/bell.svg" alt="Notifications Logo" class="logo" />
        <span v-if="sideBarNavMenuActive.open">Notifications</span>
      </div>
      <div class="sub-nav" v-if="!noNotification">
        <!-- <transition name="expand-fly"> -->
        <router-link to="/admin/view-notifications"> <span></span>View Notifications</router-link>
        <router-link to="/admin/add-notifications"> <span></span>Add Notifications</router-link>
        <!-- </transition> -->
      </div>
      <div :class="[myPath('-faqs'), 'main-route']" @click="noPost = !noPost">
        <img src="@/assets/admin/icons/phone.svg" alt="Talk to us Logo" class="logo" />
        <span v-if="sideBarNavMenuActive.open">FAQ</span>
      </div>
      <div class="sub-nav" v-if="!noPost">
        <!-- <transition name="expand-fly"> -->
        <router-link to="/admin/view-faqs"> <span></span>View FAQs</router-link>
        <router-link to="/admin/add-faqs"> <span></span>Add FAQs</router-link>
        <!-- </transition> -->
      </div>
      <router-link to="/admin/newsletters" class="main-route">
        <img src="@/assets/admin/icons/envelope.svg" alt="Newsletter Logo" class="logo" />
        <span v-if="sideBarNavMenuActive.open">Newsletter</span>
      </router-link>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      noInsight: true,
      noPost: true,
      noPlan: true,
      noTransaction: true,
      noNotification: true,
      sideBarState: {
        open: true,
        stay: true
      }
    };
  },

  computed: {
    mobileResponsive: {
      get() {
        return this.$store.state.responsive.mobileResponsive;
      },
      set(val) {
        this.$store.commit("TOGGLE_MOBILE_RESPONSIVE", val);
      }
    },
    currentPath() {
      return this.$route.path;
    },
    windowWidth() {
      return this.$store.state.responsive.windowWidth;
    },
    isSideBarNavMenuActive: {
      get() {
        return this.$store.state.responsive.isSideBarNavMenuActive;
      },
      set(val) {
        this.$store.commit("TOGGLE_IS_SIDEBAR_NAV_MENU_ACTIVE", val);
      }
    },
    sideBarNavMenuActive: {
      get() {
        return this.$store.state.responsive.sideBarNavMenuActive;
      },
      set(val) {
        this.$store.commit("TOGGLE_SIDEBAR_NAV_MENU_ACTIVE", val);
      }
    }
  },

  methods: {
    myPath(route) {
      if (this.currentPath.includes(route)) {
        return "active-main-route";
      } else "";
    },
    smCloseSideBar() {
      this.$store.commit("TOGGLE_MOBILE_RESPONSIVE", { open: true });
    },
    closeSidebar() {
      this.$store.commit("TOGGLE_SIDEBAR_NAV_MENU_ACTIVE", { open: false, stay: true });
    },

    openSidebar() {
      this.$store.commit("TOGGLE_SIDEBAR_NAV_MENU_ACTIVE", { open: true, stay: true });
    }
  }
};
</script>

<style scoped>
.lg-menu-toggler {
  display: none;
}

@media (min-width: 1024px) {
  .lg-menu-toggler {
    display: inline-block;
  }
}

.menu-toggler-wrapper {
  /* margin-top: .9em; */
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.5em;
  cursor: pointer;
}

.menu {
  display: flex;
  flex-direction: column;
  /* margin-top: 50px; */
}

.menu a.main-route,
.menu div.main-route {
  max-width: 90%;
  padding: 10px var(--base-size);
  border: 1px solid transparent;
  border-top-right-radius: var(--base-size);
  border-bottom-right-radius: var(--base-size);
  font-weight: 600;
}

.menu a.main-route:not(:last-child),
.menu div.main-route:not(:last-child) {
  margin-bottom: 5px;
}

.menu div.main-route:hover,
.active-main-route,
.menu a.main-route:hover,
.menu a.main-route.exact-active.active {
  color: var(--myyinvest-white) !important;
  background-color: var(--myyinvest-red);
  cursor: pointer;
}

.menu div.main-route:hover .logo,
.menu a.main-route:hover .logo,
.menu .active-main-route .logo,
a.main-route.exact-active.active .logo {
  filter: invert(100%) sepia(8%) saturate(0%) hue-rotate(121deg) brightness(109%) contrast(105%);
}

.menu a.main-route span,
.menu div.main-route span {
  margin-left: var(--base-size);
}

.menu .sub-nav {
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 60px;
}

.menu .sub-nav a {
  display: flex;
  align-items: center;
  width: 80%;
  padding: 5px;
  border-radius: 5px;
}

.menu .sub-nav a:hover,
.menu .sub-nav a.exact-active.active {
  color: var(--myyinvest-white) !important;
  background-color: var(--myyinvest-red);
}

.menu .sub-nav a span {
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: var(--myyinvest-red);
}

.menu .sub-nav a:hover span,
.menu .sub-nav a.exact-active.active span {
  background-color: var(--myyinvest-white) !important;
}

.menu .sub-nav a:not(:last-child) {
  margin-bottom: 2px;
}

/* .expand-fly-in */
</style>
