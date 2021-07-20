<template>
  <the-admin-layout>
    <div id="style-2" class="table-responsive">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="form-group row">
            <div class="col-12 col-sm-4">
              <button class="mr-1 btn-block download" @click="previewDownload">Download</button>
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
        <thead class="table-header">
          <tr>
            <th scope="col">S/N</th>
            <th scope="col" class="options">Date</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Amount Invested</th>
            <th scope="col">No Tokens</th>
            <th scope="col">Plan</th>
            <th scope="col">Payment Frequency</th>
          </tr>
        </thead>
        <tbody v-if="resultQuery.length > 0">
          <tr v-for="(transaction, index) in resultQuery" :key="index">
            <td>{{ ++index }}</td>
            <td>{{ transaction.createdAt }}</td>
            <td>{{ transaction.userId.firstName + " " + transaction.userId.lastName }}</td>
            <td>{{ transaction.userId.email }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.noTokens }}</td>
            <td>{{ transaction.planName }}</td>
            <td>{{ transaction.rate }}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="8" class="text-center font-weight-bold">No result found for {{ searchQuery }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <BasePagination @pagination="fetchAllTransactions" :pagination-data="paginationData" />
    <BaseDownloadModal :noDownloadModal="noDownloadModal" @closeModal="cancelDownload" />
  </the-admin-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import handleValidation from "../../mixins/validationMixins";
import BasePagination from "@/components/admin/BasePagination.vue";
import BaseDownloadModal from "@/components/admin/BaseDownloadModal.vue";

export default {
  name: "AdminTransactions",
  mixins: [handleValidation],
  metaInfo: {
    title: "Myyinvest - Transactions (Admin)",
    titleTemplate: null,
  },
  components: {
    BasePagination,
    BaseDownloadModal,
  },
  data() {
    return {
      paginationData: {},
      totalpages: 5,
      noDownloadModal: true,
      searchQuery: null,
      filterQuery: "Filter Records",
    };
  },
  computed: {
    ...mapState({
      getAllTransactions: (state) => state.admin.allTransactions,
    }),
    resultQuery() {
      if (this.searchQuery) {
        const result = this.getAllTransactions.filter(
          (item) =>
            item.userId.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            item.userId.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            item.userId.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        if (result.length > 0) {
          return result;
        }
        return [];
      }
      return this.getAllTransactions;
    },
  },
  created() {
    this.fetchAllTransactions();
  },
  methods: {
    ...mapActions({
      allTransactions: "admin/allTransactions",
    }),
    filterQueryBy(event) {
      if (event.target.value === "asc") {
        this.getAllTransactions.sort((a, b) => {
          let fa = a.category.toLowerCase(),
            fb = b.userId.firstName.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
        });
      } else if (event.target.value === "desc") {
        this.getAllTransactions.reverse((a, b) => {
          let fa = a.userId.firstName.toLowerCase(),
            fb = b.category.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
        });
      }
    },
    fetchAllTransactions(page) {
      this.allTransactions(page).then((res) => {
        this.paginationData = res.data.pagination;
      });
    },
    randomizedStatus() {
      let statuses = ["In progress", "In progress", "Success", "Success", "Success", "Success", "Success", "Failed", "Failed", "Failed", "Failed"];

      let arr2 = [];
      while (statuses.length !== 0) {
        let ri = Math.floor(Math.random() * statuses.length);
        arr2.push(statuses[ri]);
        statuses.splice(ri, 1);
      }

      return (statuses = arr2);
    },

    zeroPrefix(num) {
      if (num < 10) {
        return 0;
      } else return "";
    },

    changeBackgroundColor(val) {
      if (val.toLowerCase().normalize() === "in progress") {
        return "background-color: gray";
      } else if (val.toLowerCase().normalize() === "success") {
        return "background-color: var(--myyinvest-green)";
      } else return "background-color: var(--myyinvest-danger)";
    },
    previewDownload() {
      this.noDownloadModal = !this.noDownloadModal;
    },
    cancelDownload() {
      this.noDownloadModal = !this.noDownloadModal;
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
  background-color: #f5f5f5;
}

.table-header {
  box-shadow: var(--myyinvest-red) 2px 0px 4px 0px;
  position: sticky !important;
  top: 0px;
  background-color: var(--myyinvest-white);
  color: #c10000;
  border: 2px solid #c10000;
}
.main-content {
  /* height: 95%; */
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

section:not(:first-child) div.investment-cost {
  color: var(--myyinvest-green);
}

section:not(:last-child) {
  margin-bottom: var(--base-size);
}

section div {
  display: flex;
  justify-content: center;
  width: 10%;
  padding: 2px;
}

section div.sn {
  width: 8%;
}

section div.email,
section div.payment-channel {
  width: 16%;
}

section div.project {
  width: 18%;
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

section:not(:first-child) div.status {
  color: var(--myyinvest-white);
}

div.status .status-content {
  width: 100%;
  padding: 2px 10px;
  border-radius: 5px;
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
</style>
