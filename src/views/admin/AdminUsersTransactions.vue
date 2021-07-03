<template>
  <the-admin-layout>
    <div id="style-2" class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead class="table-header">
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Date</th>
            <th scope="col">Name of Plan</th>
            <th scope="col">Name of Projects</th>
            <th scope="col">Amount Invested</th>
            <th scope="col">No Tokens</th>
            <th scope="col">Payment</th>
            <th scope="col">Frequency</th>
            <th scope="col">Frequency Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="x in 20" :key="x">
            <td>{{ zeroPrefix(x) }}{{ x }}</td>
            <td>17th Feb. 2021</td>
            <td>Plan {{ x }}</td>
            <td>Project {{ x }}</td>
            <td>1,020</td>
            <td>{{ x }}</td>
            <td>3.99</td>
            <td>Frequency {{ x }}</td>
            <td>Duration {{ x }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination">
      <!-- <div class="mt-2 pagination-wrapper"> -->
      <button class="mt-2">Previous</button>
      <button class="mt-2" v-for="n in 5" :key="n" :class="[n === currentPage ? 'button-active' : '']">{{ n }}</button>
      <button class="mt-2">Next</button>
      <!-- </div> -->
    </div>
  </the-admin-layout>
</template>

<script>
import BasePagination from "@/components/admin/BasePagination.vue";

export default {
  name: "AdminUserTransactions",

  metaInfo: {
    title: "Myyinvest - Transactions (Admin)",
    titleTemplate: null
  },

  components: { BasePagination },

  data() {
    return {
      currentPage: 1,
      totalpages: 5
    };
  },

  methods: {
    zeroPrefix(num) {
      if (num < 10) {
        return 0;
      } else return "";
    },
    previousPage() {
      if (!this.isFirstPage) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (!this.isLastPage) {
        this.currentPage++;
      }
    }
  },

  computed: {
    isFirstPage() {
      return this.currentPage === 1;
    },

    isLastPage() {
      return this.currentPage === this.totalpages;
    }
  }
};
</script>

<style scoped>
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
