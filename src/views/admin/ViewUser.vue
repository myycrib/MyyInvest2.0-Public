<template>
  <the-admin-layout>
    <form style="overflow-x: hidden" class="custom-wrapper">
      <div class="row">
        <div class="mb-5 col-md-8">
          <h6 class="personal-details-header">Personal Details</h6>
          <div class="p-0 mt-1 card">
            <div class="p-2 form-row">
              <div class="form-group col-md-3">
                <label for="">First Name</label>
                <input type="text" class="form-control" placeholder="First Name" />
              </div>
              <div class="form-group col-md-3">
                <label for="">Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" />
              </div>
              <div class="form-group col-md-3">
                <label for="">Gender</label>
                <input type="text" class="form-control" placeholder="Male" />
              </div>
              <div class="form-group col-md-3">
                <label for="">Date of birth</label>
                <input type="text" class="form-control" placeholder="Date of birth" />
              </div>
            </div>
            <div class="p-2 form-row">
              <div class="form-group col-md-6">
                <label for="">Email</label>
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <div class="form-group col-md-6">
                <label for="">Phone Number </label>
                <input type="text" class="form-control" placeholder="Phone Number" />
              </div>
            </div>
            <div class="p-2 form-row">
              <div class="form-group col-md-4">
                <label for="">Occupation</label>
                <input type="text" class="form-control" placeholder="Occupation" />
              </div>
              <div class="form-group col-md-4">
                <label for="">State of Origin </label>
                <input type="text" class="form-control" placeholder="State of Origin" />
              </div>
              <div class="form-group col-md-4">
                <label for="">Marital Status </label>
                <input type="text" class="form-control" placeholder="Marital Status" />
              </div>
            </div>
            <div class="p-2 form-row">
              <div class="form-group col-12">
                <label for="">Address</label>
                <textarea class="form-control" name="" cols="20" id="" rows="3"></textarea>
              </div>
            </div>
          </div>
          <h6 class="mt-4 personal-details-header">Investment Plan</h6>
          <div class="p-0 mt-1 card">
            <div class="p-2 form-row">
              <div class="form-group col-md-6">
                <label for="">What is the primary reason you are interested in investing with us?</label>
                <textarea class="form-control"> </textarea>
              </div>
              <div class="form-group col-md-6">
                <label for="">What is your monthly income?</label>
                <input type="text" placeholder="What is your monthly income?" name="" id="" class="mt-2 form-control" />
              </div>
            </div>
            <div class="p-2 form-row">
              <div class="form-group col-md-6">
                <label for="">What kind of investor are you?</label>
                <input type="text" class="form-control" placeholder="What kind of investor are you?" />
              </div>
              <div class="form-group col-md-6">
                <label for="">How much do u want to invest in the next 12 month? </label>
                <input type="text" class="form-control" placeholder="How much do u want to invest in the next 12 month?" />
              </div>
            </div>
            <div class="p-2 form-row">
              <div class="form-group col-md-6">
                <label for="">Who advice you on your finance decision?</label>
                <input type="text" class="form-control" placeholder="Who advice you on your finance decision?" />
              </div>
              <div class="form-group col-md-6">
                <label for="">What Investment Holding period would you prefer? </label>
                <input type="text" class="form-control" placeholder="What Investment Holding period would you prefer?" />
              </div>
            </div>
            <div class="p-2 form-row">
              <div class="form-group col-md-12">
                <label for="">Something missing?</label>
                <input type="text" class="form-control" placeholder="Something missing" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <h6 class="personal-details-header">Next of Kin</h6>
          <div class="mt-1 card">
            <div class="p-3 form-row">
              <div class="form-group col-md-12">
                <label for="">First Name</label>
                <input type="text" class="form-control" placeholder="First Name" />
              </div>
              <div class="form-group col-md-12">
                <label for="">Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" />
              </div>
              <div class="form-group col-md-12">
                <label for="">Relationship</label>
                <input type="text" class="form-control" placeholder="Last Name" />
              </div>
              <div class="form-group col-md-12">
                <label for="">Phone Number</label>
                <input type="text" class="form-control" placeholder="Last Name" />
              </div>
              <div class="form-group col-md-12">
                <label for="">Address</label>
                <textarea class="form-control" name="" cols="20" id="" rows="3"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </the-admin-layout>
</template>

<script>
export default {
  name: "ViewUserDetails",

  metaInfo: {
    title: "Myyinvest - User Details (Admin)",
    titleTemplate: null
  }
};
</script>

<style scoped>
.custom-wrapper::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.custom-wrapper::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.custom-wrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #d62929;
}
.custom-wrapper {
  position: relative;
}
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
  /* height: 3rem; */
}
label {
  color: var(--myyinvest-red);
  font-weight: 500;
  font-size: 1em !important;
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
*:focus:not(:-moz-focusring) {
  outline: none;
}

*:focus:not(:focus-visible) {
  outline: none;
}
.personal-details-header {
  color: var(--myyinvest-red);
  font-weight: 500;
}

.wrapper {
  display: grid;
  grid-template-columns: 75% 25%;
  padding: var(--base-size);
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.wrapper::-webkit-scrollbar {
  display: none;
}

.left-area {
  margin-right: var(--base-size);
}

.right-area {
  margin-left: var(--base-size);
}

.personal-details,
.investment-plan,
.next-kin {
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0 0 2px 0 gray;
  border-radius: 5px;
}

.header {
  font-size: var(--font-normal);
}

.header.plan {
  margin-top: var(--base-size);
}

.detail-grp {
  display: flex;
  flex-direction: row;
}

.detail-grp:not(:first-child) {
  margin-top: var(--base-size);
}

.next-kin .detail-grp {
  display: flex;
  flex-direction: column;
}

.detail-wrap {
  width: 100%;
}

.detail-wrap:not(:first-child) {
  margin-left: var(--base-size);
}

.next-kin .detail-grp .detail-wrap {
  margin-left: 0 !important;
}

label {
  font-size: var(--font-sm);
}

.detail-wrap div {
  width: 100%;
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
  padding: 5px;
  font-size: var(--font-md);
  border: 1px solid var(--myyinvest-red-fade);
  border-radius: 5px;
  background-color: var(--myyinvest-white);
}

.detail-wrap div:hover {
  border-color: var(--myyinvest-red);
  outline: none;
}
</style>
