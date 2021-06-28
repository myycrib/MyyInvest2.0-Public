<template>
  <div class="custom-card" style="overflow: hidden">
    <div class="p-2 row">
      <div class="mb-5 col-md-3" style="cursor: pointer">
        <div class="plan_image income-image">
          <div class="plan-title">Income Plan</div>
        </div>
      </div>
      <div class="col-md-9">
        <form action="">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="">Minimum Investment</label>
              <input type="text" class="form-control" placeholder="Minimum Investment" />
            </div>
            <div class="form-group col-md-6">
              <label for="">Returns</label>
              <input type="text" class="form-control" placeholder="Returns" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="">Holding Period</label>
              <input type="text" class="form-control" placeholder="Holding Period" />
            </div>
            <div class="form-group col-md-6">
              <label for="">Investment Purpose</label>
              <input type="text" class="form-control" placeholder="Investment Purpose" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="" class="mt-1">Governance Body</label>
              <input type="text" class="form-control" placeholder="Governance Body" />
            </div>
            <div class="form-group col-md-6">
              <label for="">About</label>
              <textarea class="form-control" name="" id="" cols="2" rows="3">About</textarea>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="">Document 1</label>
              <div class="upload">
                <div class="upload-window">
                  <img :src="imgURL" v-if="imgURL !== '/img/camera.f17f2a7e.svg'" style="height: 135px; width: 230px; object-fit: cover" alt="User Image Preview" class="img-fluid" />
                  <img :src="imgURL" v-else alt="User Image Preview" class="img-fluid" />
                </div>

                <div class="file-input">
                  <input type="file" accept="image/*" id="file" class="file" @change="updateFilename1" />
                  <label for="file"> Select file </label>

                  <p class="file-name">{{ selectedFilename1 }}</p>
                </div>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="">Document 2</label>
              <div class="upload">
                <div class="upload-window">
                  <img :src="imgURL" v-if="imgURL !== '/img/camera.f17f2a7e.svg'" style="height: 135px; width: 230px; object-fit: cover" alt="User Image Preview" class="img-fluid" />
                  <img :src="imgURL" v-else alt="User Image Preview" class="img-fluid" />
                </div>

                <div class="file-input">
                  <input type="file" accept="image/*" id="file" class="file" @change="updateFilename2" />
                  <label for="file"> Select file </label>

                  <p class="file-name">{{ selectedFilename2 }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button type="submit" class="m-3 form-btn">Edit</button>
          </div>
        </form>
      </div>
    </div>
    <div class="p-2 row">
      <div class="col">
        <div class="plan_header">
          <h4 class="p-2 main-title">Projects</h4>
        </div>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div id="style-2" class="mt-3 table-responsive">
          <table class="table table-bordered table-hover">
            <thead class="table-header">
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Name of Project</th>
                <th scope="col">ROI</th>
                <th scope="col">Holding Period</th>
                <th scope="col">End Date</th>
                <th scope="col">Number of Tokens</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="x in 20" :key="x">
                <td>{{ x }}</td>
                <td>Project {{ x }}</td>
                <td>{{ x * 2 }}%</td>
                <td>{{ x }} year(s)</td>
                <td>17th Feb. 2021</td>
                <td>{{ x * 3 }}</td>
                <td>
                  <div class="d-flex justify-content-around">
                    <img src="@/assets/admin/icons/edit-alt.svg" alt="Edit Icon" />
                    <img src="@/assets/admin/icons/trash-alt.svg" alt="Delete Icon" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import "@/assets/admin/styles/new-form.css";
export default {
  name: "AdminPlanIncomeView",

  metaInfo: {
    title: "Myyinvest - Plan > View Income (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      minInvestment: "",
      holdingPeriod: "",
      govBody: "",
      imgURL: require("../../assets/admin/icons/camera.svg"),
      // updateFilename1: "",
      // updateFilename2: "",
      pReturns: "",
      investmentPurpose: "",
      about: "",

      selectedFilename: "No file selected",
      selectedFilename1: "No file selected",
      selectedFilename2: "No file selected",

      submitStatus: null,
      validForm: true,
      btnMsg: "ADD"
    };
  },

  validations: {
    minInvestment: {
      required
    },

    holdingPeriod: {
      required
    },

    govBody: {
      required
    },

    updateFilename1: {
      required
    },

    updateFilename2: {
      required
    },

    pReturns: {
      required
    },

    investmentPurpose: {
      required
    },

    about: {
      required
    }
  },

  methods: {
    updateFilename1(event) {
      const [file] = event.target.files;
      const { name: fileName, size } = file;
      if (file) {
        const fileSize = (size / 1024).toFixed(2);
        const fileNameAndSize = `${fileName} - (${fileSize}KB)`;

        this.selectedFilename1 = fileNameAndSize;
      }
    },

    updateFilename2(event) {
      const [file] = event.target.files;
      const { name: fileName, size } = file;
      if (file) {
        const fileSize = (size / 1024).toFixed(2);
        const fileNameAndSize = `${fileName} - (${fileSize}KB)`;

        this.selectedFilename2 = fileNameAndSize;
      }
    },

    submit() {
      console.log("submitting...");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        this.validForm = false;

        setTimeout(() => {
          this.validForm = true;
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
button {
  padding: 7.5px 75px;
  border-radius: 0.3em;
  background-color: var(--myyinvest-red);
  color: var(--myyinvest-white);
  font-weight: 600 !important;
  border: 2px solid transparent;
  transition: all 0.5 ease;
}

button:hover {
  box-shadow: 2px 2px 6px 0 #bebebe, -2px -2px 6px 0 #ffffff;
  transform: scale(1.02);
}

#style-2::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-2::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

#style-2::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #d62929;
}
#style-2 {
  position: relative;
}

.table-header {
  box-shadow: var(--myyinvest-red) 2px 0px 4px 0px;
  position: sticky !important;
  /* top: -10px !important; */
  position: -webkit-sticky !important;
  /* font-size: var(--font-md) !important; */
  font-weight: 200 !important;
  color: var(--myyinvest-red);
  border: 2px solid var(--myyinvest-red);
  background-color: var(--myyinvest-white);
}
.table-hover tbody tr:hover {
  box-shadow: 2px 2px 6px #c5baba, -2px -2px 6px #ffffff !important;
  /* box-shadow: 2px 2px 6px #bebebe, -2px -2px 6px #ffffff; */
}
textarea {
  border: 1px solid var(--myyinvest-red);
}
input {
  border: 1px solid var(--myyinvest-red);
  height: 3rem;
}
label {
  color: var(--myyinvest-red);
  font-weight: 500;
  font-size: 1.2em;
}
.upload {
  width: 100%;
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
}

.upload-window {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 150px; */
  max-width: 250px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 10px;
  object-fit: contain;
  border: 1px solid var(--myyinvest-red);
}

.file {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
}

.file-input {
  position: relative;
}

.file-input label {
  display: block;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 150px;
  margin: 10px 0;
  padding: 10px 0;
  border-radius: 5px;
  background-color: var(--myyinvest-red);
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}

input:hover + label,
input:focus + label {
  transform: scale(1.02);
}

.file-name {
  font-size: var(--font-sm) !important;
  color: #555;
}
.main-title {
  color: var(--myyinvest-red);
}

.custom-card .plan_image:hover {
  cursor: pointer;
  transform: scale(1.02);
  /* box-shadow: 2px 2px 6px 0 #bebebe, -2px -2px 6px 0 #ffffff; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(168, 43, 43, 0.06);
}

.plan_header button {
  padding: 7.5px 75px;
  font-weight: 600 !important;
  border: 2px solid transparent;
  transition: all 0.5 ease;
}

.plan_image {
  position: relative;
  width: 250px;
  margin: 0 auto;
  height: 200px;
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
</style>
