<template>
  <div>
    <div :class="['sidebar-container  d-lg-block ', visible ? 'd-block  d-md-block slide slideInLeft ' : '  d-none d-md-none ']" style="animation-duration: 0.5s!important;">
      <div class="d-flex justify-content-center mt-lg-3  ">
        <!--        <img class="sidebar-logo" src="@/assets/logo-light.svg" />-->
      </div>
      <!--      <span class="left-angle    d-none d-lg-block d-md-block">-->
      <!--        <img src="@/assets/subsctract-left.svg" />-->
      <!--      </span>-->
      <div v-if="items" class="px-3 py-2   mt-lg-0 mt-md-0">
        <ul class="sidebar-navigation">
          <li v-for="(item, index) in items" :key="index" :class="$route.path.includes(item.identifier) ? 'active' : ''" @click="toggleActive(item.identifier)">
            <div class="d-none d-lg-block d-md-block">
              <a @click="$router.push(item.to)" v-if="item.title !== 'Logout' && item.title !== 'Notifications'">
                {{ item.title }}
              </a>
            </div>
            <div class="d-block d-lg-none d-md-none">
              <a @click="$router.push(item.to)">
                {{ item.title }}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--    <b-sidebar id="sidebar-1" body-class="bg-dark-purple position-static" :no-header="true" :no-header-close="true" width="250px" header-class="bg-dark-purple" visible>-->
    <!--      <div class="d-flex justify-content-center mt-3 ">-->
    <!--        <img class="sidebar-logo" src="@/assets/logo-light.svg" />-->
    <!--      </div>-->
    <!--      <span class="left-angle   d-none d-lg-block d-md-block">-->
    <!--        <img src="@/assets/subsctract-left.svg" />-->
    <!--      </span>-->
    <!--      <div class="px-3 py-2   mt-5 mt-lg-0 mt-md-0">-->
    <!--        <nav class="mb-3  ">-->
    <!--          <b-nav vertical>-->
    <!--            <ul class="mt-4 " style="list-style: none">-->
    <!--              <li class="nav-item mt-4 mb- 4 font-avenir ft-14 text-white ">-->
    <!--                <router-link to="dashboard" :class="[' alaje-navs text-bold-white', active === 'dashboard' ? ' nav-active' : '']" @click="$router.push({ name: 'customer-dashboard' })">-->
    <!--                  <span class="d-flex flex-row">-->
    <!--                    <span> <alaje-icons :name="active === 'dashboard' ? 'dashboard-active' : 'dashboard'"/></span>-->
    <!--                    <span class="font-avenir  ml-4 ft-14 ">Dashboard</span>-->
    <!--                  </span>-->
    <!--                </router-link>-->
    <!--              </li>-->
    <!--              <li class="nav-item mt-4 mb- 4 font-avenir ft-14 text-white ">-->
    <!--                <router-link to="trade" :class="['alaje-navs text-bold-white', active === 'trade' ? ' nav-active' : '']" @click="$router.push({ name: 'customer-trade' })">-->
    <!--                  <span class="d-flex flex-row">-->
    <!--                    <span> <alaje-icons :name="active === 'trade' ? 'trade-active' : 'trade'"/></span>-->
    <!--                    <span class="font-avenir  ml-4 ft-14 ">Trade</span>-->
    <!--                  </span>-->
    <!--                </router-link>-->
    <!--              </li>-->
    <!--            </ul>-->
    <!--          </b-nav>-->
    <!--        </nav>-->
    <!--      </div>-->
    <!--    </b-sidebar>-->
  </div>
</template>

