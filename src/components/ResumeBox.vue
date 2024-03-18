<script setup lang="ts">

interface ResumeProps {
  label: string;
  value: string;
}

withDefaults(defineProps<ResumeProps>(), {
  label: "",
  value: ""
});

</script>

<template>
  <div class="resume-box">
  <span class="resume-label">{{ label }}</span>
  <p class="resume-value">{{ value }}</p>
  </div>
</template>

<style scoped>
.resume-box {
  padding: 1rem 0.875rem;
  background-color: #E5E7EB;
  border-radius: 0.8rem;

  font-family: "Poppins";
}

.resume-label {
  color: #4B5563;
  font-size: 0.75rem;
}

.resume-value {
  color: #111827;
  font-size: 0.75rem;
  font-weight: 600;
}
</style>
