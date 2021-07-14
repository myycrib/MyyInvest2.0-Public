<template>
  <the-admin-layout>
    <div id="style-2" class="table-responsive">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="form-group row">
            <div class="col-12 col-sm-4">
              <button class="mr-1 btn-block download" @click="previewDownload">Download</button>
              <div class="download-overlay" v-if="noDownloadModal === false">
                <div class="download-modal">
                  <p>Kindly select range</p>

                  <div class="date-range">
                    <span>From</span>
                    <input type="date" name="start-date" id="start-date" />
                    <span class="to-date">To</span>
                    <input type="date" name="end-date" id="end-date" />
                  </div>

                  <div>
                    <button @click="cancelDownload">Cancel</button>
                    <button @click="proceedDownload">Proceed</button>
                  </div>
                </div>
              </div>
            </div>
            <label for="colFormLabelSm" class="my-auto col-12 col-sm-2 col-form-label col-form-label-sm">Search :</label>
            <div class="text-left col-12 col-sm-6">
              <input type="text" v-model="searchQuery" class="text-left form-control form-control-s" placeholder="Search Table" id="colFormLabelSm" />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="form-group row">
            <div class="col-sm-3"></div>
            <label for="colFormLabelSm" class="my-auto col-12 col-sm-2 col-form-label col-form-label-sm">Filter By:</label>
            <div class="text-left col-12 col-sm-6">
              <select @change="filterQueryBy" v-model="filterQuery" class="custom-select custom-select-s">
                <option disabled>Filter Records</option>
                <option value="asc">Sort by A to Z</option>
                <option value="desc">Sort by Z to A</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-bordered table-hover">
        <thead class="table-header" style="z-index: 10 !important">
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Address</th>
            <!-- <th scope="col">Phone Number</th> -->
            <th scope="col">Date of Birth</th>
            <th scope="col">Date of registration</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody v-if="resultQuery.length > 0">
          <tr v-for="(user, index) in resultQuery" :key="index">
            <td>{{ ++index }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.dateOfBirth }}</td>
            <td>{{ user.createdAt }}</td>
            <td style="display: flex; justify-content: space-between; cursor: pointer">
              <span class="mr-2 cursor-pointer dropdown">
                <svg width="17" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#0baa12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11">
                    <path
                      paint-order="stroke fill markers"
                      fill-rule="evenodd"
                      d="M16.9 5.082C15.347 2.05 12.27 0 8.75 0 5.229 0 2.152 2.052.6 5.082a.925.925 0 0 0 0 .836C2.153 8.948 5.229 11 8.75 11c3.52 0 6.598-2.052 8.15-5.082a.925.925 0 0 0 0-.836zM8.75 9.625c-2.826 0-5.417-1.576-6.816-4.125 1.399-2.55 3.99-4.125 6.816-4.125 2.826 0 5.417 1.576 6.816 4.125-1.4 2.549-3.99 4.125-6.816 4.125zm0-7.333a3.158 3.158 0 0 0-.895.143c.134.236.206.502.208.773 0 .886-.72 1.605-1.605 1.605a1.591 1.591 0 0 1-.773-.208A3.2 3.2 0 1 0 8.75 2.292z"
                    />
                  </svg>
                </svg>
                <div class="dropdown-content">
                  <li @click="viewUser(user._id, null)">User Details</li>
                  <li @click="viewUser(user._id, 'transactions')">User Transactions</li>
                </div>
              </span>
              <span @click="deleteItem(user._id)" class="ml-2">
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
        <tbody v-else>
          <tr>
            <td colspan="7" class="text-center font-weight-bold">No result found for {{ searchQuery }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <BasePagination @pagination="fetchAllUsersPaginated" :pagination-data="paginationData" />
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
  name: "AllUsers",
  mixins: [handleValidation],
  metaInfo: {
    title: "Myyinvest - All Users (Admin)",
    titleTemplate: null,
  },
  components: {
    BasePagination,
  },
  data() {
    return {
      searchQuery: null,
      filterQuery: 'Filter Records',
      deleteId: null,
      noDeleteModal: true,
      paginationData: {},
      noDownloadModal: true,
    };
  },
  computed: {
    ...mapState({
      getAllUsersPaginated: (state) => state.admin.allUsersPaginated,
    }),
    // getAllUsersPaginated: {
    //   get() {
    //     return this
    //   },
    //   set(val) {
        
    //   }
    // },
    resultQuery() {
      if (this.searchQuery) {
        const result = this.getAllUsersPaginated.filter((item) => item.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) || item.email.includes(this.searchQuery) || item.lastName.includes(this.searchQuery));
        if (result.length > 0) {
          return result;
        }
        return [];
      }
      return this.getAllUsersPaginated;
    },
  },
  created() {
    this.fetchAllUsersPaginated();
  },
  methods: {
    ...mapActions({
      allUsersPaginated: "admin/allUsersPaginated",
      destroyUser: "admin/destroyUser",
    }),
    filterQueryBy(event) {
      if (event.target.value === 'asc') {
        this.getAllUsersPaginated.sort((a,b) => {
          let fa = a.firstName.toLowerCase(), fb = b.firstName.toLowerCase()
          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1 
          }
        })
      }else if(event.target.value === 'desc') {
        this.getAllUsersPaginated.reverse((a,b) => {
          let fa = a.firstName.toLowerCase(), fb = b.firstName.toLowerCase()
          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1 
          }
        })
      }
    },
    fetchAllUsersPaginated(page) {
      this.allUsersPaginated(page).then((res) => {
        this.paginationData = res.data.pagination;
      });
    },
    viewUser(id, route) {
      if (route === "transactions") {
        this.$router.push(`/admin/users/${id}/${route}`);
      } else {
        this.$router.push("/admin/users/" + id);
      }
    },
    deleteItem(id) {
      this.deleteId = id;
      this.noDeleteModal = !this.noDeleteModal;
    },

    cancelDelete() {
      this.noDeleteModal = !this.noDeleteModal;
    },

    proceedToDelete(id) {
      this.destroyUser(id).then((res) => {
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
      });
    },
    previewDownload() {
      this.noDownloadModal = !this.noDownloadModal;
    },

    cancelDownload() {
      this.noDownloadModal = !this.noDownloadModal;
    },

    proceedDownload() {
      alert("What next?");
    },
  },
};
</script>

