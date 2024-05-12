<script setup lang="ts">
import { restInfo } from '@/utils/restInfo';

const { logo } = restInfo;
</script>

<template>
  <NuxtLink to="/menu" class="flex items-center gap-2 rounded-lg">
    <img :src="logo" alt="Restaurant logo" class="w-32" />
  </NuxtLink>
</template>
