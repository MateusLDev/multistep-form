<script setup lang="ts">
import { ref, onMounted } from "vue";

interface ButtonProps {
  /** The Select v-model */
  modelValue: string | undefined;
  /** The select label */
  label: string;
  /** The Select icon name */
  icon: string;
}

type SelectEmits = {
  [key: string]: any;
  /** Fired when Select is clicked */
  "update:modelValue": string;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  label: "",
  icon: "",
});

defineEmits<SelectEmits>();

const imgUrl = ref("");

const importIcon = async () => import(`../assets/icons/icon-${props.icon}.svg`);

onMounted(async () => {
  imgUrl.value = await importIcon();
});
</script>

<template>
  <div
    class="base-select"
    @click="$emit('update:modelValue', label)"
    :class="{ selected: modelValue === label }"
  >
    <component :is="imgUrl" class="select-icon"> </component>
    <label>{{ label }}</label>
  </div>
</template>

<style scoped>
.base-select {
  display: flex;
  align-items: center;

  padding: 1.125rem 1.125rem;

  border: 1px solid #d1d5db;
  border-radius: 0.625rem;

  cursor: pointer;
}

.base-select:hover {
  border-color: #fc6c4c;
}

.selected {
  border: 2px solid #fc6c4c;
}

.select-icon {
  margin-right: 1rem;
}

label {
  color: #111827;

  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 500;

  cursor: pointer;
}
</style>
