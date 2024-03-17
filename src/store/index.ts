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
      this.steps = { ...this.steps, ...data};
      this.$router.push({ name: routeName });
      console.log(this.steps)
    },
    goBack() {
      this.$router.go(-1);
    },
  },
});
