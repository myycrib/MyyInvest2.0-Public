<template>
  <the-admin-layout>
    <section class="main-wrapper">
      <div>
        <p class="main-title" style="color:#D62929; font-weight: 600">Overview</p>
        <hr />
        <div class="custom-card" style="overflow: hidden !important">
          <div class="row">
            <div class="mb-3 col-md-4" v-for="item in cards" :key="item.title">
              <div class="card">
                <div class="d-flex justify-content-between">
                  <span class="text-mute">{{ item.title }}</span>
                  <img style="width:25px; height:25px; object-fit:contain;" :src="item.icon" alt="User Logo" class="logo" />
                </div>
                <h5>{{ item.value }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 class="mt-3">Latest Users</h5>
      <div id="style-" class="mt-3 table-responsive">
        <table class="table table-bordered table-hover">
          <thead class="table-header">
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">Full Name</th>
              <th scope="col">Tokens</th>
              <th scope="col">Project</th>
              <th scope="col">Project Duration</th>
              <th scope="col">Frequency Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="x in 20" :key="x">
              <td>{{ zeroPrefix(x) }}{{ x }}</td>
              <td>Valentine</td>
              <td>Otto</td>
              <td>
                09051843790
              </td>
              <td>17th Feb. 2021</td>
              <td>17th Feb. 2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </the-admin-layout>
</template>

<script>
export default {
  name: "AdminOverview",

  metaInfo: {
    title: "Myyinvest",
    titleTemplate: "%s - Overview (Admin)",
    htmlAttrs: {
      lang: "en",
      amp: true
    }
  },
  data() {
    return {
      cards: [
        {
          title: "No of Users",
          icon: require("@/assets/admin/icons/users.png"),
          value: "50,000"
        },
        {
          title: "No of Newsletters",
          icon: require("@/assets/admin/icons/envelope.svg"),
          value: "10,000"
        },
        {
          title: "Total Transactions",
          icon: require("@/assets/admin/icons/money.svg"),
          value: "100,000"
        },
        {
          title: "No of Sent Notifications",
          icon: require("@/assets/admin/icons/bell.svg"),
          value: "10,000"
        },
        {
          title: "No of Uploaded",
          icon: require("@/assets/admin/icons/upload.svg"),
          value: "10,000"
        }
      ]
    };
  },
  methods: {
    zeroPrefix(num) {
      if (num < 10) {
        return 0;
      } else return "";
    },

    viewUser(id) {
      this.$router.push("/admin/users/" + id);
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
#style-2 {
  position: relative;
}

.table-header {
  box-shadow: var(--myyinvest-red) 2px 0px 4px 0px;
  position: sticky !important;
  /* top: -10px !important; */
  position: -webkit-sticky !important;
  /* font-size: var(--font-md) !important; */
  font-weight: 200 !important;
  color: var(--myyinvest-red);
  border: 2px solid var(--myyinvest-red);
  background-color: var(--myyinvest-white);
}
.table-hover tbody tr:hover {
  box-shadow: 2px 2px 6px #c5baba, -2px -2px 6px #ffffff !important;
  /* box-shadow: 2px 2px 6px #bebebe, -2px -2px 6px #ffffff; */
}

.card {
  padding: var(--base-size);
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 0 #bebebe, -1px -1px 3px 0 #ffffff;
  box-shadow: 0px 8.67606px 8.67606px rgba(0, 0, 0, 0.05);
}

.custom-card .card:hover {
  transform: scale(1.02);
  box-shadow: 2px 2px 6px 0 #bebebe, -2px -2px 6px 0 #ffffff;
}

.card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
}

.card-value {
  font-size: var(--font-xxx) !important;
}

/* .new-table {
  margin-top: var(--base-size);
}

.new-table p.title {
  font-size: var(--font-lg) !important;
  color: var(--myyinvest-black);
  font-weight: 600;
}

.new-table .table-title {
  position: sticky;
  position: -webkit-sticky;
  top: -10px !important;
  font-size: var(--font-md) !important;
  font-weight: 600;
  color: var(--myyinvest-red);
  border: 2px solid var(--myyinvest-red);
  background-color: var(--myyinvest-white);
}

.new-table .table-row {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
}

.new-table .table-row:hover {
  box-shadow: 2px 2px 6px #bebebe, -2px -2px 6px #ffffff;
} */

/* .new-table .table-row div {
  width: 20%;
  text-align: center;
}

.table-row div.sn {
  width: 8%;
}

.table-row div.tokens {
  width: 12%;
} */
</style>
