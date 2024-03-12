<script setup lang="ts">
interface ButtonProps {
  modelValue: string | number;
  label: string;
  placeholder: string;
}

withDefaults(defineProps<ButtonProps>(), {
  label: "",
  placeholder: "",
});
</script>

<template>
  <div class="input-wrapper">
    <label for="">{{ label }}</label>
    <input type="text" class="base-textfield" :placeholder />
    <span></span>
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

.base-textfield {
  color: #111827;

  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 500;

  padding: 0.5rem 0.75rem;

  border: 1px solid #d1d5db;
  border-radius: 0.625rem;
}

.base-textfield:focus {
  outline-color: #fc6c4c;
}

.base-textfield::placeholder {
  color: #9ca3af;

  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 400;
}

label {
  color: #111827;

  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 500;

  margin-bottom: 0.5rem;
}
</style>
