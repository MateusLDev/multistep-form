<script setup lang="ts">
import { ref, watch } from "vue";

interface CheckboxProps {
  modelValue: string | undefined;
  label: string;
}

type CheckboxEmits = {
  [key: string]: any;
  "update:modelValue": string;
};

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: "",
});

defineEmits<CheckboxEmits>();

const inputModel = ref(...[props.modelValue]);

watch(
  () => [props.modelValue],
  () => (inputModel.value = props.modelValue)
);
</script>

<template>
  <label
    class="base-checkbox"
    :class="{ selected: modelValue === label }"
    @click="$emit('update:modelValue', label)"
  >
    <input
      v-model="inputModel"
      type="checkbox"
      name="checkbox"
      :id="`checkbox-${label}`"
    />
    <span>{{ label }}</span>
  </label>
</template>

<style scoped>
.base-checkbox {
  display: flex;
  align-items: center;

  padding: 1.5rem 1.125rem;

  border: 1px solid #d1d5db;
  border-radius: 0.625rem;

  cursor: pointer;
}

.base-checkbox:hover {
  border-color: #fc6c4c;
}

.selected {
  border: 2px solid #fc6c4c;
}

span {
  color: #111827;

  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 500;

  cursor: pointer;
}

input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  margin-right: 1rem;

  color: #fff;
  border-radius: 0.375rem;
  border: 1px solid #111827;

  height: 20px;
  width: 20px;
}

input[type="checkbox"]:checked {
  background-color: #FC6C4C;
  border-color: #FC6C4C;
}

</style>
