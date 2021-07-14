<template>
  <div class="main-wrap">
    <!-- <p class="warning-info" v-if="!supportedDevice">
      Hello friend, <br />
      This page is only available on bigger screens.
    </p> -->
    <div class="body">
      <nav class="top-nav">
        <the-nav />
      </nav>
      <main :class="{ 'sidebar-is-open': sideBarNavMenuActive.open }">
        <nav class="side-nav" v-if="windowWidth > 1023" @mouseleave="closeSideBarTemp" @mouseenter="openSideBarTemp">
          <the-side-nav ref="sidebar" />
        </nav>
        <nav class="side-nav" style="margin-top: -0.8em" :class="{ 'd-none': mobileResponsive.open }" v-if="windowWidth < 1023">
          <the-side-nav />
        </nav>

        <div class="main-contents" @click="smCloseSidebar">
          <!-- <div class="header-options" v-if="hasOptions === true">
            <button class="mr-1 download" v-if="windowWidth > 553" @click="previewDownload">Download</button>

            <div class="download-overlay" v-if="noDownloadModal === false">
              <div class="download-modal">
                <p>Kindly select range</p>

                <div class="date-range">
                  <span>From</span>
                  <input type="date" name="start-date" id="start-date" />
                  <span class="to-date">To</span>
                  <input type="date" name="end-date" id="end-date" />
                </div>

                <div>
                  <button @click="cancelDownload">Cancel</button>
                  <button @click="proceedDownload">Proceed</button>
                </div>
              </div>
            </div>

            <div class="input-grp">
              <input type="text" class="my-auto form-control" name="search" id="search_query" placeholder="Search Content..." />
              <select name="" styl="width: 5vw" class="ml-5 w-50 form-control" id="">
                <option value="">Sort by A to Z</option>
                <option value="">Sort by Z to A </option>
              </select>
            </div>
          </div> -->
          <!-- <div v-else-if="hasOptions == 'only-remove-download'">
            <div class="mb-2 row">
              <div class="col-md-6">
                <input type="text" style="border-radius: 2em" class="my-auto form-control" name="search" id="search_query" placeholder="Search Content..." />
              </div>
              <div class="col-md-5">
                <select name="" class="ml-5 w-100 form-control" id="">
                  <option value="">Sort by A to Z</option>
                  <option value="">Sort by Z to A </option>
                </select>
              </div>
              <div class="col-md-1"></div>
            </div>
          </div> -->
          <article :style="smallHeight()">
            <div class="content-wrapper">
              <!-- <component :is="layout"> -->
              <slot />
              <!-- </component> -->
            </div>
          </article>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TheNav from "@/components/layout/admin/TheNav.vue";
import TheSideNav from "@/components/layout/admin/TheSideNav.vue";

// const defaultLayout = "";

