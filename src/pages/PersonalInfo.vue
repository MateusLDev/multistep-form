<script setup lang="ts">
import BaseButton from "../components/Button.vue";
import BaseInput from "../components/BaseInput.vue";
</script>

<template>
  <div class="personal-info-wrapper">
    <form>
      <BaseInput label="Full name" placeholder="John Doe" />
      <BaseInput label="Email Address" placeholder="name@email.com" />
      <BaseInput label="Phone Number" placeholder="+91 1234567890" />
      <BaseInput
        label="Portfolio/GitHub Link"
        placeholder="github.com/rishipurwar1"
      />
    </form>
  </div>
</template>

<style scoped>
.personal-info-wrapper {
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.5rem;
}
</style>
