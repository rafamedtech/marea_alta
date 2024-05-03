<script setup lang="ts">
interface Props {
  category: Category | CategoryOutline;
  titleSize?: string;
  link?: boolean;
  rounded?: boolean;
  wide?: boolean;
}

const { category, titleSize, link, rounded = false } = defineProps<Props>();

const { name, cover, slug } = toRefs(category);

const store = useStore();
const { language } = storeToRefs(store);
const categoryTitle = computed(() => (language.value === 'es' ? name.value.es : name.value.en));
</script>

<template>
  <NuxtLink
    :to="`/menu/${slug}`"
    class="w-full transition-all group hover:scale-95 md:hover:scale-100 md:hover:ring-primary focus:scale-95 md:focus:scale-100 focus:ring-4 focus:ring-primary"
    :class="{ 'pointer-events-none': !link, 'focus:rounded-xl rounded-xl': rounded }"
  >
    <UCard
      :ui="{
        base: 'relative w-full',
        body: { padding: 'px-0 py-0 sm:p-0' },
        rounded: rounded ? 'rounded-xl' : 'rounded-none',
      }"
      class="overflow-hidden"
    >
      <img
        :src="cover"
        class="h-36 w-full min-w-full object-cover brightness-75 transition-all md:group-focus:scale-110 md:group-hover:scale-110 dark:brightness-50 md:h-52"
        :class="{ 'rounded-xl': rounded }"
        alt=""
      />
      <section
        class="absolute bottom-0 z-10 flex h-1/3 w-full items-center bg-gradient-to-t from-black to-transparent pb-6 pl-4"
        :class="{ 'rounded-b-xl': rounded }"
      >
        <span
          class="font-montserrat text-2xl text-gray-100 lg:text-3xl"
          :class="{
            'text-3xl lg:text-4xl': titleSize === 'large',
          }"
        >
          {{ categoryTitle }}
        </span>
      </section>
    </UCard>
  </NuxtLink>
</template>
