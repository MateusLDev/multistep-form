<script setup lang="ts">
interface ButtonProps {
  /** The button variant styles */
  variant: string;
}

type ButtonEmits = {
  [key: string]: any;
  /** Fired when button ins clicked */
  click: any[];
};

withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
});

defineEmits<ButtonEmits>();

defineSlots<{
  /** Button text content */
  default(): string;
}>();
</script>

<template>
  <button :class="['base-button', variant]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
.base-button {
  background-color: #fc6c4c;
  color: #fff;

  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 500;

  border-radius: 0.625rem;
  border: none;
  padding: 0.625rem 1.625rem;

  cursor: pointer;
}

.primary {
  background-color: #fc6c4c;
  color: #fff;
}

.secondary {
  background-color: #fff;
  color: #fc6c4c;
  border: 1px solid #fc6c4c;
}
</style>
