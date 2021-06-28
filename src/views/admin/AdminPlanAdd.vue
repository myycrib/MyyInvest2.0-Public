<template>
  <section class="containe">
    <div class="plan_header">
      <h4 class="main-title">Add Plan</h4>
    </div>
    <hr />
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
            <label for="">Investment Purpose</label>
            <input type="text" class="form-control" placeholder="Investment Purpose" />
            <label for="" class="mt-1">Governance Body</label>
            <input type="text" class="form-control" placeholder="Governance Body" />
          </div>
          <div class="form-group col-md-6">
            <label for="">About</label>
            <textarea class="form-control" name="" id="" cols="3" rows="5">About</textarea>
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
          <div class="form-group col-md-6">
            <label for="">Upload Document</label>
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
  </section>
</template>

<script>
import "@/assets/admin/styles/new-form.css";
import { required } from "vuelidate/lib/validators";

export default {
  name: "AdminPlanIncomeAdd",

  metaInfo: {
    title: "Myyinvest - Plan > Add Plan (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      imgURL: require("../../assets/admin/icons/camera.svg"),
      selectedFilename: "No file selected",
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
    },
    updateFilename(event) {
      const [file] = event.target.files;
      const { name: fileName, size } = file;
      if (file) {
        const fileSize = (size / 1024).toFixed(2);
        const fileNameAndSize = `${fileName} - (${fileSize}KB)`;

        this.selectedFilename = fileNameAndSize;

        const reader = new FileReader();
        reader.onload = e => {
          this.imgURL = e.target.result;
        };

        reader.readAsDataURL(event.target.files[0]);
      }
    },
    uploadDocument1(event) {
      const [file] = event.target.files;
      const { name: fileName, size } = file;
      if (file) {
        const fileSize = (size / 1024).toFixed(2);
        const fileNameAndSize = `${fileName} - (${fileSize}KB)`;

        this.selectedFilename = fileNameAndSize;

        const reader = new FileReader();
        reader.onload = e => {
          this.imgURL = e.target.result;
        };

        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }
};
</script>

<style scoped>
button {
  padding: 7.5px 75px;
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
.main-title {
  color: var(--myyinvest-red);
  font-weight: 500 !important;
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
</style>
