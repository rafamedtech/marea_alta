import { LogoutModal, Feedback } from '#components';

export function useNav() {
  // const { navLinksLabels } = useI18n();

  const isDark = useDark();
  const toggleDark = useToggle(isDark);
  const darkModeLabel = computed(() => {
    return isDark.value ? 'Light mode' : 'Dark mode';
  });
  const darkModeIcon = computed(() => (isDark.value ? 'i-heroicons-sun-solid' : 'i-heroicons-moon-solid'));

  const links = computed<any>(() => {
    return [
      navLinks,
      // navLinksLabels.value,
      [
        {
          label: darkModeLabel.value,
          icon: darkModeIcon.value,
          click: () => {
            toggleDark();
          },
        },
      ],
    ];
  });

  const modal = useModal();
  function toggleLogout() {
    modal.open(LogoutModal, {});
  }

  function toggleFeedback() {
    modal.open(Feedback, {});
  }
  const adminLinks = computed(() => {
    return [
      [
        // {
        //   label: "Menu",
        //   icon: "i-heroicons-clipboard-document-list-solid",
        //   to: "/",
        // },
        // {
        //   label: "Eventos",
        //   icon: "i-heroicons-calendar-days-solid",
        //   to: "/",
        // },
        {
          label: 'Encuestas',
          icon: 'i-heroicons-clipboard-document-check-solid',
          to: '/admin/encuestas',
        },
        {
          label: 'Ayuda',
          icon: 'i-heroicons-question-mark-circle',
          click: () => {
            toggleFeedback();
          },
        },
        // {
        //   label: "Ajustes",
        //   icon: "i-heroicons-cog",
        //   click: () => {console.log('Ajustes')}
        // },
      ] as NavLink[],
      [
        {
          label: darkModeLabel.value,
          icon: darkModeIcon.value,
          click: () => {
            toggleDark();
          },
        },
        {
          label: 'Cerrar sesión',
          icon: 'i-heroicons-arrow-left-on-rectangle-solid',
          click: () => {
            toggleLogout();
          },
        },
      ] as NavLink[],
    ];
  });
  return { links, adminLinks };
}
