<script setup lang="ts">
import mainCover from '@/assets/img/portada.jpg';
import { restInfo } from '@/utils/restInfo';

const aboutInfo = computed(() => {
  return restInfo.es;
});
// const aboutInfo = computed(() => {
//   return language.value === Language.Spanish ? restInfo.es : restInfo.en;
// });

useHead({
  title: 'Acerca del restaurant',
  meta: [
    {
      name: 'description',
      content: 'Conoce más sobre nuestro restaurante',
    },
    // Facebook Meta tags
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://mareaalta.netlify.app',
    },
    {
      property: 'og:title',
      content: 'Marea Alta | Fresh food',
    },
    {
      property: 'og:description',
      content: 'Conoce más sobre nuestro restaurante.',
    },
    {
      property: 'og:image',
      content: 'https://res.cloudinary.com/rafamed-dev/image/upload/v1715461267/menus/marea_alta/logo-cover_kqhb6y.png',
    },
  ],
});
</script>

<template>
  <main>
    <AppHeading title="Acerca del restaurant" />

    <section class="lg:mt-4 pb-24 pt-8">
      <section class="md:mx-auto md:w-1/2">
        <UCard
          :ui="{
            base: 'relative w-full',
            body: { padding: 'px-0 py-0 sm:p-0' },
            rounded: '',
          }"
        >
          <img :src="mainCover" class="h-36 w-full min-w-full object-cover brightness-50 lg:h-52" alt="" />

          <section
            class="absolute text-gray-100 bottom-0 z-10 flex h-1/3 w-full flex-col justify-center rounded-b-xl bg-gradient-to-t from-black to-transparent pl-4"
          >
            <p class="uppercase text-3xl lg:text-3xl">
              {{ aboutInfo.name }}
            </p>
            <p class="pb-8">{{ aboutInfo.description }}</p>
          </section>
        </UCard>

        <section class="mt-8 flex justify-center gap-4">
          <NuxtLink
            v-for="{ id, name, icon, url } in aboutInfo.socials"
            :key="id"
            :to="url"
            target="_blank"
            class="flex flex-col items-center"
          >
            <Icon :name="icon" size="32" />
            <span>{{ name }}</span>
          </NuxtLink>
        </section>
        <section class="py-8">
          <h3 class="font-bold">
            Dirección:
            <span class="block font-normal">{{ aboutInfo.address }}</span>
          </h3>
          <h4 class="font-bold">
            Teléfono:
            <span class="block font-normal">{{ aboutInfo.phone }}</span>
          </h4>
        </section>
      </section>

      <section class="my-4 md:mx-auto md:w-1/2">
        <h3 class="text-xl font-bold">Horario de atención:</h3>
        <section v-for="{ id, name, time } in aboutInfo.schedule" :key="id" class="flex justify-between gap-4">
          <h4>{{ name }}</h4>
          <span>{{ time }}</span>
        </section>
      </section>
    </section>
  </main>
</template>
