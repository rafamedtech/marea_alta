<script setup lang="ts">
const { items } = defineProps<{
  items: NavLink[] | NavLink[][];
}>();
</script>

<template>
  <section class="fixed min-h-screen w-1/6 bg-dark-strong px-4">
    <article class="flex min-w-0 justify-center py-4">
      <Logo />
    </article>
    <ClientOnly>
      <UVerticalNavigation
        :links="items"
        :ui="{
          active:
            'before:bg-gray-800 text-primary dark:text-primary border border-primary',
          inactive:
            'hover:text-white text-gray-400 hover:before:bg-gray-800/50 border border-transparent',
          icon: {
            active: 'text-primary dark:text-primary',
            inactive: '',
          },
        }"
      />
    </ClientOnly>
  </section>
</template>
