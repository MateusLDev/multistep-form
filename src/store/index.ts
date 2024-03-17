import { defineStore } from "pinia";
import { Steps } from "../types/index.ts";

export const useStepsDataStore = defineStore("stepsData", {
  state: () => {
    return {
      steps: {} as Steps,
    };
  },
  actions: {
    async nextStep(routeName: string, data: Partial<Steps>) {
      this.steps = data;
      this.$router.push({ name: routeName });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
});
