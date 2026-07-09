type CategoryInfo = {
  title: string;
  description: string;
};

export const categoryInfo: Record<string, CategoryInfo> = {
  beauty: {
    title: "Belleza",
    description: "Productos de belleza y cuidado personal.",
  },
  fragrances: {
    title: "Fragancias",
    description: "Aromas que Cautivan",
  },
  furniture: {
    title: "Muebles",
    description: "Diseño y Comodidad",
  },
  groceries: {
    title: "Alimentos",
    description: "Frescura en tu mesa",
  },
  "home-decoration": {
    title: "Decoración",
    description: "Detalles que inspiran",
  },
  "kitchen-accessories": {
    title: "Cocina",
    description: "Todo para cocinar mejor",
  },
  laptops: {
    title: "Laptops",
    description: "Potencia y portabilidad",
  },
  "mens-shirts": {
    title: "Camisas para Hombre",
    description: "Estilo para cada ocasión",
  },
  "mens-shoes": {
    title: "Zapatos para Hombre",
    description: "Comodidad con carácter",
  },
  "mens-watches": {
    title: "Relojes para Hombre",
    description: "El tiempo con elegancia",
  },
  "mobile-accessories": {
    title: "Accesories Móviles",
    description: "Conectividad sin Límites",
  },
};
