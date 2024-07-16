<script setup lang="ts">
import { Language } from '@/types/Enums';

const { items } = defineProps<{
  items: NavLink[] | NavLink[][];
}>();

const store = useStore();
const { language } = storeToRefs(store);

const { changeLanguage } = useI18n();

const availableLanguages = [Language.Spanish, Language.English];
</script>

<template>
  <section class="fixed min-h-screen w-1/6 bg-black px-4">
    <article class="flex min-w-0 justify-center py-4">
      <Logo />
    </article>
    <ClientOnly>
      <UVerticalNavigation
        :links="items"
        :ui="{
          base: 'flex-col',
          padding: 'py-2',
          active: 'before:bg-gray-800 text-primary dark:text-primary border border-primary',
          inactive: 'hover:text-white text-gray-400 hover:before:bg-gray-800/50 border border-transparent',
          icon: {
            base: 'w-8 h-8',
            active: 'text-primary dark:text-primary',
            inactive: '',
          },
          rounded: '',
          divider: { wrapper: { base: 'p-4' } },
        }"
      />
      <!-- <USelectMenu
        v-model="language"
        :options="availableLanguages"
        @change="changeLanguage(language)"
        class="text-gray-200 forced-rounded-none uppercase mt-4 w-fit px-2"
        :ui="{
          rounded: 'rounded-none',
          option: { rounded: 'rounded-sm' },
          arrow: { rounded: 'rounded-none' },
          select: 'uppercase',
        }"
        :popper="{ placement: 'bottom-start' }"
      /> -->
    </ClientOnly>
  </section>
</template>
