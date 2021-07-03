<template>
  <section class="main-wrapper">
    <div class="plan_header">
      <h4 class="main-title">Plans</h4>
      <button class="header-btn" @click="() => $router.push({ name: 'AdminPlanAdd' })">Add Plan</button>
    </div>
    <hr />
    <div class="custom-card" style="overflow: hidden !important">
      <div class="mx-auto text-center row">
        <div class="mb-3 col-md-4">
          <router-link :to="{ name: 'AdminPlanIncome' }">
            <div class="plan_image income-image">
              <div class="plan-title">Income Plan</div>
            </div>
          </router-link>
        </div>
        <div class="mb-3 col-md-4">
          <router-link :to="{ name: 'AdminPlanRental' }">
            <div class="plan_image rental-image">
              <div class="plan-title">Growth Plan</div>
            </div>
          </router-link>
        </div>
        <div class="mb-3 col-md-4">
          <router-link :to="{ name: 'AdminPlanSpecial' }">
            <div class="plan_image special-image">
              <div class="plan-title">Flex Plan</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "@/assets/admin/styles/new-form.css";
import { required } from "vuelidate/lib/validators";

export default {
  name: "AdminPlans",

  metaInfo: {
    title: "Myyinvest - Plan > Existing Plans (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      formPlan: {
        planName: "",
        returns: "",
        investPurpose: "",
        govBody: "",
        minInvestment: "",
        holdingPeriod: "",
        about: "",
        image: "",
        doc1: "",
        doc2: ""
      },

      submitStatus: null,
      validForm1: true,
      btnMsg: "ADD"
    };
  },

  validations: {
    formPlan: {
      planName: {
        required
      },

      returns: {
        required
      },

      investPurpose: {
        required
      },

      govBody: {
        required
      },

      minInvestment: {
        required
      },

      holdingPeriod: {
        required
      },

      about: {
        required
      },

      image: {
        required
      },

      doc1: {
        required
      },

      doc2: {
        required
      }
    },

    formProject: {
      projectName: {
        required
      },

      startDate: {
        required
      },

      endDate: {
        required
      },

      roi: {
        required
      },

      holdingPeriod: {
        required
      }
    }
  },

  methods: {
    submitFormPlan() {
      console.log("submitting...");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        this.validForm1 = false;

        setTimeout(() => {
          this.validForm1 = true;
        }, 2000);
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        this.btn_msg = "SUBMITTING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  }
};
</script>

<style scoped>
.main-title {
  color: var(--myyinvest-red);
}

.custom-card .plan_image:hover {
  transform: scale(1.02);
  /* box-shadow: 2px 2px 6px 0 #bebebe, -2px -2px 6px 0 #ffffff; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}

.plan_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.plan_header button {
  padding: 7.5px 75px;
  font-weight: 600 !important;
  border: 2px solid transparent;
  transition: all 0.5 ease;
}

.plan_header button:hover {
  box-shadow: 2px 2px 6px 0 #bebebe, -2px -2px 6px 0 #ffffff;
  transform: scale(1.02);
}

.available-plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--base-size);
  /* margin: 0 auto; */
}

.plan_image {
  position: relative;
  width: 300px;
  margin: 0 auto;
  height: 230px;
  border-radius: var(--base-size);
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
  -webkit-background-origin: border-box;
  -moz-background-origin: border-box;
  background-position: 0 0;
  /* z-index: -1; */
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s;
  cursor: pointer;
}

.income-image {
  background-image: url("../../assets/admin/images/income-plan.jpg");
}

.plan_image.rental-image {
  background-image: url("../../assets/admin/images/rental-plan.jpg");
}

.plan_image.special-image {
  background-image: url("../../assets/admin/images/special-plan.jpg");
}

.plan-title {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: fit-content;
  width: -moz-fit-content;
  width: max-content;
  font-size: 1.5em;
  font-weight: 600;
  transform: translate(-50%, -50%);
}

.form-section {
  margin-top: calc(3 * var(--base-size));
}
</style>
