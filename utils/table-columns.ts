export const baseColumns = [
  {
    key: "createdAt",
    label: "Fecha",
    sortable: true,
  },
  {
    key: "waiter",
    label: "Mesero",
    sortable: true,
  },
  {
    key: "rating",
    label: "Rating",
    sortable: true,
  },
  {
    key: "new",
    label: "Estado",
    sortable: true,
  },
];

export const mobileColumns = [
  ...baseColumns.filter(
    (column) => column.key !== "rating" && column.key !== "new",
  ),
  { key: "new", label: "", sortable: true },
];
