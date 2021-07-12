<template>
  <the-admin-layout>
    <!-- <Spinner /> -->
    <div id="style-2" style="overflow-x: hidden" class="table-responsive">
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
            <th scope="col">Post Title</th>
            <th scope="col">Post Image</th>
            <th scope="col">Post Author</th>
            <th scope="col">Post Category</th>
            <th scope="col">Post Date</th>
            <th scope="col" class="options">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(insight, index) in getAllInsights" :key="index">
            <td>{{ ++index }}</td>
            <td> {{ insight.postTitle }} </td>
            <td>
              <img style="width: 180px; height: 100px; object-fit: cover" 
              :src="insight.image" alt="Content Image" />
            </td>
            <td>{{ insight.authoredBy }}</td>
            <td>{{ insight.category }}</td>
            <td>{{ insight.createdAt }}</td>
            <td style="display: flex; justify-content: space-between; cursor: pointer">
              <span>
                <svg
                  @click="() => $router.push({ name: 'AddInsights' })"
                  width="15"
                  height="13"
                  class="m-3"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  fill="#0a47a0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                    <path
                      paint-order="stroke fill markers"
                      fill-rule="evenodd"
                      d="M9.837 8.962l.773-.773a.195.195 0 0 1 .332.137v3.514c0 .64-.52 1.16-1.16 1.16H1.275c-.64 0-1.16-.52-1.16-1.16V3.334c0-.641.52-1.16 1.16-1.16h6.61c.171 0 .258.208.137.33l-.773.774a.194.194 0 0 1-.138.056H1.275v8.506h8.507V9.097c0-.05.019-.1.055-.135zm3.784-4.877L7.276 10.43l-2.185.242A.998.998 0 0 1 3.989 9.57l.242-2.185 6.346-6.346a1.41 1.41 0 0 1 1.998 0l1.044 1.044c.553.554.553 1.45.002 2zm-2.387.747L9.83 3.428 5.34 7.92l-.176 1.578 1.578-.176 4.492-4.49zM12.8 2.906l-1.044-1.044a.253.253 0 0 0-.358 0l-.746.747 1.404 1.404.746-.747a.257.257 0 0 0-.002-.36z"
                    />
                  </svg>
                </svg>
              </span>
              <span  @click="() => $router.push({ name: 'EditInsights', params: { id: insight._id} })" class="m-3">
                <svg width="17" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#0baa12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11">
                    <path
                      paint-order="stroke fill markers"
                      fill-rule="evenodd"
                      d="M16.9 5.082C15.347 2.05 12.27 0 8.75 0 5.229 0 2.152 2.052.6 5.082a.925.925 0 0 0 0 .836C2.153 8.948 5.229 11 8.75 11c3.52 0 6.598-2.052 8.15-5.082a.925.925 0 0 0 0-.836zM8.75 9.625c-2.826 0-5.417-1.576-6.816-4.125 1.399-2.55 3.99-4.125 6.816-4.125 2.826 0 5.417 1.576 6.816 4.125-1.4 2.549-3.99 4.125-6.816 4.125zm0-7.333a3.158 3.158 0 0 0-.895.143c.134.236.206.502.208.773 0 .886-.72 1.605-1.605 1.605a1.591 1.591 0 0 1-.773-.208A3.2 3.2 0 1 0 8.75 2.292z"
                    />
                  </svg>
                </svg>
              </span>
              <span @click="deleteItem(insight._id)" class="m-3">
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
    <BasePagination @pagination="fetchAllInsights" :pagination-data="paginationData" />
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
  name: "ViewInsights",
  mixins: [handleValidation],
  components: {
    BasePagination,
  },
  metaInfo: {
    title: "Myyinvest - View Insights (Admin)",
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
      getAllInsights: state => state.admin.allInsights
    }),
  },
  created() {
    this.fetchAllInsights();
  },
  methods: {
    ...mapActions({
      allInsights: "admin/allInsights",
      destroyInsight: "admin/destroyInsight",
    }),
    fetchAllInsights(page) {
      this.allInsights(page).then((res) => {
        this.paginationData = res.data.pagination
      });
    },

    changeColor(val) {
      if (val.toLowerCase().normalize() === "published") {
        return "color: var(--myyinvest-green)";
      } else return "color: var(--myyinvest-danger)";
    },

    deleteItem(id) {
      this.deleteId = id
      this.noDeleteModal = !this.noDeleteModal;
    },

    cancelDelete() {
      this.noDeleteModal = !this.noDeleteModal;
    },

    proceedToDelete(id) {
      this.destroyInsight(id)
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          this.noDeleteModal = !this.noDeleteModal;
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
      })
    },
  },
};
</script>

<style scoped>
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
