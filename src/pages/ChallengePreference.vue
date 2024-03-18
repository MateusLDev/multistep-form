<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "../components/Button.vue";
import BaseCheckbox from "../components/BaseCheckbox.vue";

import { useStepsDataStore } from "../store/index.ts";

const store = useStepsDataStore();

const challengePreference = ref(...[store.steps.challengePreference]);
</script>

<template>
  <div class="personal-info-wrapper">
    <form>
      <BaseCheckbox v-model="challengePreference" label="HTML/CSS/JS" />
      <BaseCheckbox v-model="challengePreference" label="ReactJs" />
      <BaseCheckbox v-model="challengePreference" label="AngularJs" />
      <BaseCheckbox v-model="challengePreference" label="Vue.js" />
    </form>

    <div class="multistep-actions justify-space-between">
      <BaseButton variant="secondary" @click="store.goBack()"
        >Go back</BaseButton
      >
      <BaseButton
        variant="primary"
        @click="store.nextStep('Review', { challengePreference })"
        >Next step</BaseButton
      >
    </div>
  </div>
</template>

<style scoped>
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.5rem;
}
</style>
