<template>
  <div>
    <section class="section-wrap">
      <p class="section-title">Total number of investors</p>
      <div class="custom-card" style="overflow: hidden !important">
        <div class="row">
          <div class="mb-3 col-md-4">
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
          </div>
          <div class="mb-3 col-md-4">
            <div class="card">
              <div class="d-flex justify-content-between">
                <span class="text-mute">Total Transactions</span>
              </div>
              <h5 class="card-value">100,000</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-wrap" v-for="(info, index) in transactionView" :key="index">
      <p class="section-title">{{ info.topic }}</p>

      <div class="chart-group" v-for="(detail, index) in info.chart" :key="index">
        <div :class="detail.classname">
          <div class="subject-title">{{ detail.title }}</div>
          <div class="chart"></div>
          <div class="value">{{ detail.value }}%</div>
        </div>
      </div>
    </section>
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
      transactionView
    };
  }
};
</script>

<style scoped>
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
