export interface MenuItem {
  nombre: string;
  descripcion?: string;
  precio?: string;
  foto?: string;
}

export interface MenuCategory {
  id: string;
  titulo: string;
  emoji: string;
  nota?: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: "entradas",
    titulo: "Entradas",
    emoji: "🥟",
    items: [
      { nombre: "Empanadas", precio: "$3.500" },
      { nombre: "Pasteles", precio: "$3.800" },
    ],
  },
  {
    id: "caldos",
    titulo: "Caldos",
    emoji: "🍲",
    items: [
      {
        nombre: "Changua",
        precio: "$9.500",
        foto: "changua.png",
      },
      {
        nombre: "Caldo de costilla",
        precio: "$9.500",
        foto: "caldo-costilla.png",
      },
      {
        nombre: "Caldo de pajarilla",
        precio: "$10.500",
        foto: "caldo-pajarilla.png",
      },
      {
        nombre: "Caldo de pescado",
        precio: "$10.500",
        foto: "caldo-pescado.png",
      },
      { nombre: "Caldo de pata", precio: "$10.500" },
      { nombre: "Caldo con huevo", precio: "$9.500" },
      { nombre: "Consomé", precio: "$4.500" },
    ],
  },
  {
    id: "combos-desayunos",
    titulo: "Combos desayunos",
    emoji: "🍳",
    items: [
      {
        nombre: "Desayuno de pericos",
        descripcion: "Huevos pericos, arepa, queso y bebida caliente.",
        precio: "$17.000",
      },
      {
        nombre: "Desayuno de rancheros",
        descripcion: "Huevos rancheros, arepa, queso y bebida caliente.",
        precio: "$19.500",
      },
    ],
  },
  {
    id: "arepas",
    titulo: "Arepas",
    emoji: "🫓",
    items: [
      {
        nombre: "Arepa con queso",
        descripcion: "Arepa paisa artesanal con una tajada de queso.",
        precio: "$3.500",
        foto: "arepa-sencilla.png",
      },
      {
        nombre: "Arepa con doble queso",
        precio: "$6.000",
      },
      {
        nombre: "Arepa con jamón y queso",
        descripcion: "Queso doble crema y jamón ahumado.",
        precio: "$7.000",
        foto: "arepa-jamon-queso.png",
      },
      {
        nombre: "Chorizo santarrosano solo",
        precio: "$5.800",
      },
      {
        nombre: "Arepa con chorizo santarrosano",
        descripcion: "Con chorizo Santa Rosano original.",
        precio: "$7.500",
        foto: "arepa-chorizo.png",
      },
      {
        nombre: "Papa con chorizo santarrosano",
        precio: "$7.500",
      },
      {
        nombre: "Arepa con chorizo santarrosano y queso",
        precio: "$9.500",
      },
      {
        nombre: "Arepa con chorizo, queso y jamón",
        precio: "$12.000",
      },
      {
        nombre: "Pincho de pollo solo",
        precio: "$5.800",
      },
      {
        nombre: "Arepa con pincho de pollo",
        descripcion: "Arepa paisa acompañada con pincho de pollo.",
        precio: "$7.500",
        foto: "arepa-pincho.png",
      },
      {
        nombre: "Papa con pincho de pollo",
        precio: "$7.500",
      },
      {
        nombre: "Arepa con pincho de pollo y queso",
        precio: "$9.500",
      },
      {
        nombre: "Arepa con pincho, queso y jamón",
        precio: "$12.000",
      },
      {
        nombre: "Arepa con huevos al gusto",
        descripcion: "Con huevos fritos, revueltos y/o pericos.",
        precio: "$8.700",
      },
      {
        nombre: "Arepa con huevos pericos con queso",
        descripcion: "Huevos fritos, revueltos y/o pericos con queso.",
        precio: "$9.500",
        foto: "arepa-pericos.png",
      },
      {
        nombre: "Arepa con huevos rancheros",
        descripcion: "Arepa paisa con salchicha ranchera y queso.",
        precio: "$11.000",
        foto: "arepa-rancheros.png",
      },
      {
        nombre: "Arepa ranchera con todo",
        descripcion: "Con salchicha ranchera, jamón y doble queso.",
        precio: "$15.000",
      },
      {
        nombre: "Arepa rellena",
        descripcion: "Con jamón y queso, acompañada de carne, pollo y/o mixta.",
        precio: "$15.000",
        foto: "arepa-mixta.png",
      },
      {
        nombre: "Arepa de huevos revueltos con chorizo",
        precio: "$14.500",
      },
      {
        nombre: "Arepa con queso y carne en bistec",
        precio: "$15.000",
      },
    ],
  },
  {
    id: "arepas-especiales",
    titulo: "Arepas especiales",
    emoji: "⭐",
    items: [
      {
        nombre: "La Burguesita",
        descripcion:
          "Carne de hamburguesa, jamón, queso, cebolla, tomate, papa chip y salsas.",
        precio: "$15.000",
      },
      {
        nombre: "Arepa Burguer Super Punto y Coma",
        descripcion:
          "Carne de hamburguesa, carne, pollo desmechado o mixta, jamón, queso, cebolla, tomate, papa chip y salsas.",
        precio: "$25.000",
      },
      {
        nombre: "La Calidosa",
        descripcion: "Arepa paisa con doble queso y chicharrón.",
        precio: "$15.000",
      },
      {
        nombre: "La Sabrosonga",
        descripcion:
          "Arepa paisa con jamón, queso, pollo, carne y huevos al gusto.",
        precio: "$19.000",
      },
      {
        nombre: "La Verraca",
        descripcion:
          "Arepa paisa con jamón, queso, pollo, carne y huevos rancheros.",
        precio: "$20.500",
      },
      {
        nombre: "La Suprema",
        descripcion:
          "Arepa paisa con jamón, queso, chorizo picado, hogao, chicharrón triturado, carne, pollo y/o mixta.",
        precio: "$20.500",
      },
      {
        nombre: "Arepa Super Punto y Coma",
        descripcion:
          "La más grande y poderosa: jamón, queso, chicharrón triturado con chorizo picado, huevo frito, plátano maduro, maíz tierno, hogao, guacamole, carne, pollo y/o mixta.",
        precio: "$26.000",
      },
      {
        nombre: "Arepa Rellena",
        precio: "$15.000",
      },
    ],
  },
  {
    id: "arepas-dulces",
    titulo: "Arepas dulces",
    emoji: "🍯",
    items: [
      { nombre: "Arepa con queso y bocadillo", precio: "$8.000" },
      { nombre: "Arepa con queso y arequipe", precio: "$8.000" },
    ],
  },
  {
    id: "bandejas",
    titulo: "Bandejas",
    emoji: "🍽️",
    items: [
      {
        nombre: "Carne en bistec",
        descripcion: "Carne sudada con arepa y/o arroz y papa.",
        precio: "$15.000",
        foto: "carne-bistec.png",
      },
      {
        nombre: "Calentado paisa con huevos",
        descripcion: "Con huevos pericos, revueltos y/o fritos.",
        precio: "$14.000",
        foto: "calentado-paisa.png",
      },
      {
        nombre: "Calentado paisa con huevos rancheros",
        precio: "$15.500",
      },
      {
        nombre: "Calentado paisa con carne en bistec",
        precio: "$18.000",
        foto: "calentado-carne.png",
      },
      {
        nombre: "Moñona de huevos revueltos, pericos y/o fritos",
        precio: "$17.000",
        foto: "monona-pericos.png",
      },
      {
        nombre: "Moñona de rancheros",
        precio: "$20.000",
        foto: "monona-rancheros.png",
      },
      {
        nombre: "Moñona de calentado con huevos",
        descripcion: "Con huevos revueltos, pericos y/o fritos.",
        precio: "$20.000",
        foto: "monona.png",
      },
      {
        nombre: "Moñona de calentado con huevos rancheros",
        precio: "$22.000",
      },
      {
        nombre: "Huevos al gusto con pan",
        descripcion: "Revueltos, pericos y/o fritos.",
        precio: "$7.800",
        foto: "huevos-pan.png",
      },
      {
        nombre: "Huevos rancheros con pan",
        precio: "$8.700",
      },
      {
        nombre: "Huevos al gusto con arroz",
        precio: "$8.600",
        foto: "arroz-huevos.png",
      },
      {
        nombre: "Huevos rancheros con arroz",
        precio: "$10.600",
        foto: "arroz-rancheros.png",
      },
      {
        nombre: "Chorizo con arroz",
        precio: "$11.000",
      },
      {
        nombre: "Chorihuevos con arroz",
        precio: "$13.400",
      },
      {
        nombre: "Tamal",
        precio: "$8.000",
        foto: "tamal.png",
      },
    ],
  },
  {
    id: "bandejas-especiales",
    titulo: "Bandejas especiales",
    emoji: "🔥",
    items: [
      {
        nombre: "Churrasco a la plancha",
        descripcion: "Papa francesa, media arepa paisa y ensalada.",
        precio: "$25.000",
      },
      {
        nombre: "Salchipapa sencilla",
        descripcion: "Dos porciones de papa, salchicha y queso.",
        precio: "$16.000",
      },
      {
        nombre: "Salchipapa Super Punto y Coma",
        descripcion:
          "Arepa paisa en trozos, dos porciones de papa a la francesa, chorizo picado, salchicha americana, pollo, carne, cebolla grill, tomate, queso y salsa de la casa.",
        precio: "$24.000",
      },
    ],
  },
  {
    id: "menu-infantil",
    titulo: "Menú infantil",
    emoji: "🧒",
    nota: "Pequeños sabores",
    items: [
      {
        nombre: "Pollito feliz",
        descripcion:
          "Nuggets (6 unidades) de pollo crocantes con papitas a la francesa y jugo Hit caja pequeña.",
        precio: "$15.000",
      },
      {
        nombre: "Choricitos Kids",
        descripcion:
          "Chorizo picado con papitas a la francesa y jugo Hit caja pequeña.",
        precio: "$15.000",
      },
    ],
  },
  {
    id: "adiciones",
    titulo: "Adiciones",
    emoji: "➕",
    nota: "Desde $2.500",
    items: [
      { nombre: "Porción de arroz", precio: "$2.500" },
      { nombre: "Porción de calentado", precio: "$2.500" },
      { nombre: "Porción de carne o pollo desmechado", precio: "$2.500" },
      { nombre: "Porción de costilla", precio: "$2.500" },
      { nombre: "Porción de bistec", precio: "$2.500" },
      { nombre: "Adición de queso o jamón", precio: "$2.500" },
      { nombre: "Adición de huevo", precio: "$2.500" },
      { nombre: "Huevos al gusto solos", precio: "$2.500" },
      { nombre: "Huevos rancheros solos", precio: "$2.500" },
      { nombre: "Pan o calado", precio: "$2.500" },
      { nombre: "Salchicha ranchera", precio: "$2.500" },
      { nombre: "Porción de papa francesa", precio: "$2.500" },
      { nombre: "Porción de papa salada", precio: "$2.500" },
      { nombre: "Porción de chicharrón", precio: "$2.500" },
      { nombre: "Hamburguesa sola", precio: "$2.500" },
    ],
  },
  {
    id: "bebidas-calientes",
    titulo: "Bebidas calientes",
    emoji: "☕",
    items: [
      { nombre: "Tinto", precio: "$1.300" },
      { nombre: "Perico", precio: "$1.600" },
      { nombre: "Aromática", precio: "$1.300" },
      { nombre: "Café", precio: "$3.200" },
      {
        nombre: "Chocolate",
        precio: "$3.200",
        foto: "chocolate.png",
      },
      { nombre: "Milo caliente", precio: "$4.300" },
    ],
  },
  {
    id: "jugos",
    titulo: "Jugos",
    emoji: "🥤",
    nota: "Con agua $5.500 · Con leche $6.500 · Maracuyá $6.500 / $7.500 · Milo frío $7.000",
    items: [
      { nombre: "Naranja", foto: "jugo-naranja.png" },
      { nombre: "Guanábana", foto: "jugo-guanabana.png" },
      { nombre: "Guayaba" },
      { nombre: "Mango" },
      { nombre: "Mora" },
      { nombre: "Curuba" },
      { nombre: "Fresa" },
      { nombre: "Feijoa" },
      { nombre: "Tomaté" },
      { nombre: "Lulo" },
      { nombre: "Maracuyá" },
      { nombre: "Limonada", foto: "limonada.png" },
    ],
  },
  {
    id: "bebidas",
    titulo: "Bebidas",
    emoji: "🥫",
    items: [
      { nombre: "Postobón 250 ml", precio: "$4.300", foto: "postobon.png" },
      { nombre: "Postobón 350 ml", precio: "$4.300" },
      {
        nombre: "Postobón para llevar 250 ml",
        precio: "$4.300",
        foto: "postobon-colombiana.png",
      },
      { nombre: "Postobón 1.5 L", precio: "$4.300" },
      { nombre: "Coca-cola 250 ml", precio: "$4.300" },
      { nombre: "Coca-cola 600 ml", precio: "$4.300" },
      { nombre: "Coca-cola 1.5 L", precio: "$4.300" },
      { nombre: "Coca-cola 2.5 L", precio: "$4.300" },
      { nombre: "Coca-cola para llevar 250 ml", precio: "$4.300" },
    ],
  },
];

export const negocio = {
  nombre: "Su Punto Para Que Coma",
  lema: "Desde 2010",
  descripcion:
    "Arepas paisas, caldos, bandejas y antojos hechos con cariño. El punto donde siempre quieres volver a comer.",
  direccion: "Cra 81A # 13-15",
  telefono: "301 648 9977",
  whatsapp: "https://wa.me/573016489977",
  instagram: "https://www.instagram.com/supuntoparaquecoma/",
  tiktok: "https://www.tiktok.com/@supuntoparaquecoma",
  facebook: "https://www.facebook.com/supuntoparaquecoma",
  handle: "@Supuntoparaquecoma",
};
