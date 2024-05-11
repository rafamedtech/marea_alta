import { defineStore } from 'pinia';
import { Language } from '@/types/Enums';

export const useStore = defineStore('main', () => {
  const isLoading = ref(true);
  const loadingScreen = ref(false);

  const eventModal = ref(true);
  const fullscreenEvents = ref(false);
  const language = ref(Language.Spanish);
  const showScrollToTop = ref(false);

  return {
    language,
    isLoading,
    loadingScreen,
    eventModal,
    fullscreenEvents,
    showScrollToTop,
  };
});
