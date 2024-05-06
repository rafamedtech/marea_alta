<script setup lang="ts">
const { items } = defineProps<{ items: NavLink[] | NavLink[][] }>();
</script>

<template>
  <UHorizontalNavigation
    :ui="{
      base: 'flex-col w-full ',
      container: 'justify-between w-full',
      inner: 'flex-1 hover:text-white',
      before: 'px-2',
      active: 'text-white  px-2 active:before:bg-gray-800 hover:before:bg-gray-800 focus:before:bg-gray-800',
      inactive: 'hover:text-white text-gray-400 hover:before:bg-gray-800/50',
      icon: { active: 'text-gray-200', inactive: 'text-gray-500' },
    }"
    :links="items"
    class="fixed bottom-0 z-[49] bg-black"
  />
</template>
