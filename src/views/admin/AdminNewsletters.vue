<template>
  <the-admin-layout>
    <div id="style-2" class="table-responsive">
      <div class="row">
        <div class="col-6">
          <div class="form-group row">
            <label for="colFormLabelSm" class="my-auto col-12 col-sm-2 col-form-label col-form-label-sm">Search</label>
            <div class="text-left col-12 col-sm-6">
              <input type="text" name="" class="text-left form-control form-control-s" placeholder="Search Table" id="colFormLabelSm">
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="float-righ form-group row">
            <div class="col-sm-3"></div>
            <label for="colFormLabelSm" class="my-auto col-12 col-sm-2 col-form-label col-form-label-sm">Filter</label>
            <div class="text-left col-12 col-sm-6">
              <select class="custom-select custom-select-s">
                <!-- <option selected>Filter Opti</option> -->
                <option value="">Sort by A to Z</option>
                <option value="">Sort by Z to A </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-bordered table-hover">
        <thead class="table-header">
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Date</th>
            <th scope="col">Email Address</th>
            <th scope="col">Location</th>
            <th scope="col" class="options">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(newsletter, index) in getAllNewsletters" :key="index">
            <td>{{++index}}</td>
            <td>17th Feb. 2021</td>
            <td>test@mail.com</td>
            <td>14, Shinra Tensei Street, Amaterasu Town, Gakido, land of Water.</td>
            <td style="display: flex; justify-content: space-between">
              <span @click="deleteItem" class="m-3">
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14">
                    <path
                      paint-order="stroke fill markers"
                      fill-rule="evenodd"
                      d="M11.57 2.286H9.365L8.453.766A1.286 1.286 0 0 0 7.35.144h-2.7c-.452 0-.87.237-1.103.624l-.911 1.519H.429a.429.429 0 0 0-.43.428v.429c0 .237.193.428.43.428h.428v9c0 .71.576 1.286 1.286 1.286h7.714c.71 0 1.286-.575 1.286-1.286v-9h.428c.237 0 .429-.191.429-.428v-.43a.429.429 0 0 0-.43-.427zM9.858 12.57H2.143v-9h7.714v9zM4.603 1.507c.029-.05.08-.08.138-.078h2.518a.16.16 0 0 1 .138.078l.468.779h-3.73l.468-.78zm2.576 9.779h.642a.322.322 0 0 0 .322-.322V5.179a.322.322 0 0 0-.322-.322h-.642a.322.322 0 0 0-.322.322v5.785c0 .178.144.322.322.322zm-3 0h.642a.322.322 0 0 0 .322-.322V5.179a.322.322 0 0 0-.322-.322h-.642a.322.322 0 0 0-.322.322v5.785c0 .178.144.322.322.322z"
                    />
                  </svg>
                </svg>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <BasePagination @pagination="fetchAllNewsletters" :pagination-data="paginationData" />
    <div class="delete-overlay" v-if="!noDeleteModal">
      <div class="delete-modal">
        <p>Delete post</p>
        <p>Are you sure you want to delete post?</p>
        <div>
          <button @click="cancelDelete">Cancel</button>
          <button @click="proceedToDelete(deleteId)">Proceed</button>
        </div>
      </div>
    </div>
  </the-admin-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import handleValidation from "../../mixins/validationMixins";
import BasePagination from "@/components/admin/BasePagination.vue";

export default {
  name: "AdminNewsletters",
  mixins: [handleValidation],
  components: {
    BasePagination,
  },
  metaInfo: {
    title: "Myyinvest - Newsletters (Admin)",
    titleTemplate: null,
  },
  data() {
    return {
      deleteId: null,
      noDeleteModal: true,
      paginationData: {},
    };
  },
  computed: {
    ...mapState({
      getAllNewsletters: (state) => state.admin.allNewsletters,
    }),
  },
  created() {
    this.fetchAllNewsletters();
  },
  methods: {
    ...mapActions({
      allNewsletters: "admin/allNewsletters",
      destroyNewsletter: "admin/destroyNewsletter",
    }),
    fetchAllNewsletters(page) {
      this.allNewsletters(page).then((res) => {
        this.paginationData = res.data.pagination;
      });
    },
    changeColor(val) {
      if (val.toLowerCase().normalize() === "published") {
        return "color: var(--myyinvest-green)";
      } else return "color: var(--myyinvest-danger)";
    },

    deleteItem() {
      this.noDeleteModal = !this.noDeleteModal;
    },

    cancelDelete() {
      this.noDeleteModal = !this.noDeleteModal;
    },

    proceedDelete() {
      alert("What next?");
    },
  },
};
</script>

<style scoped>
@media (min-width: 920px) {
  #style-2 {
    overflow-x: hidden;
  }
}
.table-hover tbody tr:hover {
  box-shadow: 2px 2px 6px #c5baba, -2px -2px 6px #ffffff !important;
  /* box-shadow: 2px 2px 6px #bebebe, -2px -2px 6px #ffffff; */
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
  background-color: #f5f5f5;
}

.table-header {
  box-shadow: var(--myyinvest-red) 2px 0px 4px 0px;
  position: sticky !important;
  top: 0px;
  background-color: white;
  color: #c10000;
}
.main-content {
  padding: 1px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.main-content::-webkit-scrollbar {
  display: none;
}

section {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;
  box-shadow: 0 0 2px 0 gray;
  border-radius: 5px;
}

section:not(:last-child) {
  margin-bottom: var(--base-size);
}

section div {
  display: flex;
  justify-content: center;
  width: 11%;
  padding: 2px;
}

section div.sn {
  width: 6%;
}

section div.title-p,
section div.options {
  width: 14%;
}

section:first-child {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: var(--myyinvest-white);
}

section.contents {
  margin-bottom: var(--base-size);
}

section:first-child div {
  color: gray;
  font-weight: 600;
}

section div img {
  width: 100%;
  height: 60px;
}

div.options {
  justify-content: space-around !important;
}

.pagination {
  border-top: 1px solid grey;
  display: flex;
  justify-content: right;
  align-items: center;
  /* margin-top: var(--base-size); */
}

.pagination button {
  padding: 5px 10px;
  border: 1px solid var(--myyinvest-red);
  border-radius: 5px;
  color: var(--myyinvest-red);
  background-color: var(--myinvest-white);
}

.pagination button:first-child {
  margin-left: auto;
}

.pagination button:not(:first-child) {
  margin-left: 10px;
}

.pagination button:hover,
.pagination button:focus,
.pagination .button-active {
  background-color: var(--myyinvest-red);
  color: var(--myyinvest-white);
}

.delete-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1111;
}

.delete-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  height: 250px;
  padding: calc(2 * var(--base-size));
  border-radius: 10px;
  background-color: var(--myyinvest-white);
  transform: translate(-50%, -50%);
}

.delete-modal p {
  font-size: var(--font-md);
  font-weight: 600;
  text-align: center;
}

.delete-modal p:first-child {
  margin-bottom: var(--base-size);
  color: var(--myyinvest-red);
}

.delete-modal p:nth-child(2) {
  margin: var(--base-size) 0;
}

.delete-modal div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--base-size);
}

.delete-modal div button {
  padding: 5px;
  border: 2px solid var(--myyinvest-red);
  color: var(--myyinvest-red);
  font-weight: 600;
  border-radius: 5px;
  background-color: var(--myyinvest-white);
}

.delete-modal div button:hover,
.delete-modal div button:focus {
  border: 2px solid transparent;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
}
</style>
