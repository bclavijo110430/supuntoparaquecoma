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
      { nombre: "Chicharrón picado con platanitos", precio: "$15.000", foto: "entrada-chicharron.png" },
      { nombre: "Chorizo picado con platanitos", precio: "$15.000", foto: "entrada-chorizo.png" },
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
      { nombre: "Caldo de pata", precio: "$10.500", foto: "caldo-costilla.png" },
      { nombre: "Caldo con huevo", precio: "$9.500", foto: "changua.png" },
      { nombre: "Consomé", precio: "$4.500", foto: "caldo-costilla.png" },
    ],
  },
  {
    id: "arepas-sencillas",
    titulo: "Arepas sencillas",
    emoji: "🧀",
    items: [
      {
        nombre: "Arepa con queso",
        descripcion: "Arepa paisa artesanal con una tajada de queso.",
        precio: "$3.500",
        foto: "arepa-sencilla.png",
      },
      {
        nombre: "Arepa con doble queso",
        foto: "arepa-sencilla.png",
        precio: "$6.500",
      },
      {
        nombre: "Arepa con jamón y queso",
        descripcion:
          "Arepa paisa con doble porción de queso y un jamón ahumado.",
        precio: "$8.000",
        foto: "arepa-jamon-queso.png",
      },
    ],
  },
  {
    id: "arepas",
    titulo: "Arepas",
    emoji: "🫓",
    items: [
      {
        nombre: "Chorizo santarrosano solo",
        foto: "arepa-chorizo.png",
        precio: "$6.000",
      },
      {
        nombre: "Arepa con chorizo santarrosano",
        descripcion: "Con chorizo santarrosano original.",
        precio: "$8.000",
        foto: "arepa-chorizo.png",
      },
      {
        nombre: "Papa con chorizo santarrosano",
        foto: "arepa-chorizo.png",
        precio: "$7.500",
      },
      {
        nombre: "Arepa con chorizo santarrosano y queso",
        foto: "arepa-chorizo.png",
        precio: "$9.500",
      },
      {
        nombre: "Arepa con chorizo santarrosano, queso y jamón",
        foto: "arepa-jamon-queso.png",
        precio: "$12.000",
      },
      {
        nombre: "Pincho de pollo solo",
        foto: "arepa-pincho.png",
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
        foto: "arepa-pincho.png",
        precio: "$7.500",
      },
      {
        nombre: "Arepa con pincho de pollo y queso",
        foto: "arepa-pincho.png",
        precio: "$9.500",
      },
      {
        nombre: "Arepa con pincho, queso y jamón",
        foto: "arepa-jamon-queso.png",
        precio: "$12.000",
      },
      {
        nombre: "Arepa con huevos al gusto",
        foto: "arepa-pericos.png",
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
        foto: "arepa-rancheros.png",
        descripcion: "Con salchicha ranchera, jamón y doble queso.",
        precio: "$15.000",
      },
      {
        nombre: "Arepa con queso y carne en bistec",
        foto: "arepa-mixta.png",
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
        nombre: "Arepa rellena",
        descripcion:
          "Arepa paisa con jamón y queso, acompañada de carne, pollo y/o mixta.",
        precio: "$16.000",
        foto: "arepa-mixta.png",
      },
      {
        nombre: "La Burguesita",
        foto: "arepa-mixta.png",
        descripcion:
          "Arepa paisa con carne de hamburguesa, jamón, queso, cebolla, tomate, papa chip y salsas.",
        precio: "$15.000",
      },
      {
        nombre: "Arepa Burguer Super Punto y Coma",
        foto: "arepa-mixta.png",
        descripcion:
          "Carne de hamburguesa, carne, pollo desmechado o mixta, jamón, queso, cebolla, tomate, papa chip y salsas.",
        precio: "$25.000",
      },
      {
        nombre: "La Calidosa",
        foto: "arepa-mixta.png",
        descripcion: "Arepa paisa con doble queso y chicharrón.",
        precio: "$15.000",
      },
      {
        nombre: "La Sabrosonga",
        foto: "arepa-mixta.png",
        descripcion:
          "Arepa paisa acompañada de jamón, queso, pollo, carne y huevos al gusto.",
        precio: "$19.000",
      },
      {
        nombre: "La Verraca",
        foto: "arepa-rancheros.png",
        descripcion:
          "Arepa paisa acompañada de jamón, queso, pollo, carne y huevos rancheros.",
        precio: "$20.500",
      },
      {
        nombre: "La Suprema",
        foto: "arepa-mixta.png",
        descripcion:
          "Arepa paisa con jamón, queso, chorizo picado, hogao, chicharrón triturado, carne, pollo y/o mixta.",
        precio: "$20.500",
      },
      {
        nombre: "Arepa Super Punto y Coma",
        foto: "arepa-mixta.png",
        descripcion:
          "La más grande y poderosa: jamón, queso, chicharrón triturado con chorizo picado, huevo frito, plátano maduro, maíz tierno, hogao, guacamole, carne, pollo y/o mixta.",
        precio: "$26.000",
      },
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
        nombre: "Calentado de frijoles con huevos pericos, revueltos y/o fritos",
        precio: "$14.000",
        foto: "calentado-paisa.png",
      },
      {
        nombre: "Calentado de frijoles con huevos rancheros",
        foto: "calentado-paisa.png",
        precio: "$15.500",
      },
      {
        nombre: "Calentado de frijoles con carne en bistec",
        precio: "$18.000",
        foto: "calentado-carne.png",
      },
      {
        nombre: "Calentado de frijoles con chicharrón",
        foto: "calentado-paisa.png",
        precio: "$21.000",
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
        nombre: "Moñona de calentado con huevos revueltos, pericos y/o fritos",
        precio: "$20.000",
        foto: "monona.png",
      },
      {
        nombre: "Moñona de calentado con huevos rancheros",
        foto: "monona-rancheros.png",
        precio: "$22.000",
      },
      {
        nombre: "Huevos al gusto, revueltos, pericos y/o fritos con pan",
        precio: "$7.800",
        foto: "huevos-pan.png",
      },
      {
        nombre: "Huevos rancheros con pan",
        foto: "huevos-pan.png",
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
        nombre: "Chorizo con arroz, salsa de la carne y papa",
        foto: "arepa-chorizo.png",
        precio: "$11.000",
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
        foto: "carne-bistec.png",
        descripcion: "Papa francesa, media arepa paisa y ensalada.",
        precio: "$30.000",
      },
      {
        nombre: "Salchipapa sencilla",
        foto: "salchipapa.png",
        descripcion: "Dos porciones de papa, salchicha y queso.",
        precio: "$16.000",
      },
      {
        nombre: "Salchipapa Super Punto y Coma",
        foto: "salchipapa.png",
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
        foto: "arepa-pincho.png",
        descripcion:
          "Nuggets (6 unidades) de pollo crocantes con papitas a la francesa y jugo Hit caja pequeña.",
        precio: "$15.000",
      },
      {
        nombre: "Choricitos Kids",
        foto: "arepa-chorizo.png",
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
    nota: "Desde $700",
    items: [
      { nombre: "Porción de arroz", precio: "$2.500", foto: "adicion-arroz.png" },
      { nombre: "Porción de calentado", precio: "$9.000", foto: "adicion-calentado.png" },
      { nombre: "Porción de carne o pollo desmechado", precio: "$9.500", foto: "adicion-carne.png" },
      { nombre: "Porción de costilla", precio: "$7.000", foto: "adicion-costilla.png" },
      { nombre: "Porción de bistec", precio: "$9.000", foto: "adicion-bistec.png" },
      { nombre: "Adición de queso o jamón", precio: "$3.000", foto: "adicion-queso.png" },
      { nombre: "Adición de huevo", precio: "$2.500", foto: "adicion-huevo.png" },
      { nombre: "Huevos al gusto solos", precio: "$6.000", foto: "adicion-huevos.png" },
      { nombre: "Huevos rancheros solos", precio: "$7.500", foto: "adicion-rancheros.png" },
      { nombre: "Pan o calado", precio: "$700", foto: "adicion-pan.png" },
      { nombre: "Salchicha ranchera", precio: "$2.500", foto: "adicion-salchicha.png" },
      { nombre: "Porción de papa francesa", precio: "$6.000", foto: "adicion-papa-francesa.png" },
      { nombre: "Porción de papa salada", precio: "$2.500", foto: "adicion-papa-salada.png" },
      { nombre: "Porción de chicharrón", precio: "$8.000", foto: "adicion-chicharron.png" },
    ],
  },
  {
    id: "bebidas-calientes",
    titulo: "Bebidas calientes",
    emoji: "☕",
    items: [
      { nombre: "Tinto", precio: "$1.300", foto: "tinto.png" },
      { nombre: "Perico", precio: "$1.600", foto: "perico.png" },
      { nombre: "Aromática", precio: "$1.300", foto: "aromatica.png" },
      { nombre: "Café", precio: "$3.200", foto: "cafe.png" },
      {
        nombre: "Chocolate",
        precio: "$3.200",
        foto: "chocolate.png",
      },
      { nombre: "Milo caliente", precio: "$4.300", foto: "milo.png" },
    ],
  },
  {
    id: "jugos",
    titulo: "Jugos",
    emoji: "🥤",
    nota: "Agua $5.500 · Leche $6.500 · Maracuyá $6.500 / $7.500 · Milo frío $7.000",
    items: [
      { nombre: "Naranja", precio: "$5.500", foto: "jugo-naranja.png" },
      { nombre: "Guanábana", precio: "$5.500", foto: "jugo-guanabana.png" },
      { nombre: "Guayaba", precio: "$5.500", foto: "jugo-guayaba.png" },
      { nombre: "Mango", precio: "$5.500", foto: "jugo-mango.png" },
      { nombre: "Mora", precio: "$5.500", foto: "jugo-mora.png" },
      { nombre: "Curuba", precio: "$5.500", foto: "jugo-curuba.png" },
      { nombre: "Fresa", precio: "$5.500", foto: "jugo-fresa.png" },
      { nombre: "Feijoa", precio: "$5.500", foto: "jugo-feijoa.png" },
      { nombre: "Tomaté", precio: "$5.500", foto: "jugo-tomate.png" },
      { nombre: "Lulo", precio: "$5.500", foto: "jugo-lulo.png" },
      { nombre: "Maracuyá", precio: "$6.500", foto: "jugo-maracuya.png" },
      { nombre: "Limonada", precio: "$5.500", foto: "limonada.png" },
    ],
  },
  {
    id: "bebidas",
    titulo: "Bebidas",
    emoji: "🥫",
    items: [
      { nombre: "Postobón 250 ml", precio: "$4.300", foto: "postobon.png" },
      { nombre: "Postobón 350 ml", precio: "$4.300", foto: "postobon.png" },
      {
        nombre: "Postobón para llevar 250 ml",
        precio: "$4.300",
        foto: "postobon-colombiana.png",
      },
      { nombre: "Postobón 1.5 L", precio: "$4.300", foto: "postobon.png" },
      { nombre: "Coca-cola 250 ml", precio: "$4.300", foto: "gaseosa.png" },
      { nombre: "Coca-cola 600 ml", precio: "$4.300", foto: "gaseosa.png" },
      { nombre: "Coca-cola 1.5 L", precio: "$4.300", foto: "gaseosa.png" },
      { nombre: "Coca-cola 2.5 L", precio: "$4.300", foto: "gaseosa.png" },
      { nombre: "Coca-cola para llevar 250 ml", precio: "$4.300", foto: "gaseosa.png" },
    ],
  },
];

export const negocio = {
  nombre: "Su Punto Para Que Coma",
  lema: "Desde 2010",
  descripcion:
    "Arepas preparadas desde cero y cocinadas al carbón, caldos, bandejas y antojos hechos con cariño. El punto donde siempre quieres volver a comer.",
  direccion: "Cra 81A # 13-15",
  telefono: "301 648 9977",
  whatsapp: "https://wa.me/573016489977",
  instagram: "https://www.instagram.com/supuntoparaquecoma/",
  tiktok: "https://www.tiktok.com/@supuntoparaquecoma",
  facebook: "https://www.facebook.com/supuntoparaquecoma",
  handle: "@Supuntoparaquecoma",
};
