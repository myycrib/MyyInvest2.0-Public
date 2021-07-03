<template>
  <div class="custom-card" style="overflow: hidden">
    <div class="row">
      <div class="col">
        <form action="">
          <div class="plan">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="">Name of Plan</label>
                <input type="text" class="form-control" placeholder="Name of Plan" />
              </div>
              <div class="form-group col-md-6">
                <label for="">Minimum Investment</label>
                <input type="text" class="form-control" placeholder="Minimum Investment" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="">Returns</label>
                <input type="text" class="form-control" placeholder="Returns" />
              </div>
              <div class="form-group col-md-6">
                <label for="">Holding Period</label>
                <input type="text" class="form-control" placeholder="Holding Period" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="">Governance Body</label>
                <textarea class="form-control" name="" id="" cols="3" rows="5">Governance Body</textarea>
              </div>
              <div class="form-group col-md-6">
                <label for="">About</label>
                <textarea class="form-control" name="" id="" cols="3" rows="5">About</textarea>
              </div>
              <div class="form-group col-md-6">
                <label for="">Investment Purpose</label>
                <input type="text" class="form-control" placeholder="Investment Purpose" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="">Upload Image</label>
                <div class="upload">
                  <div class="upload-window">
                    <img :src="imgURL" v-if="imgURL !== '/img/camera.f17f2a7e.svg'" style="height: 135px; width: 230px; object-fit: cover" alt="User Image Preview" class="img-fluid" />
                    <img :src="imgURL" v-else alt="User Image Preview" class="img-fluid" />
                  </div>

                  <div class="file-input">
                    <input type="file" accept="image/*" id="file" class="file" @change="updateFilename" />
                    <label for="file"> Select file </label>

                    <p class="file-name">{{ selectedFilename }}</p>
                  </div>
                </div>
              </div>
              <div class="form-group col-md-3">
                <label for="">Upload Brochure</label>
                <div class="upload">
                  <div class="upload-window">
                    <img :src="imgURL" v-if="imgURL !== '/img/camera.f17f2a7e.svg'" style="height: 135px; width: 230px; object-fit: cover" alt="User Image Preview" class="img-fluid" />
                    <img :src="imgURL" v-else alt="User Image Preview" class="img-fluid" />
                  </div>

                  <div class="file-input">
                    <input type="file" accept="image/*" id="file" class="file" @change="uploadDocument1" />
                    <label for="file"> Select file </label>

                    <p class="file-name">{{ selectedFilename }}</p>
                  </div>
                </div>
              </div>
              <div class="form-group col-md-3">
                <label for="">Upload Legal Document</label>
                <div class="upload">
                  <div class="upload-window">
                    <img :src="imgURL" v-if="imgURL !== '/img/camera.f17f2a7e.svg'" style="height: 135px; width: 230px; object-fit: cover" alt="User Image Preview" class="img-fluid" />
                    <img :src="imgURL" v-else alt="User Image Preview" class="img-fluid" />
                  </div>

                  <div class="file-input">
                    <input type="file" accept="image/*" id="file" class="file" @change="uploadDocument1" />
                    <label for="file"> Select file </label>

                    <p class="file-name">{{ selectedFilename }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="m-3 form-btn">Submit</button>
            </div>
          </div>
          <div class="project">
            <div class="plan_header">
              <h4 class="main-title">Add Project</h4>
            </div>
            <hr />
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="">Name of Project</label>
                <input type="text" class="form-control" placeholder="Name of Project" />
              </div>
              <div class="form-group col-md-6">
                <label for="">ROI</label>
                <input type="text" class="form-control" placeholder="ROI" />
              </div>
              <div class="form-group col-md-6">
                <label for="">Holding Period</label>
                <input type="text" class="form-control" placeholder="Holding Period" />
              </div>
              <div class="form-group col-md-6">
                <label for="">Number of Tokens</label>
                <input type="text" class="form-control" placeholder="Holding Period" />
              </div>
              <div class="form-group col-md-6">
                <label for="">Payout Date</label>
                <input type="date" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="">Start Date</label>
                <input type="date" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="">End Date</label>
                <input type="date" class="form-control" />
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button type="submit" class="m-3 form-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "AdminPlanIncomeAdd",

  metaInfo: {
    title: "Myyinvest - Plan > Add Income (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      imgURL: require("../../assets/admin/icons/camera.svg"),
      selectedFilename1: "No file selected",
      selectedFilename2: "No file selected",
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

      formProject: {
        projectName: "",
        startDate: "",
        endDate: "",
        roi: "",
        holdingPeriod: ""
      },

      submitStatus: null,
      validForm1: true,
      validForm2: true,
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

        this.selectedFilename1 = fileNameAndSize;
      }
    },
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
    },

    submitFormProject() {
      console.log("submitting...");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        this.validForm2 = false;

        setTimeout(() => {
          this.validForm2 = true;
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
.add-project:first-child {
  margin-bottom: 0 !important;
}
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
</style>
