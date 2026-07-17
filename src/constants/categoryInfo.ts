type CategoryInfo = {
  title: string;
  description: string;
  altTitle?: string;
  completeDescription: string;
};

export const categoryInfo: Record<string, CategoryInfo> = {
  beauty: {
    title: "Belleza",
    altTitle: "Realza tu belleza natural",
    description: "Productos de belleza y cuidado personal.",
    completeDescription:
      "Descubre nuestra colección de productos de belleza: máscaras de pestañas, paletas de sombras, labiales y más. Fórmulas de alta calidad para resaltar lo mejor de ti cada día.",
  },
  fragrances: {
    title: "Fragancias",
    description: "Aromas que Cautivan",
    completeDescription:
      "Perfumes y colonias de las casas más prestigiosas del mundo. Encuentra la fragancia perfecta que defina tu personalidad y te acompañe en cada ocasión.",
  },
  furniture: {
    title: "Muebles",
    description: "Diseño y Comodidad",
    completeDescription:
      "Muebles de diseño para transformar tus espacios. Desde camas y sofás hasta mesas y sillas, con piezas que combinan estética, comodidad y durabilidad.",
  },
  groceries: {
    title: "Alimentos",
    description: "Frescura en tu mesa",
    completeDescription:
      "Productos frescos y de despensa seleccionados con cuidado. Frutas, verduras, carnes y esenciales para llenar tu cocina de sabor y calidad.",
  },
  "home-decoration": {
    title: "Decoración",
    description: "Detalles que inspiran",
    completeDescription:
      "Accesorios decorativos para dar personalidad a tu hogar. Marcos, jarrones, textiles y piezas únicas que crean ambientes acogedores y llenos de estilo.",
  },
  "kitchen-accessories": {
    title: "Cocina",
    description: "Todo para cocinar mejor",
    completeDescription:
      "Accesorios y utensilios de cocina que hacen de cada preparación un placer. Herramientas prácticas y elegantes para chefs profesionales y aficionados.",
  },
  laptops: {
    title: "Laptops",
    description: "Potencia y portabilidad",
    completeDescription:
      "Las mejores laptops del mercado para trabajo, estudio y entretenimiento. Rendimiento, diseño y tecnología de vanguardia en cada equipo.",
  },
  "mens-shirts": {
    title: "Camisas para Hombre",
    description: "Estilo para cada ocasión",
    completeDescription:
      "Camisas de hombre confeccionadas con los mejores materiales. Diseños clásicos y modernos para lucir impecable en el trabajo o en tu tiempo libre.",
  },
  "mens-shoes": {
    title: "Zapatos para Hombre",
    description: "Comodidad con carácter",
    completeDescription:
      "Calzado masculino que combina comodidad y estilo. Desde zapatillas deportivas hasta modelos formales para completar cualquier look.",
  },
  "mens-watches": {
    title: "Relojes para Hombre",
    description: "El tiempo con elegancia",
    completeDescription:
      "Relojes de hombre que son mucho más que un accesorio. Precisión, diseño y sofisticación en piezas pensadas para durar toda una vida.",
  },
  "mobile-accessories": {
    title: "Accesories Móviles",
    description: "Conectividad sin Límites",
    completeDescription:
      "Accesorios para sacar el máximo provecho de tus dispositivos. Fundas, cargadores, audífonos y gadgets que hacen tu vida más práctica.",
  },
};
