<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "../components/Button.vue";
import BaseInput from "../components/BaseInput.vue";

import { useStepsDataStore } from "../store/index.ts";

const store = useStepsDataStore();

const fullName = ref(...[store.steps.fullName]);
const email = ref(...[store.steps.email]);
const phone = ref(...[store.steps.phone]);
const portfolioLink = ref(...[store.steps.portfolioLink]);
</script>

<template>
  <div class="personal-info-wrapper">
    <form>
      <BaseInput v-model="fullName" label="Full name" placeholder="John Doe" />
      <BaseInput
        v-model="email"
        label="Email Address"
        placeholder="name@email.com"
      />
      <BaseInput
        v-model="phone"
        label="Phone Number"
        placeholder="+91 1234567890"
      />
      <BaseInput
        v-model="portfolioLink"
        label="Portfolio/GitHub Link"
        placeholder="github.com/rishipurwar1"
      />
    </form>

    <div class="multistep-actions justify-end">
      <BaseButton
        variant="primary"
        @click="
          store.nextStep('SkillLevel', {
            fullName,
            email,
            phone,
            portfolioLink,
          })
        "
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
