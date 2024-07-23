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
      :key="item.name"
    >
      <div class="flex items-center justify-between gap-4 md:flex-col md:items-stretch md:gap-2">
        <section>
          <h4 class="text-lg font-bold">
            {{ item.name }}
          </h4>

          <p v-if="item.description" class="text-gray-600 dark:text-gray-400">
            {{ item.description }}
          </p>
        </section>
        <div class="flex justify-end gap-2">
          <span v-if="item.price > 0" class="font-bold">{{ formatCurrenty(item.price) }}</span>
          <div v-else>
            <div v-for="variant in item.variants" class="flex gap-2 justify-between font-bold">
              <span class="text-primary">{{ variant.name }}</span>
              <span>{{ formatCurrenty(variant.price) }}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
