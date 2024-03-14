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
    {
      path: "/skills",
      name: "SkillLevel",
      component: () => import("../pages/SkillLevel.vue"),
      meta: {
        pageName: "Skill Level",
        pageDescription:
          "Please tell us about your skill level in frontend development.",
      },
    },
  ],
});

export default router;