export default {
  name: "TheAdminLayout",

  components: { TheNav, TheSideNav },

  data() {
    return {
      noDownloadModal: true,
      selectedOption: "",
      sideBarToggleValue: {
        open: true,
        stay: true
      },
      stylenone: "display:none !important",
      count: 1,
      selectOptions: [
        {
          name: "Sort by Date"
        },
        {
          name: "Sort A-Z"
        },
        {
          name: "Sort Z-A"
        }
      ]
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
    sideBarNavMenuActive: {
      get() {
        return this.$store.state.responsive.sideBarNavMenuActive;
      },
      set(val) {
        this.$store.commit("TOGGLE_SIDEBAR_NAV_MENU_ACTIVE", val);
      }
    },
    windowWidth() {
      return this.$store.state.responsive.windowWidth;
    },
    hasOptions() {
      if (this.$route.path.includes("admin/view-insights") || this.$route.path.includes("/admin/view-faqs") || this.$route.path.includes("/admin/view-notifications")) {
        return "only-remove-download";
      }
      return (
        this.$route.path.includes("/admin/view-") ||
        // this.$route.path.includes("/admin/newsletters") ||
        this.$route.path.includes("/admin/all-users") ||
        this.$route.path.includes("/admin/users/") ||
        this.$route.path.includes("/admin/finance")
      );
    },

    supportedDevice() {
      return this.deviceType() === "desktop";
    }
  },
  watch: {
    windowWidth(newValue, oldValue) {
      if (newValue > 1023) {
        this.$store.commit("TOGGLE_MOBILE_RESPONSIVE", { open: true });
        this.$store.commit("TOGGLE_SIDEBAR_NAV_MENU_ACTIVE", { open: true, stay: true });
      }
    }
  },
  mounted() {
    this.$store.commit("UPDATE_WINDOW_WIDTH", window.innerWidth);
    window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // VUEX RESPONSIVE HANDLE METHODS BEGINS HERE
    smCloseSidebar() {
      if (!this.mobileResponsive.open) {
        const mobileState = !this.mobileResponsive.open;
        this.$store.commit("TOGGLE_MOBILE_RESPONSIVE", { open: mobileState });
      }
    },
    handleWindowResize() {
      this.$store.commit("UPDATE_WINDOW_WIDTH", window.innerWidth);
    },
    handleScroll() {
      this.$store.commit("UPDATE_WINDOW_SCROLL_Y", window.scrollY);
    },
    openSideBarTemp() {
      if (!this.sideBarNavMenuActive.open) {
        this.$store.commit("TOGGLE_SIDEBAR_NAV_MENU_ACTIVE", { open: true, stay: false });
      }
    },
    closeSideBarTemp() {
      if (!this.sideBarNavMenuActive.stay) {
        this.$store.commit("TOGGLE_SIDEBAR_NAV_MENU_ACTIVE", { open: false, stay: true });
      }
    },

    // VUEX RESPONSIVE HANDLE METHODS ENDS HERE

    toggler(value) {
      this.sideBarToggleValue = value;
    },
    parentMutate() {
      this.$refs.sidebar.sideBarState.open = true;
      this.$refs.sidebar.sideBarState.stay = true;
    },
    deviceType() {
      const ua = navigator.userAgent;

      if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
      } else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      } else return "desktop";
    },

    smallHeight() {
      const currentRoute = this.$route.path;
      const routes = [
        "/admin/all-users",
        // "/admin/newsletters",
        "/admin/finance/transactions",
        "/admin/finance/bank-accounts",
        "/admin/finance/wallet",
        "/admin/view-users",
        // "/admin/view-insights",
        // "/admin/view-faqs",
        // "/admin/view-notifications"
      ];
      if (routes.includes(currentRoute) || this.$route.name === "ViewUser" || this.$route.name === "AdminUsersTransactions") {
        return "height: 88vh;";
      } else return "";
    },

    previewDownload() {
      this.noDownloadModal = !this.noDownloadModal;
    },

    cancelDownload() {
      this.noDownloadModal = !this.noDownloadModal;
    },

    proceedDownload() {
      alert("What next?");
    },

    filterBy(val) {
      this.selectedOption = val;
      alert(val);
    }
  },

  created() {
    // return this.deviceType();
  }
};
</script>

<style scoped>
*:focus:not(:-moz-focusring) {
  outline: none;
}

*:focus:not(:focus-visible) {
  outline: none;
}

.main-wrap {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /* overflow-x: hidden; */
  /* overflow-y: hidden; */
}

.warning-info {
  padding: 20px;
  font-size: var(--font-lg);
  color: var(--myyinvest-red);
}

div.body {
  margin: 0;
  border: 0;
  font-size: var(--font-normal);
}

main {
  display: grid;
}

.sm-sidebar-open {
  display: inherit;
}

.sm-sidebar-close {
  display: none;
}

