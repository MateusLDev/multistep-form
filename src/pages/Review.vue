<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "../components/Button.vue";
import ResumeBox from "../components/ResumeBox.vue";

import { useStepsDataStore } from "../store/index.ts";

const store = useStepsDataStore();
</script>

<template>
  <div class="personal-info-wrapper">
    <div class="resume-wrapper">
      <ResumeBox label="Full Name" :value="store.steps.fullName"/>
      <ResumeBox label="Email" :value="store.steps.email"/>
      <ResumeBox label="Phone Number" :value="store.steps.phone"/>
      <ResumeBox label="Portfolio/GitHub Link" :value="store.steps.portfolioLink"/>
      <ResumeBox label="Skill Level" :value="store.steps.skillLevel"/>
      <ResumeBox label="Challenge Preference" :value="store.steps.challengePreference"/>
    </div>

    <div class="multistep-actions justify-space-between">
      <BaseButton variant="secondary" @click="store.goBack()"
        >Go back</BaseButton
      >
      <BaseButton
        variant="primary"
        @click="store.nextStep('ChallengePreference')"
        >Next step</BaseButton
      >
    </div>
  </div>
</template>

<style scoped>
.resume-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.5rem;
}
</style>
