<template>
  <div class="container position-relative">
    <div class="mx-auto mt-lg-5 pt-lg-5 col-lg-5 col-md-10 col-12">
      <div class="p-5 d-flex justify-content-center">
        <router-link to="/">
          <img src="@/assets/logos/Myylogo2.png" class="img-fluid d-lg-block d-md-none d-none  " alt="" width="200" height="200" />
          <img src="@/assets/logos/Myylogo2.png" class="img-fluid d-block d-lg-none d-md-block " alt="" width="200" height="200" />
        </router-link>
      </div>
      <div class="card shadow-3 d-flex flex-column justify-content-center w-100 p-2 " style="border-color: white;border-radius: 20px;">
        <div class="card-body d-flex justify-content-center flex-column ">
          <img src="@/assets/svgs/news-letter.svg" class="mx-auto" alt="" width="100" height="100" />
          <p class="text-center mt-5 ft-18">We sent you a recovery link at</p>
          <p class="ft-24  text-center font-weight-normal mb-5">{{ this.$route.params.email }}</p>
          <span><hr /></span>

          <div class="d-flex flex-row  mx-auto ">
            <span class="ft-10 mr-4    "><router-link style="text-decoration:none" class=" text-main-red " to="/login">Return to log in</router-link></span>
            <span class="dot mt-n1"></span>
            <span class="ft-10 ml-4 text-main-red cursor-pointer" @click="resendLink">Resend recovery link</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "forgotPassword",
  components: {},
  methods: {
    ...mapActions(["resendVerification"]),
    async resendLink() {
      let res = await this.resendVerification({ email: this.$route.params.email });
      if (res.status === 200 || res.status === 201) {
        this.handleNotify({
          message: res.data,
          status: "Success"
        });
      } else {
        this.handleNotify({
          message: res.data.message,
          status: "Error"
        });
      }
    },
    handleNotify(payload) {
      this.$Bus.$emit("notify", {
        show: true,
        mainMessage: payload.message
          .split("_")
          .join(" ")
          .replace(/\\\//g, "/"),
        tinyMessage: payload.message
          .split("_")
          .join(" ")
          .replace(/\\\//g, "/"),
        extras: "",
        status: payload.status
      });
    }
  },

  mounted() {
    console.log();
  }
};
</script>

<style scoped></style>
