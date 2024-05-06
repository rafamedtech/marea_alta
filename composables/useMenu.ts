export function useMenu() {
  const categories = ref<Category[]>([]);
  const category = ref<Category | null>(null);
  const menu = ref<any>(null);

  // const formatCategories = (categories: CategoryFromApi[]): Category[] => {
  //   return categories.map((category) => {
  //     return { ...category, id: category._id, createdAt: category._createdAt };
  //   });
  // };

  // const formatCategory = (category: CategoryFromApi) => {
  //   return {
  //     ...category,
  //     id: category._id,
  //     createdAt: category._createdAt,
  //   } as Category;
  // };

  // const getMenu = async () => {
  //   const { data } = await useSanityQuery<CategoryFromApi[]>(allCategories);
  //   categories.value = formatCategories(data.value as CategoryFromApi[]);
  // };
  // const getMenu = async () => {
  //   const { data } = await useFetch('/api/menu');
  //   menu.value = data;
  // };
  // const getCurrentCategory = async (slug: string) => {
  //   const sanity = useSanity();
  //   const { data } = await useAsyncData(`${slug}`, () =>
  //     sanity.fetch<CategoryFromApi | null>(currentCategory, { slug })
  //   );

  //   if (data.value) {
  //     category.value = formatCategory(data.value);
  //   }
  // };

  return { menu, categories, category };
}
