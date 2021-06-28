<template>
  <section class="main-wrapper" style="overflow: hidden">
    <div class="row">
      <div class="col-12">
        <div id="style-2" class="mt-3 table-responsive">
          <table class="table table-bordered table-hover">
            <thead class="table-header">
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">User</th>
                <th scope="col">Amount</th>
                <th scope="col">Tokens</th>
                <th scope="col">Project</th>
                <th scope="col">Project Duration</th>
                <th scope="col">Payment Frequency</th>
                <th scope="col">Frequency Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="x in 20" :key="x">
                <td>{{ x }}</td>
                <td>User {{ x }}</td>
                <td>{{ x * 2 }},000</td>
                <td>{{ x }}782387</td>
                <td>Project {{ x }}</td>
                <td>{{ x * 3 }} year(S)</td>
                <td>
                  Frequency
                </td>
                <td>{{ x * 3 }} year(S)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "@/assets/admin/styles/new-table.css";

export default {
  name: "AdminPlanIncomeTransactions",

  metaInfo: {
    title: "Myyinvest - Plan > Income Transactions (Admin)",
    titleTemplate: null
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
  background-color: #d62929;
}

.table-header {
  box-shadow: var(--myyinvest-red) 2px 0px 4px 0px;
  position: sticky !important;
  top: 0px;
  background-color: white;
  color: #c10000;
  border: 2px solid var(--myyinvest-red) !important;
}
</style>
