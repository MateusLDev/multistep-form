<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "../components/Button.vue";
import BaseSelect from "../components/BaseSelect.vue";

import { useStepsDataStore } from "../store/index.ts";

const store = useStepsDataStore();

const skillLevel = ref(...[store.steps.skillLevel]);
</script>

<template>
  <div class="personal-info-wrapper">
    <form>
      <BaseSelect v-model="skillLevel" label="Beginner" icon="beginner" />
      <BaseSelect
        v-model="skillLevel"
        label="Intermediate"
        icon="intermediate"
      />
      <BaseSelect v-model="skillLevel" label="Advanced" icon="advanced" />
      <BaseSelect v-model="skillLevel" label="Expert" icon="expert" />
    </form>

    <div class="multistep-actions justify-space-between">
      <BaseButton variant="secondary" @click="store.goBack()"
        >Go back</BaseButton
      >
      <BaseButton
        variant="primary"
        @click="store.nextStep('ChallengePreference', { skillLevel })"
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
