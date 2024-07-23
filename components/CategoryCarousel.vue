<script setup lang="ts">
interface Props {
  category: Category | CategoryOutline;
  titleSize?: string;
  link?: boolean;
  rounded?: boolean;
  wide?: boolean;
}

const { category, titleSize, link, rounded = false } = defineProps<Props>();

const { name, covers, slug } = toRefs(category);

const categoryTitle = computed(() => name.value);

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<template>
  <NuxtLink
    :to="`/menu/${slug}`"
    class="w-full transition-all group md:hover:ring-primary focus:ring-4 focus:ring-primary"
    :class="{ 'pointer-events-none': !link, 'focus:rounded-xl rounded-xl': rounded }"
  >
    <div class="relative">
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="covers"
        :ui="{ item: 'basis-full' }"
        class="overflow-hidden"
      >
        <img :src="item" class="w-full max-h-48 md:max-h-64 object-cover" draggable="false" />
      </UCarousel>
      <div class="bg-primary/75 absolute bottom-0 h-fit p-2">
        <h3
          class="text-2xl text-white dark:text-black"
          :class="{
            'text-3xl lg:text-4xl': titleSize === 'large',
          }"
        >
          {{ categoryTitle }}
        </h3>
      </div>
    </div>
  </NuxtLink>
</template>
