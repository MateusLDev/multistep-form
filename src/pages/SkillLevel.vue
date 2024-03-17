<script setup lang="ts">
import BaseButton from "../components/Button.vue";
import BaseSelect from "../components/BaseSelect.vue";
</script>

<template>
  <div class="personal-info-wrapper">
    <form>
      <BaseSelect label="Beginner" icon="beginner" />
      <BaseSelect label="Intermediate" icon="intermediate" />
      <BaseSelect label="Advanced" icon="advanced" />
      <BaseSelect label="Expert" icon="Expert" />
    </form>
    
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
