<script setup lang="ts">
const { items, columns } = defineProps<{
  items: any[];
  columns?: number;
}>();
</script>

<template>
  <ul
    class="grid grid-cols-1 gap-4 py-4 lg:grid-cols-2 lg:gap-16 lg:p-4"
    :class="{ 'grid-cols-2 text-left': columns === 2 }"
  >
    <li
      :class="{
        'mx-auto': items.length === 1,
        'border-b pb-4 dark:border-neutral-700 md:border-none': columns === 1,
      }"
      v-for="item in items"
      :key="item.name.es"
    >
      <div class="flex items-center justify-between gap-4 md:flex-col md:items-stretch md:gap-2">
        <section>
          <h4 class="text-lg font-bold">
            {{ item.name.es }}
          </h4>

          <p v-if="item.description" class="text-gray-600 dark:text-gray-400">
            {{ item.description.es }}
          </p>
        </section>
        <div class="flex justify-end gap-2">
          <p class="font-bold dark:text-gray-100" :class="{ 'text-black': !item.description }">
            <span v-if="item.prices.length"
              >{{ `$${item.prices[0]}` }}<span v-if="item.prices[1]">/{{ `$${item.prices[1]}` }}</span></span
            >
            <span v-else>Precio varía</span>
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>
