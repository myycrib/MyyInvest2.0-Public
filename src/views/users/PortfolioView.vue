<template>
  <div class="portfolio-wrapper">
    <div class="row">
      <div class="mb-5 text-center col-md-2">
        <div class="row">
          <div class="col-6 col-lg-12">
            <button @click="showModal" type="button" style="box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.25); border-radius: 10px" class="listing-dtl__btn">Withdraw</button>
          </div>
          <div class="mt-md-3 col-6 col-lg-12">
            <button @click="addMoneyModal = !addMoneyModal" type="button" style="box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.25); border-radius: 10px" class="listing-dtl__btn">Add Money</button>
          </div>
        </div>
      </div>
      <div class="col-md-10">
        <div class="car chart-wrapper inv-plan__graph-containe">
          <line-chart :legend="true" :colors="['#b00']" :data="{ '2021-01-01': 1000, '2021-01-07': 6, '2021-01-14': 700 }"></line-chart>
        </div>
      </div>
    </div>
    <div class="mt-5 row">
      <div class="mx-auto col-md-10">
        <h6 class="text-uppercase font-weight-bold">Investment Plans</h6>
        <div class="p-3 mb-2 card">
          <span>Type Of Plan</span>
        </div>
        <div class="p-3 mb-2 card">
          <div class="justify-content-between d-flex">
            <span>Expected Payout</span>
            <span style="color: #116c09; font-weight: bold">₦2,5000</span>
          </div>
        </div>
        <div class="p-3 mb-2 card">
          <div class="justify-content-between d-flex">
            <span>Current Accumulated Returns</span>
            <span style="color: #116c09; font-weight: bold">₦66,5000</span>
          </div>
        </div>
        <div class="p-3 mb-2 card">
          <div class="justify-content-between d-flex">
            <span>Amount Invested</span>
            <span style="color: #116c09; font-weight: bold">₦200,000</span>
          </div>
        </div>
        <div class="p-3 mb-2 card">
          <div class="justify-content-between d-flex">
            <span>Number Of Tokens</span>
            <span style="color: #116c09; font-weight: bold">+40</span>
          </div>
        </div>
        <div class="p-3 mb-2 card">
          <div class="justify-content-between d-flex">
            <span>ROI</span>
            <span style="color: #116c09; font-weight: bold"></span>
          </div>
        </div>
        <div class="p-3 mb-2 card">
          <div class="justify-content-between d-flex">
            <span>Holding Period</span>
            <span style="color: #116c09; font-weight: bold"></span>
          </div>
        </div>
        <div class="p-3 mb-2 card">
          <div class="justify-content-between d-flex">
            <span>Start Date</span>
            <span style="color: #116c09; font-weight: bold">21 jan 2021</span>
          </div>
        </div>
        <div class="p-3 mb-2 card">
          <div class="justify-content-between d-flex">
            <span>Maturity Date</span>
            <span style="color: #116c09; font-weight: bold">21 jan 2021</span>
          </div>
        </div>
      </div>
    </div>
    <Modal :config="{ isVisible: isModalVisible }" show-cancel @close-modal="isModalVisible = !isModalVisible">
      <template v-if="withdrawalStep === 1">
        <div class="lst-modal">
          <h6 class="lst-card__title">Withdraw to Wallet</h6>
          <p class="text-center lst-card-text">Withdrawing from your Plan before it’s Maturity date comes with not reture of investment. We charge this free to help you with discipline</p>
          <div class="mt-5 lst-card-buttons justify-content-around d-flex">
            <button type="button" style="box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.25); border-radius: 10px" class="listing-dtl__btn">Cancel</button>

            <button type="button" @click="nextSection()" style="color: red; box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.25); border-radius: 10px; background: #ffffff" class="listing-dtl__btn">
              Continue
            </button>
          </div>
        </div>
      </template>
      <template v-if="withdrawalStep === 2">
        <div class="lst-modal">
          <h6 class="lst-card__title">Withdraw to Wallet</h6>
          <div class="lst-modal__input-container">
            <MainInput type="number" label="Tokens" v-model.number="tokens" class="lst-modal__input" />
            <MainInput type="number" label="Amount (N)" v-model="amount" class="lst-modal__input" />
          </div>
          <div class="mt-3 lst-card-buttons justify-content-around d-flex">
            <button type="button" @click="nextSection()" style="box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.25); border-radius: 10px" class="listing-dtl__btn">Continue</button>
          </div>
        </div>
      </template>
      <template v-if="withdrawalStep === 3">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="previousSection()" />
        <div class="lst-modal">
          <div class="text-center">
            <h5 class="m-0 lst-card__title" style="border: none">Review</h5>
            <p class="m-0 font-weight-bold lst-card__title" style="border: none">₦5,000</p>
            <p class="text-sm">by 21 july 2021</p>
          </div>
          <div class="summary-details">
            <span>Amount to wallet</span>
            <span>₦50,000</span>
          </div>
          <div class="summary-details">
            <span>Number of tokens to Withdraw</span>
            <span>05</span>
          </div>
          <div class="summary-details">
            <span>Amount Left</span>
            <span>20000</span>
          </div>
          <div class="summary-details">
            <span>Number of tokens Left</span>
            <span>05</span>
          </div>
          <div class="mt-3 lst-card-buttons justify-content-around d-flex">
            <button @click="confirmWithdrawal" type="button" style="box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.25); border-radius: 10px" class="listing-dtl__btn">Confirm</button>
          </div>
        </div>
      </template>
    </Modal>
    <Modal :config="{ isVisible: addMoneyModal }" show-cancel @close-modal="addMoneyModal = !addMoneyModal">
      <template v-if="addMoneyStep === 1">
        <div class="lst-modal">
          <h6 class="lst-card__title">Income Plan</h6>
          <div class="lst-modal__input-container">
            <MainInput type="number" label="Tokens" v-model.number="tokens" class="lst-modal__input" />
            <MainInput type="number" label="Amount (N)" v-model="amount" class="lst-modal__input" />
          </div>
          <div class="mt-3 lst-card-buttons justify-content-around d-flex">
            <button type="button" @click="addMoneyNext()" style="box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.25); border-radius: 10px" class="listing-dtl__btn">Continue</button>
          </div>
        </div>
      </template>
      <template v-if="addMoneyStep === 2">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="addMoneyPrevious()" />
        <p class="text-center lst-modal__title">Payment Frequency</p>
        <div class="lst-modal__input-container">
          <button type="button" :class="getBtnClasses(isFreqSelected('ONE-OFF'))" @click="selectFrequency('ONE-OFF')">
            <span>one off</span>
            <MainIcon name="tooltip" size="sm" color="currentColor" />
          </button>
          <button type="button" :class="getBtnClasses(isFreqSelected('RECURRING'))" @click="selectFrequency('RECURRING')">
            <span>Recurring</span>
            <MainIcon name="tooltip" size="sm" color="currentColor" />
          </button>
        </div>
        <div class="lst-modal__text-container">
          <p class="lst-modal__text">
            {{ getfreqText }}
          </p>
          <!-- eslint-disable-next-line -->
          <MainInput v-show="isFreqSelected('RECURRING')" inputType="select" label="" v-model="freqValue" class="lst-modal__input" :options="freqOptions" />
          <p class="lst-modal__title">Investment Period</p>
          <p class="lst-modal__text lst-modal__text--lg">10 - 15 years</p>
          <p class="lst-modal__text">Returns: {{ invReturns }}</p>
        </div>
        <div class="text-center">
          <button type="button" class="lst-modal__btn" @click="addMoneyNext()">
            <span>continue</span>
            <MainIcon name="caret-right" size="xs" />
          </button>
        </div>
      </template>
      <template v-if="addMoneyStep === 3">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="addMoneyPrevious()" />
        <div class="lst-modal">
          <div class="text-center">
            <h5 class="m-0 lst-card__title" style="border: none">Review Plan</h5>
            <p class="text-sm">Income Plan</p>
            <p class="m-0 font-weight-bold lst-card__title" style="border: none">₦5,000</p>
            <p class="text-sm">by 21 july 2021</p>
          </div>
          <div class="summary-details">
            <span>Value of Tokens</span>
            <span>₦50,000</span>
          </div>
          <div class="summary-details">
            <span>Number of tokens</span>
            <span>05</span>
          </div>
          <div class="summary-details">
            <span>Payment Frequency</span>
            <span>ONE OFF</span>
          </div>
          <div class="summary-details">
            <span>Ownership Period <MainIcon name="tooltip" size="md" color="red" /></span>
            <span>6 Months</span>
          </div>
          <div class="summary-details">
            <span>Return on Investment <MainIcon name="tooltip" size="md" color="red" /></span>
            <span>14% - 28%</span>
          </div>
          <div class="mt-3 lst-card-buttons justify-content-around d-flex">
            <button @click="confirmWithdrawal" type="button" style="box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.25); border-radius: 10px" class="listing-dtl__btn"> 
              <span>Pay Now</span>
              <MainIcon name="caret-right" size="xs" />
            </button>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Shared/modal.vue";