@media (max-width: 1024px) {
  .side-nav {
    width: 58%;
    background-color: antiquewhite;
    z-index: 100;
    position: absolute;
  }
  main {
    display: block;
  }

  main article .content-wrapper {
    display: block !important;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid var(--myyinvest-red);
    border-radius: 10px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  main article .content-wrapper::-webkit-scrollbar {
    display: none !important;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  main article .content-wrapper {
    -ms-overflow-style: none !important; /* IE and Edge */
    scrollbar-width: none !important; /* Firefox */
  }
}

@media (min-width: 1024px) {
  main {
    grid-template-columns: 5% 95%;
  }
  .sm-sidebar-open {
    display: none;
  }
  .sm-sidebar-close {
    display: inherit;
  }
  .sidebar-is-open {
    grid-template-columns: 20% 80%;
  }
}

@media (min-width: 1200px) {
  .sidebar-is-open {
    grid-template-columns: 18% 82%;
  }
}

nav.top-nav {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  height: var(--topnav-height);
  background-color: var(--myyinvest-white);
  box-shadow: 0 1px 4px 0 rgba(158, 157, 157, 0.5);
  z-index: 999;
}

main {
  max-height: 50vh !important;
  z-index: 1;
}

main nav.side-nav {
  /* grid-column: 1 / 2;
  grid-row: 2 / 3; */
  height: calc(100vh - (1.01 * var(--topnav-height)));
  color: var(--myyinvest-red);
  box-shadow: 1px 0 2px 0 rgba(158, 157, 157, 0.5);
  font-weight: 600;
  background-image: url("../assets/admin/images/nav-background.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
  -webkit-background-origin: border-box;
  -moz-background-origin: content-box;
  background-position: 0 100%;
  /* overflow-y: auto; */
  -ms-overflow-style: none;
  scrollbar-width: none;
}

main nav.side-nav::-webkit-scrollbar {
  display: none;
}

.main-contents {
  /* grid-column: 2 / 3;
  grid-row: 2 / 3; */
  margin: 10px;
  max-width: 100%;
}

main article {
  height: 88vh;
  padding: 10px;
  box-shadow: 0 0 2px 0 gray;
  border-radius: 10px;
}

main article .content-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid var(--myyinvest-red);
  border-radius: 10px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.content-wrapper::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.content-wrapper::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.content-wrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

.header-options {
  display: flex;
  align-items: center;
  margin-bottom: var(--base-size);
}

.header-options button.download,
.header-options button.download {
  padding: 5px 10px;
  color: var(--myyinvest-white);
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 5px;
  background-color: var(--myyinvest-red);
}

.header-options button.download:hover,
.header-options button.download:focus {
  color: var(--myyinvest-red);
  border: 2px solid var(--myyinvest-red);
  background-color: var(--myyinvest-white);
}

.header-options .input-grp {
  margin-left: auto;
  display: flex;
  justify-content: space-between;
}

.dropbtn {
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: var(--base-size);
  background-color: var(--myyinvest-white);
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  width: 120px;
  background-color: var(--myyinvest-white);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content .option {
  display: block;
  padding: 12px 16px;
  color: black;
  text-decoration: none;
}

.dropdown-content .option:hover {
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red-fade);
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  border-color: var(--myyinvest-red);
  box-shadow: 0 0 3px 3px var(--myyinvest-red-fade);
}

.header-options input {
  width: 300px;
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: var(--base-size);
  background-color: var(--myyinvest-white);
  -moz-appearance: none;
  -webkit-appearance: none;
  text-indent: 0.01px;
  text-overflow: "";
}

.header-options input:not(:first-child),
.header-options .dropdown {
  margin-left: var(--base-size);
}

.header-options input:focus {
  outline: none;
  border-color: var(--myyinvest-red);
  box-shadow: 0 0 3px 3px var(--myyinvest-red-fade);
}

.download-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1111;
}

.download-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 300px;
  padding: calc(2 * var(--base-size));
  border-radius: 10px;
  background-color: var(--myyinvest-white);
  transform: translate(-50%, -50%);
}

.download-modal p {
  font-size: var(--font-sm);
  font-weight: 600;
  text-align: center;
}

.download-modal span {
  font-weight: 600;
}

.download-modal div span.to-date {
  margin-top: 10px;
}

.download-modal div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--base-size);
}

.download-modal div.date-range {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.download-modal div button {
  padding: 5px;
  border: 2px solid var(--myyinvest-red);
  color: var(--myyinvest-red);
  font-weight: 600;
  border-radius: 5px;
  background-color: var(--myyinvest-white);
}

.download-modal div button:hover,
.download-modal div button:focus {
  border: 2px solid transparent;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
}
</style>
