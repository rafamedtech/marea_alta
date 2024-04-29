<script setup lang="ts">
const { items, columns } = defineProps<{
  items: any[];
  columns?: number;
}>();
</script>

<template>
  <ul class="grid grid-cols-1 gap-4 py-4 lg:grid-cols-2 lg:p-4" :class="{ 'grid-cols-2 text-left': columns === 2 }">
    <li
      :class="{
        'mx-auto': items.length === 1,
        'border-b pb-4 dark:border-neutral-700 md:border-none': columns === 1,
      }"
      v-for="item in items"
      :key="item._id"
    >
      <div class="flex items-center justify-between gap-4 md:flex-col md:items-stretch md:gap-2">
        <section>
          <h4 class="text-base font-bold">
            {{ item.name }}
          </h4>

          <p v-if="item.description" class="text-gray-600 dark:text-gray-400">{{ item.description }}</p>
        </section>
        <div v-if="item.price" class="flex justify-end gap-2">
          <p class="font-bold dark:text-gray-100" :class="{ 'text-black': !item.description }" v-if="item.price">
            ${{ item.price }}
          </p>
        </div>
        <div v-if="item.variants">
          <div v-for="variant in item.variants" :key="variant._id" class="flex justify-between gap-2">
            <p :class="{ 'text-primary': item.description }">
              {{ variant.name }}
            </p>
            <p class="dark:text-base-100 font-bold">${{ variant.price }}</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