<style scoped>
button.download,
button.download {
  padding: 5px 10px;
  color: var(--myyinvest-white);
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 5px;
  background-color: var(--myyinvest-red);
}

button.download:hover,
button.download:focus {
  color: var(--myyinvest-red);
  border: 2px solid var(--myyinvest-red);
  background-color: var(--myyinvest-white);
}
.download-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1111;
}

.download-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 300px;
  padding: calc(2 * var(--base-size));
  border-radius: 10px;
  background-color: var(--myyinvest-white);
  transform: translate(-50%, -50%);
}

.download-modal p {
  font-size: var(--font-sm);
  font-weight: 600;
  text-align: center;
}

.download-modal span {
  font-weight: 600;
}

.download-modal div span.to-date {
  margin-top: 10px;
}

.download-modal div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--base-size);
}

.download-modal div.date-range {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.download-modal div button {
  padding: 5px;
  border: 2px solid var(--myyinvest-red);
  color: var(--myyinvest-red);
  font-weight: 600;
  border-radius: 5px;
  background-color: var(--myyinvest-white);
}

.download-modal div button:hover,
.download-modal div button:focus {
  border: 2px solid transparent;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
}
@media (min-width: 920px) {
  #style-2 {
    overflow-x: hidden;
  }
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  font-size: 1.1em;
  border: 1px solid #d62929;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 1em 1em 1.2em 2em;
  list-style-type: none;
  z-index: 1;
  left: auto;
  right: 1px;
}
.dropdown-content li {
  padding-bottom: 8px;
}
.dropdown-content li:hover {
  cursor: pointer;
  background-color: #d62929 !important;
  padding: 2px 5px;
  /* border-radius: 2px 5px; */
  border-radius: 0.5em 0.8em 0.5em 0.7em;
  color: #f5f5f5;
}

.dropdown:hover .dropdown-content {
  display: block;
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
  top: 0;
  /* top: -10px !important; */
  position: -webkit-sticky !important;
  /* font-size: var(--font-md) !important; */
  font-weight: 200 !important;
  color: var(--myyinvest-red);
  border: 2px solid var(--myyinvest-red);
  background-color: var(--myyinvest-white);
}

.pagination {
  border-top: 1px solid grey;
  display: flex;
  justify-content: right;
  align-items: center;
  /* bottom: 0;
  position: fixed; */
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
</style>
