<template>
  <the-admin-layout>
    <form @submit.prevent="handleEditFaq" style="overflow-y: auto; overflow-x: hidden" id="overflow-wrapper">
      <div class="mt-5 row">
        <div class="mx-auto mb-5 col-md-10">
          <fieldset class="input-grp">
            <legend><label for="ptitle">Question</label></legend>
            <input v-model="payloadForm.question" type="text" class="form-control" id="ptitle" placeholder="Your Question" />
          </fieldset>
          <fieldset class="input-grp">
            <legend><label for="ptitle">Answer</label></legend>
            <input type="text" v-model="payloadForm.answer" class="form-control" id="ptitle" placeholder="Your Answer" />
          </fieldset>
          <fieldset class="input-grp">
            <legend><label for="pcategory">Post Category</label></legend>
            <select v-model="payloadForm.category" class="form-control" id="">
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
          </fieldset>
          <button class="w-20 mb-3 btn btn-block" type="submit">Submit</button>
        </div>
      </div>
    </form>
  </the-admin-layout>
</template>

<script>
import handleValidation from "../../mixins/validationMixins";
import { mapActions } from "vuex";

export default {
  name: "EditFaqs",
  mixins: [handleValidation],
  metaInfo: {
    title: "Myyinvest - Edit Faq (Admin)",
    titleTemplate: null,
  },

  data() {
    return {
      payloadForm: {},
      selectedProject: "",
      newProjectNames: [
        {
          name: "Project One",
        },
        {
          name: "Project Two",
        },
        {
          name: "Project Three",
        },
        {
          name: "Project Four",
        },
      ],
    };
  },
  created() {
    this.singleFaq(this.$route.params.id).then((res) => {
      this.payloadForm = res.data.faq;
    });
  },
  methods: {
    ...mapActions({
      singleFaq: "admin/singleFaq",
      editFaq: "admin/editFaq"
    }),
    handleEditFaq() {
      if (!this.handleValidation(this.payloadForm)) {
        return;
      }
      this.editFaq(this.payloadForm).then((res) => {
        if (res.status === 200 || res.status === 201) {
          this.handleNotify({
            message: res.data.message,
            status: "Success",
          });
        } else {
          this.handleNotify({
            message: res.data.message,
            status: "Error",
          });
        }
      });
    },
  },
};
</script>

<style scoped>
#overflow-wrapper::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

#overflow-wrapper::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

#overflow-wrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #d62929;
}

*:focus:not(:-moz-focusring) {
  outline: none;
}

*:focus:not(:focus-visible) {
  outline: none;
}

.left-area {
  margin-right: var(--base-size);
}

.right-area {
  margin-left: var(--base-size);
}

fieldset {
  padding: 5px;
  border: 1px solid var(--myyinvest-red-fade);
  border-radius: 5px;
  stroke-opacity: 0.5;
}

fieldset:not(:last-child) {
  margin-bottom: var(--base-size);
}

legend {
  width: fit-content;
  width: -moz-fit-content;
  width: max-content;
  padding: 0 5px;
  font-size: var(--font-normal);
}

label {
  display: inline-block;
  margin-bottom: 0;
}

input,
/* select, */
textarea {
  /* width: 100%; */
  /* height: fit-content;
  height: -moz-fit-content;
  height: max-content; */
  /* padding: 5px; */
  font-size: var(--font-md);
  /* border: 1px solid transparent; */
  /* border-radius: 5px; */
  background-color: var(--myyinvest-white);
  /* -moz-appearance: none;
  -webkit-appearance: none; */
  /* text-indent: 0.01px; */
  /* text-overflow: ""; */
}

input:hover:not(.upload input),
input:focus:not(.upload input),
/* select:hover,
select:focus, */
textarea:hover,
textarea:focus {
  border-color: var(--myyinvest-red-fade);
  outline: none;
}

button {
  margin-top: 10px;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
}

.pcontent {
  max-width: 100%;
  /* height: 300px; */
  margin-top: var(--base-size);
}

.pcontent input {
  height: 100%;
}

button {
  float: right;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 5px;
}

.dropdown-wrap {
  width: 100%;
  margin-bottom: var(--base-size);
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

.dropbtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
  margin: 0;
  padding: 5px 10px;
  color: black !important;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: var(--myyinvest-white);
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 50%;
  left: 100%;
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
  width: 150px;
  margin: 10px 0;
  padding: 10px 0;
  border-radius: 5px;
  background-color: var(--myyinvest-red);
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  color: #fff;
  font-weight: bold;
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
