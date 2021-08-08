<template>
  <the-admin-layout>
    <div id="style-2" class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead class="table-header">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Name Of Referer</th>
            <th scope="col">Email Of Refered</th>
            <th scope="col">Name Of Plan</th>
            <th scope="col">Amount Invested</th>
            <th scope="col">Wallet Account Details</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="x in 10" :key="x">
            <td>20th july 2021</td>
            <td>Referer {{ x }}</td>
            <td>voffiah@gmail.com</td>
            <td>Plan {{ x }}</td>
            <td>
              300,000
            </td>
            <td>Wallet account details</td>
            <td class="text-center">
                <b-icon v-if="x > 4" class="cursor-pointer h3" variant="danger" icon="arrow-repeat"></b-icon>
                <b-icon v-else class="cursor-pointer h3" variant="success" icon="check-circle"></b-icon>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination">
      <button class="mt-2">Previous</button>
      <button class="mt-2" v-for="n in 5" :key="n" :class="[n === currentPage ? 'button-active' : '']">{{ n }}</button>
      <button class="mt-2">Next</button>
    </div>
  </the-admin-layout>
</template>

<script>
export default {
  name: "AdminTransactions",

  metaInfo: {
    title: "Myyinvest - Transactions (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      // status: "Success",
      currentPage: 1,
      totalpages: 5
    };
  },

  methods: {
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
    status() {
      return this.randomizedStatus();
    },

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
