<template>
  <div>
    <section class="section-wrap">
      <div class="custom-card" style="overflow: hidden !important">
        <div class="row">
          <!-- <div class="mb-3 col-md-4">
            <div class="card">
              <div class="d-flex justify-content-between">
                <span class="text-mute">Income Plan</span>
              </div>
              <h5 class="card-value">10,000</h5>
            </div>
          </div>
          <div class="mb-3 col-md-4">
            <div class="card">
              <div class="d-flex justify-content-between">
                <span class="text-mute">Rental Plan</span>
              </div>
              <h5 class="card-value">200,000</h5>
            </div>
          </div> -->
          <div class="mb-3 col-md-12">
            <div class="card">
              <div class="d-flex justify-content-between">
                <span class="text-mute">Total Capital Invested</span>
              </div>
              <h5 class="card-value">100,000</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-if="!flipView">
      <section class="section-wrap" v-for="(info, index) in transactionView" :key="index">
        <p class="section-title">{{ info.topic }}</p>

        <div class="mb-3 row" v-for="(detail, index) in info.chart" :key="index">
          <div class="col-2 col-lg-2">{{ detail.title }}</div>
          <div class="col-6 col-lg-8">
            <div class="chart" :style="{ width: detail.value + '%' }"><span style="visibility: hidden">l</span></div>
          </div>
          <div class="col-2 col-lg-1">{{ detail.value }}%</div>
          <div class="col-2 col-lg-1" style="cursor: pointer">
            <svg @click="flipView = !flipView" width="17" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#0baa12">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M16.9 5.082C15.347 2.05 12.27 0 8.75 0 5.229 0 2.152 2.052.6 5.082a.925.925 0 0 0 0 .836C2.153 8.948 5.229 11 8.75 11c3.52 0 6.598-2.052 8.15-5.082a.925.925 0 0 0 0-.836zM8.75 9.625c-2.826 0-5.417-1.576-6.816-4.125 1.399-2.55 3.99-4.125 6.816-4.125 2.826 0 5.417 1.576 6.816 4.125-1.4 2.549-3.99 4.125-6.816 4.125zm0-7.333a3.158 3.158 0 0 0-.895.143c.134.236.206.502.208.773 0 .886-.72 1.605-1.605 1.605a1.591 1.591 0 0 1-.773-.208A3.2 3.2 0 1 0 8.75 2.292z"
                />
              </svg>
            </svg>
          </div>
        </div>
      </section>
    </div>
    <div v-else id="style-2" class="table-responsive">
      <div class="m-2">
        <svg style="width: 50px; height: 30px; cursor: pointer" @click="flipView = !flipView" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path
            fill="red"
            d="M 11 0 C 10.488 0 9.9759375 0.1954375 9.5859375 0.5859375 L 0.5859375 9.5859375 C -0.1950625 10.366937 -0.1950625 11.633062 0.5859375 12.414062 L 9.5859375 21.414062 C 9.9759375 21.805063 10.488 22 11 22 C 11.512 22 12.024062 21.805063 12.414062 21.414062 C 13.195062 20.633063 13.195063 19.366937 12.414062 18.585938 L 6.828125 13 L 32 13 C 39.721 13 46 19.28 46 27 C 46 34.721 39.721 41 32 41 L 18 41 L 17 41 L 0 41 L 0 45 L 17 45 L 18 45 L 33 45 L 33 44.949219 C 42.458993 44.425652 50 36.587491 50 27 C 50 17.587873 42.734578 9.8537846 33.519531 9.078125 C 33.352599 9.0329042 33.181176 9 33 9 L 6.828125 9 L 12.414062 3.4140625 C 13.195062 2.6330625 13.195063 1.3669375 12.414062 0.5859375 C 12.024062 0.1954375 11.512 0 11 0 z"
          ></path>
        </svg>
      </div>
      <table class="table table-bordered table-hover">
        <thead class="table-header">
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Amount Invested</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="x in 20" :key="x">
            <th scope="row">{{ zeroPrefix(x) }}{{ x }}</th>
            <td>voffiah@gmail.com</td>
            <td>09051843790</td>
            <td>10,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import transactionView from "@/utils/viewUtils/adminStatistics/transactionHelper.js";

export default {
  name: "AdminStatsTransaction",

  metaInfo: {
    title: "Myyinvest - Statistics > Transactions (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      transactionView,
      flipView: false
    };
  },
  methods: {
    zeroPrefix(num) {
      if (num < 10) {
        return 0;
      } else return "";
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
.custom-card .card {
  padding: var(--base-size);
  background: #ffffff;
  z-index: -1 !important;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 0 #bebebe, -1px -1px 3px 0 #ffffff;
  box-shadow: 0px 8.67606px 8.67606px rgba(0, 0, 0, 0.05);
}
.custom-card {
  /* z-index: auto; */
  cursor: pointer;
}
.custom-card .card:hover {
  transform: scale(1.02);
  z-index: auto !important;
  box-shadow: 2px 2px 6px 0 #bebebe, -2px -2px 6px 0 #ffffff;
}
.investor-card {
  width: calc(100% / 4);
}

.investor-card:not(:last-child) {
  margin-right: var(--base-size);
}

.investor-card:hover {
  padding: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  transform: scale(1.02);
  z-index: auto;
  box-shadow: 2px 2px 6px 0 #bebebe, -2px -2px 6px 0 #ffffff;
}

.card-title {
  margin-bottom: 0;
  color: gray;
}

.card-value {
  font-weight: 500 !important;
  color: var(--myyinvest-red);
}
</style>