<script>
export default {
  name: "MainSideBar",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array
    }
  },
  data() {
    return {
      active: this.$router.currentRoute.fullPath.substring(this.$router.currentRoute.fullPath.lastIndexOf("/") + 1)
    };
  },
  methods: {
    toggleActive(path) {
      this.active = this.$route.path.includes(path) ? path : path;
      this.$Bus.$emit("current", {
        title: this.active
      });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.left-angle {
  position: fixed;
  top: 8.9%;
  /*background: red!important;*/
  left: 15.3%;
  transform: rotate(270deg);
}
@media only screen and (min-width: 280px) and (max-width: 540px) {
}
@media only screen and (max-width: 600px) {
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (width: 1366px) {
  .left-angle {
    position: fixed;
    top: 6.8%;
    left: 16%;
    transform: rotate(270deg);
  }
}
@media only screen and (min-width: 1024px) and (height: 1366px) {
  .left-angle {
    position: fixed;
    top: 5.15%;
    left: 21.4%;
    transform: rotate(270deg);
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (width: 768px) and (height: 1024px) {
  .left-angle {
    position: fixed;
    top: 6.8%;
    left: 28.4%;
    transform: rotate(270deg);
  }
}
@media only screen and (width: 1024px) and (height: 768px) {
  .left-angle {
    position: fixed;
    top: 9%;
    left: 21.5%;
    transform: rotate(270deg);
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
.alaje-navs {
  text-decoration: none !important;
}
.active-left-angle {
  position: relative;
  top: 8.9%;
  left: 99.8%;
  transform: rotate(270deg);
}
.sidebar-container {
  position: fixed;
  width: 220px;
  height: 100%;
  left: 0;
  z-index: 9999 !important;
  overflow-x: hidden;
  overflow-y: auto;
  background: color(a-dark-purple);
  color: #fff;
}
.content-container {
  padding-top: 20px;
}
/*.sidebar-logo {*/
/*  padding: 10px 15px 10px 30px;*/
/*  font-size: 20px;*/
/*  background-color: #2574A9;*/
/*}*/
.sidebar-navigation {
  padding: 0;
  list-style-type: none;
  position: relative;
  font-family: fonts(Avenir) !important;
}
.sidebar-navigation li {
  background-color: transparent;
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 20px;
  padding: 5px;
  margin-top: 20px !important;
}
.sidebar-navigation li a {
  padding: 10px 15px 10px 30px;
  display: block;
  color: #fff;
  font-size: 14px !important;
  cursor: pointer;
}
.sidebar-navigation li,
.sidebar-navigation li.active {
  .icon {
    margin-right: 10px;
  }
}
.sidebar-navigation li a:active,
.sidebar-navigation li a:hover,
.sidebar-navigation li a:focus {
  text-decoration: none;
  outline: none;
  cursor: pointer;
}
.sidebar-navigation li::before {
  background: linear-gradient(90.63deg, #ffffff 0.53%, rgba(255, 255, 255, 0) 99.5%);
  opacity: 0.25;
  position: absolute;
  content: "";
  cursor: pointer;
  height: 100%;
  // left: 20px;
  top: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  z-index: -1;
  border-radius: 50px 0 0 50px;
}
.sidebar-navigation li:hover::before {
  width: 100%;
}
.sidebar-navigation li.active {
  position: relative;
  height: 100%;
  // margin-left: 20px !important;
  // background: #ffffff;
  top: 0;
  background-color: #ffffff;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  border-radius: 50px 0 0 50px;
  cursor: pointer !important;
  //     // width: 100%;
  //     transition: width 0.2s ease-in;
  //     // z-index: -1;
  //     // left: 20px;
  a {
    color: color(a-purple-color);
  }
  //     border-radius: 50px 0 0 50px;
  .active-icon {
    filter: brightness(0.71) sepia(9) hue-rotate(204deg) saturate(230);
    /*filter: sepia(9%) brightness(96%) hue-rotate(196deg) saturate(230%) invert(2%);*/
    /*filter: sepia(9%) brightness(96%) hue-rotate(214deg) saturate(230%) invert(2%);*/
    /*hsl(271, 85%, 55%);*/
  }
  &::before {
    margin-left: 20px;
  }
}
.sidebar-navigation .header {
  font-size: 12px;
  text-transform: uppercase;
  background-color: #151515;
  padding: 10px 15px 10px 30px;
}
.sidebar-navigation .header::before {
  background-color: transparent;
}
</style>
