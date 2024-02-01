<template>
  <div class="border border-slate-200 rounded-md grid grid-cols-3">
    <!-- Project -->
    <div class="border-r border-slate-200 flex flex-col gap-2">
      <BoilerplateSpringStarterProjectConfig />
    </div>
    <!-- Project Metadata -->
    <div class="border-r border-slate-200">
     <BoilerplateSpringStarterMetadataConfig/>
    </div>
    <!-- Entities -->
    <div>
      <BoilerplateSpringStarterDependency/>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
