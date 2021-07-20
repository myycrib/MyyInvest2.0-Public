<template>
  <the-admin-layout>
    <div id="style-2" class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead class="table-header">
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email Address</th>
            <th scope="col" class="text-center">Account Name</th>
            <th scope="col" class="text-center">Account Number</th>
            <th scope="col" class="text-center">Bank Name</th>
            <th scope="col" class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="x in 10">
            <tr :key="x" @click="toggle(x)" :class="{ opened: opened.includes(x) }">
              <td>{{ zeroPrefix(x) }}{{ x }}</td>
              <td>Full Name {{ x }}</td>
              <td>test{{ x }}@gmail.com</td>
              <td>Account Name {{ x }}</td>
              <td>909289099</td>
              <td>Bank Name {{ x }}</td>
              <td>
                <img class="mx-auto text-center cursor-pointer d-block" src="@/assets/admin/icons/arrow-down.svg" alt="" />
              </td>
            </tr>
            <tr :key="x" v-if="opened.includes(x)" style="box-shadow: 0px 4px 4px rgba(193, 0, 0, 0.25);">
              <td class="t"></td>
              <td class="t">
                <span class="d-block">Fullname 1</span>
                <span class="d-block">Fullname 2</span>
              </td>
              <td class="t">
                <span class="d-block">Email1@gmail.com</span>
                <span class="d-block">Email2@gmail.com</span>
              </td>
              <td class="t">
                <span class="d-block">Account Name 1</span>
                <span class="d-block">Account Name 2</span>
              </td>
              <td class="t">
                 <span class="d-block">0099003738</span>
              </td>
              <td class="t">
                 <span class="d-block">GT Bank</span>
              </td>
              <td class="t"></td>
            </tr>
          </template>
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
    titleTemplate: null,
  },

  data() {
    return {
      opened: [],
      currentPage: 1,
      totalpages: 5,
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
    toggle(id) {
      const index = this.opened.indexOf(id);
      if (index > -1) {
        this.opened.splice(index, 1);
      } else {
        this.opened.push(id);
      }
    },
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
    },
  },
};
</script>

<style scoped>
.t {
  border: none !important;
}
.bank {
  cursor: pointer;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 260px;
  font-size: 1.1em;
  border: 1px solid #d62929;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 1em 1em 1.2em 2.8em;
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
