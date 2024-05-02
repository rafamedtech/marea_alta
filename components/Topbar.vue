<script setup lang="ts">
import { LogoutModal, Feedback } from '#components';
const { admin = false } = defineProps<{
  admin?: boolean;
}>();

const user = useSupabaseUser();
const store = useStore();
const { language } = storeToRefs(store);

const isDark = useDark();
const toggleDark = useToggle(isDark);

const darkModeIcon = computed(() => (isDark.value ? 'i-heroicons-sun-solid' : 'i-heroicons-moon-solid'));

const modal = useModal();
const toggleFeedback = () => {
  modal.open(Feedback, {});
};

const { changeLanguage } = useI18n();
function toggleLogout() {
  modal.open(LogoutModal, {});
}

const items = computed(() => {
  return [
    [
      {
        label: 'Ver menú',
        icon: 'i-heroicons-clipboard-document-list-solid',
        to: '/menu',
      },
      {
        label: 'Encuestas',
        icon: 'i-heroicons-clipboard-document-check-solid',
        to: '/admin/encuestas',
      },
      {
        label: 'Cerrar sesión',
        icon: 'i-heroicons-arrow-left-end-on-rectangle',
        click: () => {
          toggleLogout();
        },
      },
      {
        label: '¿Necesitas ayuda?',
        icon: 'i-heroicons-question-mark-circle',
        click: () => {
          toggleFeedback();
        },
      },
    ] as NavLink[],
  ];
});

const availableLanguages = [
  { label: 'ES', value: 'es' },
  { label: 'EN', value: 'en' },
];

const selectedLanguage = ref(availableLanguages.find((lang) => lang.value === language.value));
</script>

<template>
  <div class="sticky top-0 z-[49] flex justify-between bg-black p-4 text-center shadow lg:hidden">
    <!-- Logo on mobile -->
    <Logo />
    <span v-if="admin" class="text-primary font-bold">Administrador</span>

    <section class="flex items-center gap-2">
      <ClientOnly>
        <USelectMenu
          v-model="selectedLanguage"
          :options="availableLanguages"
          @change="changeLanguage()"
          class="text-gray-200"
        />
        <UButton
          :icon="darkModeIcon"
          variant="ghost"
          color="gray"
          size="xl"
          :ui="{
            inline: 'flex-col',
            rounded: 'rounded-xl',
            color: {
              gray: {
                ghost: 'text-gray-200 hover:text-gray-200 hover:bg-gray-800',
              },
            },
          }"
          class="flex-1"
          @click="toggleDark()"
        />
      </ClientOnly>

      <UDropdown
        v-if="user"
        :items="items"
        :popper="{ placement: 'bottom-start' }"
        :ui="{
          item: {
            active: 'border border-transparent dark:bg-transparent bg-transparent ',
            inactive: 'hover:text-white text-gray-600 hover:before:bg-gray-800/50 border border-transparent',
            icon: {
              active: 'text-primary dark:text-primary',
              inactive: 'text-primary dark:text-primary',
            },
          },
        }"
      >
        <UButton
          color="gray"
          trailing-icon="i-heroicons-bars-3-bottom-right"
          class="h-fit"
          variant="ghost"
          :ui="{
            inline: 'flex-col',
            rounded: 'rounded-xl',
            color: {
              gray: {
                ghost: 'text-gray-200 hover:text-gray-200 hover:bg-gray-800',
              },
            },
          }"
        />
      </UDropdown>
    </section>
  </div>
</template>