import MainInput from "@/components/form/mainInput.vue";
import MainIcon from "@/components/Shared/mainIcon.vue";

export default {
  name: "PortforlioView",
  components: {
    Modal,
    MainInput,
    MainIcon,
  },
  data: () => ({
    isModalVisible: false,
    addMoneyModal: false,
    withdrawalStep: 1,
    addMoneyStep: 1,
    tokens: "",
    amount: "",
    paymentFrequency: "ONE-OFF",
    freqTexts: {
      "ONE-OFF": "This is the smallest amount you can start this plan for and you can always Invest More.",
      RECURRING: "This means that you’re Investing more than Once usually for 6 months to 12 months.",
    },
    freqOptions: [
      { key: "6 months", value: 6 },
      { key: "12 months", value: 12 },
    ],
    invPeriod: 6,
  }),
  methods: {
    isFreqSelected(freq) {
      return this.paymentFrequency === freq;
    },
    getBtnClasses(isActive) {
      return ["lst-modal__btn", "lst-modal__btn--max", { "lst-modal__btn--active": isActive }];
    },
    showModal() {
      this.isModalVisible = true;
    },
    addMoneyNext(val = 1) {
      this.addMoneyStep += val;
    },
    addMoneyPrevious(val = 1) {
      this.addMoneyStep -= val;
    },
    previousSection(val = 1) {
      this.withdrawalStep -= val;
    },
    nextSection(val = 1) {
      this.withdrawalStep += val;
    },
    confirmWithdrawal() {
      alert("Submitted");
    },
    selectFrequency(freq) {
      this.paymentFrequency = freq;
    },
  },
  computed: {
    getfreqText() {
      return this.freqTexts[this.paymentFrequency];
    },
    invReturns() {
      return this.invPeriod === 6 ? "14% - 28%" : "25% - 45%";
    },
  },
};
</script>

<style scope>
.chart-wrapper {
  background: linear-gradient(73.72deg, rgba(193, 0, 0, 0.54) 21.21%, rgba(0, 185, 225, 0.27) 98.36%);
  box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.25);
  border-radius: 64px;
  padding: 1.5em;
}
.card {
  background: #ffffff;
  box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.25);
}
.lst-card__title {
  border-bottom: 1px solid var(--main-red);
}
.lst-card-text {
  font-size: 0.9em !important;
}
.summary-details {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  margin-bottom: 0.8em;
}
.summary-details span {
  padding-bottom: 0.8em;
}
</style>