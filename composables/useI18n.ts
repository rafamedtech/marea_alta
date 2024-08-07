import { Language } from '@/types/Enums';

export function useI18n() {
  const store = useStore();
  const { language, loadingScreen } = storeToRefs(store);

  const aboutPageLabels = computed(() => {
    return language.value === Language.Spanish
      ? {
          title: 'Acerca del restaurant',
          description: 'Conoce más sobre nuestro restaurante',
          address: 'Dirección:',
          phone: 'Teléfono:',
          schedule: 'Horario de atención:',
        }
      : {
          title: 'About the restaurant',
          description: 'Learn more about our restaurant',
          address: 'Address:',
          phone: 'Phone:',
          schedule: 'Open hours:',
        };
  });

  const surveyPageLabels = computed(() => {
    return language.value === Language.Spanish
      ? {
          title: 'Encuesta de satisfacción',
          description: 'Agradecemos su opinión respondiendo unas preguntas',
          form: {
            name: 'Nombre',
            email: 'Correo electrónico',
            waiter: 'Mesero que le atendió',
            comments: 'Comentarios',
            button: 'Enviar',
            loading: 'Enviando',
            placeholders: {
              name: 'Escribe tu nombre',
              email: 'Escribe tu correo electrónico',
              waiter: 'Selecciona un mesero',
              comments: 'Escribe tus comentarios',
            },
          },
          done: '¡Encuesta Enviada!',
          modalTitle: '¡Gracias por tu opinión!',
          modalDescription: 'Con tus comentarios podemos mejorar nuestros productos y servicios',
          exit: 'Cerrar',
        }
      : {
          title: 'Satisfaction survey',
          description: 'We appreciate your opinion by answering a few questions',
          form: {
            name: 'Name',
            email: 'Email',
            waiter: 'Waiter who attended you',
            comments: 'Comments',
            button: 'Send',
            loading: 'Sending',
            placeholders: {
              name: 'Your name here',
              email: 'Your email here',
              waiter: 'Select your waiter',
              comments: 'Write your comments here',
            },
          },
          done: 'Survey Completed!',
          modalTitle: 'Thanks for your opinion!',
          modalDescription: 'With your comments we can improve our products and services',
          exit: 'Close',
        };
  });

  const surveyQuestions = computed(() => {
    return [
      {
        id: 1,
        text:
          language.value === Language.Spanish
            ? 'La bienvenida por parte de nuestro mesero'
            : 'The welcome from our waiter/waitress',
        rating: '5',
      },
      {
        id: 2,
        text:
          language.value === Language.Spanish
            ? 'La calidad y temperatura de los alimentos'
            : 'The quality and temperature of the food',
        rating: '5',
      },
      {
        id: 3,
        text: language.value === Language.Spanish ? 'La calidad de sus bebidas' : 'The quality of your drinks',
        rating: '5',
      },
      {
        id: 4,
        text: language.value === Language.Spanish ? 'La limpieza del restaurante' : 'The cleanliness of the restaurant',
        rating: '5',
      },
      {
        id: 5,
        text:
          language.value === Language.Spanish
            ? '¿Cómo califica nuestro servicio en general?'
            : 'How do you rate our service in general?',
        rating: '5',
      },
    ];
  });

  const waitersList = computed(() => [
    language.value === Language.Spanish ? 'No lo sé' : "I don't know",
    'Diego Vargas',
    'Giovanny Gómez',
    'Christian Pérez',
  ]);

  const eventsPageLabels = computed(() => {
    return language.value === Language.Spanish
      ? {
          title: 'Eventos',
          description: 'Encuentra nuestros eventos y promociones',
          fullscreenButton: 'Galería',
        }
      : {
          title: 'Events',
          description: 'Find our events and promotions',
          fullscreenButton: 'Gallery',
        };
  });

  const menuPageLabels = computed(() => {
    return {
      title: 'Marea Alta',
      header: language.value === Language.Spanish ? 'Nuestro menú' : 'Our menu',
      description: 'Fresh Food',
    };
  });

  const scrollToTopLabels = computed(() => {
    return language.value === Language.Spanish
      ? {
          scrollToTop: 'Arriba',
          back: 'Atrás',
        }
      : {
          scrollToTop: 'Top',
          back: 'Back',
        };
  });

  const navLinksLabels = computed<NavLink[]>(() => {
    return [
      {
        label: language.value === Language.Spanish ? 'Menú' : 'Menu',
        icon: 'i-heroicons-clipboard-document-list-solid',
        to: '/menu',
      },
      // {
      //   label: language.value === Language.Spanish ? 'Eventos' : 'Events',
      //   icon: 'i-heroicons-calendar-days-solid',
      //   to: '/eventos',
      // },
      {
        label: language.value === Language.Spanish ? 'Encuesta' : 'Survey',
        icon: 'i-heroicons-clipboard-document-check-solid',
        to: '/encuesta',
      },
      {
        label: language.value === Language.Spanish ? 'Acerca de' : 'About',
        icon: 'i-heroicons-building-storefront-solid',
        to: '/',
      },
    ];
  });

  const changeLanguage = (lang: Language) => {
    loadingScreen.value = true;

    setTimeout(() => {
      language.value = lang;
      loadingScreen.value = false;
    }, 1000);
  };

  return {
    changeLanguage,
    menuPageLabels,
    aboutPageLabels,
    surveyPageLabels,
    surveyQuestions,
    eventsPageLabels,
    scrollToTopLabels,
    navLinksLabels,
    waitersList,
  };
}
