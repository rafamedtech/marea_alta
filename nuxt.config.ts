// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/ui', '@vueuse/nuxt', '@nuxtjs/supabase', '@nuxtjs/sanity'],

  sanity: {
    projectId: 'voo7gajt',
    dataset: 'production',
  },

  supabase: {
    redirect: false,
  },
});
