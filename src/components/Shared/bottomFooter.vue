<template>
  <div class="footer-red">
    <main class="container-fluid   p-lg-5 p-2 mt-4 ">
      <div class="row ">
        <div class="col-md-3  footer-col ">
          <p class="text-white ft-24 font-weight-bold" style="margin-left: 35px">Company</p>
          <ul>
            <li class="mt-3">
              <a @click="$router.replace('/')">Home</a>
            </li>
            <li class="mt-3">
              <a @click="$router.replace('/about')">About Us</a>
            </li>

            <li class="mt-3">
              <a @click="$router.replace('/')">Media</a>
            </li>

            <li class="mt-3">
              <a @click="$router.replace('/listings')">Listings</a>
            </li>
            <li class="mt-3">
              <a @click="$router.replace('/')">Security</a>
            </li>
            <li class="mt-3">
              <a @click="$router.replace('/terms')">Terms and Conditions</a>
            </li>
            <li class="mt-3">
              <a @click="$router.replace('/privacy')">Privacy Policy</a>
            </li>
            <li class="mt-3">
              <a @click="$router.replace('/disclaimer')">Disclaimer</a>
            </li>
          </ul>
        </div>

        <div class="col-md-3 footer-col">
          <p class="text-white ft-24 font-weight-bold" style="margin-left: 35px">Learn</p>
          <ul class="  ">
            <li class="mt-3">
              <a @click="$router.replace('/faq')">FAQ</a>
            </li>
            <li class="mt-3">
              <a @click="$router.replace('/insight')">Insights</a>
            </li>

            <li class="mt-3">
              <a @click="$router.replace('/about')">How it Works</a>
            </li>

            <li class="mt-3">
              <a @click="$router.replace('/insight')">Podcasts</a>
            </li>
          </ul>
        </div>

        <div class="col-md-3 footer-col">
          <p class="text-white ft-24 font-weight-bold" style="margin-left: 35px">Community</p>
          <ul class="">
            <li class="mt-3">
              <a @click="$router.replace('/register')">Join our community</a>
            </li>
            <li class="mt-3">
              <a @click="$router.replace('/register')">Register for Webinar</a>
            </li>

            <li class="mt-3">
              <a>Gallery </a>
            </li>
          </ul>
        </div>

        <div class="col-md-3 footer-col ">
          <p class="text-white ft-22 font-weight-bold" style="margin-left: 35px">Contact</p>
          <ul>
            <li class="mt-3">
              <p class="w-100 text-white ft-12">
                <i class="fa fa-map-marker mr-2"></i> &nbsp; 2nd floor Hub One, No.10 Hughes Avenue,<br />
                Alagomeji Yaba, Lagos State.
              </p>
            </li>
            <li class="mt-3">
              <p class="w-100 text-white ft-12"><i class="fa fa-envelope mr-2 "></i>&nbsp; info@myyinvest.com.ng</p>
            </li>

            <li class="mt-3">
              <p class="text-white  ft-12  " style="overflow-wrap: break-word">
                <span class="d-flex flex-row">
                  <span> <i class="fa fa-phone mr-2"></i></span>
                  <span style="max-width: 100%!important;">07036821841,08108933352,08132049708</span>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="final-footer">
        <img class="text-center" src="@/assets/svgs/footer_logo.svg" alt="Logo" />
      </div>
      <div id="footer">
        <div class="social-icons">
          <ul>
            <li>
              <a class="whatsapp" href="#"><i class="fa fa-whatsapp"></i></a>
            </li>
            <li>
              <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a class="instagram" href="#"><i class="fa fa-instagram"></i></a>
            </li>
            <li>
              <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
            </li>
            <li>
              <a class="youtube" href="#"><i class="fa fa-youtube"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-3">
        <p class="text-white font-weight-lighter mx-auto w-75 final-footer-text text-center ft-14">
          Myyinvest.com Ltd is a Property Technology (PropTech) Company duly registered with the Corporate Affairs Commission (CAC) of Nigeria with RC 1655737. Investments are held in Trust by Quantum
          Zenith Trustees, the Trustee Arm of Zenith Bank and a company Registered and Regulated by the Securities and Exchange Commission (SEC). Every investment has an insurance cover which is
          handled by Leadway Assurance Company Limited, Authorized and Regulated by the National Insurance Commission (NIC) with RIC NO. 025. Myyinvest.com Ltd Formerly Myycrib.com.ng is a prestigious
          member of the Fintech Nigeria Association.
        </p>

        <!--      <h5>&copy 2020 MyyInvest. All rights reserved.</h5>-->
      </div>
      <p class="ft-12 font-weight-light text-white text-center mt-5 pt-4 ">&copy; 2020 MyyInvest. All rights reserved.</p>
    </main>
  </div>
</template>

<script>
export default {
  name: "bottomFooter"
};
</script>

<style scoped lang="scss">
a {
  cursor: pointer !important;
}
</style>
