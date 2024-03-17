<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="page-multistep-wrapper">
    <div class="page-header">
      <h1 class="page-title">Join our Community of Developers</h1>
      <p class="page-description">
        To join our community and participate in frontend challenges. Please
        fill out the following form.
      </p>
    </div>

    <div class="multistep-wrapper">
      <div class="multistep-stepper">
        
      </div>

      <div class="multistep-body">
        <h2 class="multistep-title">{{ route.meta.pageName }}</h2>
        <p class="multistep-description">{{ route.meta.pageDescription }}</p>

        <div class="multistep-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-multistep-wrapper {
  max-width: 640px;
}

.page-header {
  text-align: center;
  margin: 0 1rem 2rem;
}

.page-title {
  color: #111827;
  font-family: "Merriweather";
  font-size: 2rem;
  font-weight: 900;

  margin-bottom: 0.875rem;
}

.page-description {
  color: #111827;
  font-family: "Poppins";
  font-size: 1.125rem;
  text-align: center;
  font-weight: 400;
}

.multistep-wrapper {
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem 1.875rem;

  -webkit-box-shadow: 10px 10px 0px 0px rgba(250, 181, 100, 0.1);
  -moz-box-shadow: 10px 10px 0px 0px rgba(250, 181, 100, 0.1);
  box-shadow: 10px 10px 0px 0px rgba(250, 181, 100, 0.1);
}

.multistep-title {
  color: #111827;

  font-family: "Poppins";
  font-size: 1.5rem;
  font-weight: 500;
}

.multistep-title {
  color: #111827;

  font-family: "Poppins";
  font-size: 1.5rem;
  font-weight: 500;

  margin-bottom: 0.375rem;
}

.multistep-description {
  color: #6b7280;

  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 400;
}

.multistep-body {
  border-top: 1px solid #E5E7EB;
  

  padding-top: 1.75rem;
}

.multistep-content {
  margin-top: 1.5rem;
}

.multistep-actions {
  margin-top: 2rem;
}
</style>
