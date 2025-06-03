import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const productos = [
  {
    id: 1,
    nombre: "Mesa de TV Varillado 180cm",
    descripcion: "Mesa de TV con puertas laterales, acabado en poliuretano.",
    precio: 632500,
    stock: 5,
    categoria: "Living",
    imagen:
      "https://www.amoblamientoscapri.com.ar/images/mesa-tv-varillado-180.jpg",
  },
  {
    id: 2,
    nombre: "Mesa de Luz Minimalista Nórdica",
    descripcion: "Mesa de luz de dos cajones con diseño minimalista nórdico.",
    precio: 166430,
    stock: 10,
    categoria: "Dormitorio",
    imagen: "https://www.amoblamientoscapri.com.ar/images/mesa-luz-nordica.jpg",
  },
  {
    id: 3,
    nombre: "Sillón Individual Byholma",
    descripcion:
      "Sillón individual con estructura de madera y tapizado en lino.",
    precio: 736700,
    stock: 3,
    categoria: "Living",
    imagen: "https://www.amoblamientoscapri.com.ar/images/sillon-byholma.jpg",
  },
  {
    id: 4,
    nombre: "Juego de Dormitorio Soho 2 Plazas",
    descripcion: "Conjunto de dormitorio estilo Soho para camas de 2 plazas.",
    precio: 890600,
    stock: 2,
    categoria: "Dormitorio",
    imagen: "https://www.amoblamientoscapri.com.ar/images/dormitorio-soho.jpg",
  },
  {
    id: 5,
    nombre: "Cajonera Nórdica 120x80",
    descripcion: "Cajonera de estilo nórdico con acabado en poliuretano.",
    precio: 824000,
    stock: 4,
    categoria: "Dormitorio",
    imagen: "https://www.amoblamientoscapri.com.ar/images/cajonera-nordica.jpg",
  },
  {
    id: 6,
    nombre: "Sillón Nórdico Álamo",
    descripcion: "Sillón de diseño nórdico con estructura de madera de álamo.",
    precio: 177450,
    stock: 6,
    categoria: "Living",
    imagen:
      "https://www.amoblamientoscapri.com.ar/images/sillon-nordico-alamo.jpg",
  },
  {
    id: 7,
    nombre: "Banco Nórdico 80x30",
    descripcion:
      "Banco de estilo nórdico ideal para recibidores o pies de cama.",
    precio: 93370,
    stock: 8,
    categoria: "Dormitorio",
    imagen: "https://www.amoblamientoscapri.com.ar/images/banco-nordico.jpg",
  },
  {
    id: 8,
    nombre: "Box Cama 140x190 2 Plazas",
    descripcion: "Box cama de 2 plazas con estructura reforzada.",
    precio: 599900,
    stock: 5,
    categoria: "Dormitorio",
    imagen: "https://www.amoblamientoscapri.com.ar/images/box-cama.jpg",
  },
  {
    id: 9,
    nombre: "Mesa Asia 120x80cm",
    descripcion: "Mesa de comedor estilo Asia con acabado en poliuretano.",
    precio: 187430,
    stock: 7,
    categoria: "Comedor",
    imagen: "https://www.amoblamientoscapri.com.ar/images/mesa-asia.jpg",
  },
  {
    id: 10,
    nombre: "Mesa de TV Varillado 150cm",
    descripcion: "Mesa de TV con cajones, diseño varillado de 150cm.",
    precio: 543400,
    stock: 3,
    categoria: "Living",
    imagen:
      "https://www.amoblamientoscapri.com.ar/images/mesa-tv-varillado-150.jpg",
  },
  {
    id: 11,
    nombre: "Respaldo Americano Sommier 140cm",
    descripcion: "Respaldo estilo americano para sommier de 140cm.",
    precio: 84000,
    stock: 9,
    categoria: "Dormitorio",
    imagen:
      "https://www.amoblamientoscapri.com.ar/images/respaldo-americano.jpg",
  },
  {
    id: 12,
    nombre: "Ropero 120x180 Cera",
    descripcion: "Ropero de 2 puertas con acabado en cera de 120x180cm.",
    precio: 287600,
    stock: 4,
    categoria: "Dormitorio",
    imagen: "https://www.amoblamientoscapri.com.ar/images/ropero-120x180.jpg",
  },
  {
    id: 13,
    nombre: "Sillón Gervasoni Lustre",
    descripcion: "Sillón estilo Gervasoni con acabado en lustre.",
    precio: 147000,
    stock: 5,
    categoria: "Living",
    imagen: "https://www.amoblamientoscapri.com.ar/images/sillon-gervasoni.jpg",
  },
  {
    id: 14,
    nombre: "Cajonera 120x100 Cera",
    descripcion: "Cajonera amplia con acabado en cera de 120x100cm.",
    precio: 328900,
    stock: 6,
    categoria: "Dormitorio",
    imagen: "https://www.amoblamientoscapri.com.ar/images/cajonera-120x100.jpg",
  },
  {
    id: 15,
    nombre: "Juego de Sillones Toledo - Lino Cera",
    descripcion:
      "Conjunto de sillones Toledo tapizados en lino con acabado en cera.",
    precio: 640600,
    stock: 2,
    categoria: "Living",
    imagen: "https://www.amoblamientoscapri.com.ar/images/sillones-toledo.jpg",
  },
];

export default function ItemListContainer() {
  const [items, setItems] = useState([]);

  const getItems = () =>
    new Promise((resolve, reject) => {
      if (productos.length) {
        resolve(productos);
      } else {
        reject("DB empty");
      }
    });

  useEffect(() => {
    getItems()
      .then((res) => setItems(res))
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      <div className="container row justify-content-evenly mt-5">
        <ItemList items={items} />
      </div>
    </>
  );
}
