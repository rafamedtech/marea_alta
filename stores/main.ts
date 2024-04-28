import { defineStore } from "pinia";

export const useStore = defineStore("main", () => {
  const isLoading = ref(true);
  const loadingScreen = ref(false);

  const eventModal = ref(true);
  const fullscreenEvents = ref(false);
  const language = ref("es");
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
