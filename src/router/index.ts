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
    {
      path: "/challenge",
      name: "ChallengePreference",
      component: () => import("../pages/ChallengePreference.vue"),
      meta: {
        pageName: "Challenge Preference",
        pageDescription:
          "Please tell us which frontend challenges you would like to participate in.",
      },
    },
    {
      path: "/review",
      name: "Review",
      component: () => import("../pages/Review.vue"),
      meta: {
        pageName: "Review and Confirm",
        pageDescription:
          "Please review your information to make sure everything is accurate.",
      },
    },
  ],
});

export default router;
