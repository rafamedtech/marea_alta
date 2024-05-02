<script setup lang="ts">
import noItems from '@/assets/img/no-items.svg';

const store = useStore();
const { isLoading, language } = storeToRefs(store);

const { params } = useRoute();
const [slug] = params.slug;
// const { category, getCurrentCategory } = useMenu();
// await getCurrentCategory(slug);

// const currentCategory = category.value as Category;

const { data: menu } = await useFetch('/api/menu');
const currentCategory = menu.value?.find((category) => category.slug === slug) ?? ({} as Category);

const columns = ref(1);

onMounted(() => {
  isLoading.value = false;
});

useHead({
  title: currentCategory?.name.es,
  meta: [
    {
      name: 'description',
      content: 'Descripcion',
    },
  ],
});
</script>

<template>
  <main>
    <MainSection :loading="isLoading">
      <template #heading>
        <CategoryCard :category="currentCategory" rounded title-size="large" />
      </template>

      <template #content>
        <section class="relative">
          <section class="pb-16 md:grid md:grid-cols-2 md:gap-8">
            <div>
              <!-- <SectionBanner :section="section" /> -->
              <!-- <SectionItems :items="currentCategory?.items" :columns="columns" /> -->
              <ul
                class="grid grid-cols-1 gap-4 py-4 lg:grid-cols-2 lg:p-4"
                :class="{ 'grid-cols-2 text-left': columns === 2 }"
              >
                <li
                  :class="{
                    'mx-auto': currentCategory?.items.length === 1,
                    'border-b pb-4 dark:border-neutral-700 md:border-none': columns === 1,
                  }"
                  v-for="item in currentCategory?.items"
                  :key="item.name.es"
                >
                  <div class="flex items-center justify-between gap-4 md:flex-col md:items-stretch md:gap-2">
                    <section>
                      <h4 class="text-base font-bold">
                        {{ language === 'es' ? item.name.es : item.name.en }}
                      </h4>

                      <p v-if="item.description" class="text-gray-600 dark:text-gray-400">
                        {{ language === 'es' ? item.description.es : item.description.en }}
                      </p>
                    </section>
                    <div v-if="item.prices.length" class="flex justify-end gap-2">
                      <p
                        class="font-bold dark:text-gray-100"
                        :class="{ 'text-black': !item.description }"
                        v-if="item.prices.length"
                      >
                        {{ item.prices[0] }}<span v-if="item.prices[1]">/{{ item.prices[1] }}</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <ScrollToTop back-link="/menu" />
        </section>
      </template>
    </MainSection>
  </main>
</template>
