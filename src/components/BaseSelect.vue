<script setup lang="ts">

interface ButtonProps {
  modelValue: string | number;
  label: string;
  icon: string;
  placeholder: string;
}

withDefaults(defineProps<ButtonProps>(), {
  label: "",
  placeholder: "",
  icon: "",
});
</script>

<template>
  <div class="base-select">
    <!-- src="../assets/icons/icon-advanced.svg" -->
    <img
      :src="'/assets/icons/icon-' + icon + '.svg'"
      alt=""
      class="select-icon"
    />
    <label>{{ label }}</label>
  </div>
</template>

<style scoped>
.base-select {
  display: flex;
  align-items: center;

  padding: 1.125rem;

  border: 1px solid #d1d5db;
  border-radius: 0.625rem;

  cursor: pointer;
}

.base-select:hover {
  border-color: #fc6c4c;
}

.select-icon {
  margin-right: 1rem;
}

label {
  color: #111827;

  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 500;

  margin-bottom: 0.5rem;
  cursor: pointer;
}
</style>
