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
        <div class="card-body ">
          <p class="text-center font-weight-bold ft-24 mt-5 pb-5">Enter your email to reset password</p>
          <main-input class=" mb-5 mt-5 " v-model="email" label="Email Address" type="email" />
          <main-button class="w-100 mt-2 mb-5 " @click="resetPassword" :text="resetText" type="filled" required />
          <label class="form-check-label font-poppins ft-12 font-weight-light"
            >Remembered your password? return back to <router-link class="ft-12 font-weight-light font-poppins" to="/login">login</router-link>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from "../../components/form/MainButton";
import MainInput from "../../components/form/mainInput";
import { mapActions } from "vuex";
export default {
  name: "forgotPassword",
  components: { MainButton, MainInput },
  data() {
    return {
      email: "",
      resetText: "Reset"
    };
  },
  methods: {
    ...mapActions(["forgotPassword"]),
    async resetPassword() {
      this.resetText = "loading..";
      if (this.email === "") {
        this.resetText = "Reset";
        this.handleNotify({
          message: "Email field is required",
          status: "Error"
        });
        return;
      }
      let res = await this.forgotPassword({ email: this.email });
      if (res.status === 200 || res.status === 201) {
        this.resetText = "Reset";
        this.handleNotify({
          message: res.data,
          status: "Success"
        });
      } else {
        this.resetText = "Reset";
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
  }
};
</script>

<style scoped></style>
