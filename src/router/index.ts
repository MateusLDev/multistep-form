import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/personal-info",
      name: "PersonalInfo",
      component: () => import("../pages/PersonalInfo.vue"),
      meta: {
        pageName: "Personal Information",
        pageDescription:
          "Please provide your personal details so we can get to know you better.",
      },
    },
  ],
});

export default router;
