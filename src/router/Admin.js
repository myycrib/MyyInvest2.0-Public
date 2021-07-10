import auth from "./middleware/auth";
export default [
  {
    path: "/admin",
    component: () => import("@/views/admin/index.vue")
    // meta: {
    //   layout: "TheAdminLayout"
    // },
    // children: [
    //   {
    //     path: "view-insights",
    //     name: "view-insight",
    //     component: () => import("@/views/admin/ViewInsights.vue")
    //   }
    // ]
  },
  {
    path: "/admin/statistics",
    name: "AdminStatistics",
    component: () => import("@/views/admin/AdminStatistics.vue"),
    meta: {
      layout: "TheAdminLayout"
    }
  },
  {
    path: "/admin/plans",
    name: "AdminPlans",
    component: () => import("@/views/admin/AdminPlans.vue"),
    meta: {
      layout: "TheAdminLayout"
    }
  },
  {
    path: "/admin/plans/add",
    name: "AdminPlanAdd",
    component: () => import("@/views/admin/AdminPlanAdd.vue"),
    meta: {
      layout: "TheAdminLayout"
    }
  },
  {
    path: "/admin/plans/income",
    name: "AdminPlanIncome",
    component: () => import("@/views/admin/AdminPlanIncome.vue"),
    meta: {
      layout: "TheAdminLayout"
    }
  },
  {
    path: "/admin/plans/rental",
    name: "AdminPlanRental",
    component: () => import("@/views/admin/AdminPlanRental.vue"),
    meta: {
      layout: "TheAdminLayout"
    }
  },
  {
    path: "/admin/plans/special",
    name: "AdminPlanSpecial",
    component: () => import("@/views/admin/AdminPlanSpecial.vue"),
    meta: {
      layout: "TheAdminLayout"
    }
  },
  {
    path: "/admin/view-insights",
    name: "ViewInsights",
    component: () => import("@/views/admin/ViewInsights.vue")
    // meta: {
    //   layout: "TheAdminLayout"
    // }
  },
  {
    path: "/admin/add-insights",
    name: "AddInsights",
    component: () => import("@/views/admin/AddInsights.vue"),
    meta: {
      middleware: [auth]
    },
  },
  {
    path: "/admin/edit-insight/:id",
    name: "AddInsights",
    component: () => import("@/views/admin/AddInsights.vue")
  },
  {
    path: "/admin/view-insight/:id",
    name: "AddInsights",
    component: () => import("@/views/admin/AddInsights.vue")
  },
  {
    path: "/admin/view-faqs",
    name: "ViewFaqs",
    component: () => import("@/views/admin/ViewFaqs.vue")
  },
  {
    path: "/admin/add-faqs",
    name: "AddFaqs",
    component: () => import("@/views/admin/AddFaqs.vue")
  },
  {
    path: "/admin/all-users",
    name: "AllUsers",
    component: () => import("@/views/admin/AllUsers.vue")
  },
  {
    path: "/admin/users/:id",
    name: "ViewUser",
    component: () => import("@/views/admin/ViewUser.vue"),
    props: true
    // props: {
    //   default: true,
    //   // function mode, more about it below
    //   sidebar: route => ({ search: route.query.q })
    // }
  },
  {
    path: "/admin/users/:id/transactions",
    name: "AdminUsersTransactions",
    component: () => import("@/views/admin/AdminUsersTransactions.vue"),
    props: true
  },
  {
    path: "/admin/finance/transactions",
    name: "AdminFinanceTransactions",
    component: () => import("@/views/admin/AdminFinanceTransactions.vue")
  },
  {
    path: "/admin/finance/wallet",
    name: "AdminFinanceWallet",
    component: () => import("@/views/admin/AdminFinanceWallet.vue")
  },
  {
    path: "/admin/finance/bank-accounts",
    name: "AdminFinanceBank",
    component: () => import("@/views/admin/AdminFinanceBank.vue")
  },
  {
    path: "/admin/view-notifications",
    name: "ViewNotifications",
    component: () => import("@/views/admin/ViewAdminNotifications.vue")
  },
  {
    path: "/admin/add-notifications",
    name: "AddNotifications",
    component: () => import("@/views/admin/AddAdminNotifications.vue")
  },
  {
    path: "/admin/newsletters",
    name: "AdminNewsletters",
    component: () => import("@/views/admin/AdminNewsletters.vue")
  }
];
