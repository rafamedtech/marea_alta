import { menu } from '../utils/menu';

export default defineEventHandler((event) => {
  assertMethod(event, 'GET');

  return menu;
});
