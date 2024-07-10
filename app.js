const shopContent =document.getElementById("shopContent");

const productos = [
  {
    id: 1,
    nombre: "Rebook",
    talle:41-45,
    precio: 50000,
    img: "https://reebokarg.vtexassets.com/arquivos/ids/212063-800-800?v=638419355996300000&width=800&height=800&aspect=true",
  },
  {
    id: 2,
    nombre: "Nike Air force 1'07 ",
    precio: 60000,
    img: "https://nikearprod.vtexassets.com/arquivos/ids/699261/DD8959_100_A_PREM.jpg?v=638229666028100000 ",
  },
  {
    id: 3,
    nombre: "Nike Air Max",
    talle: 41-47.,
    precio: 189000,
    img: "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/H/DH5111-100_0_16.jpg",
  },
  {
    id: 4,
    nombre: "Nike Air Zoom Alphafly",
    talle: 41-45.,
    precio: 390000,
    img: "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/Z/DZ4784-304_0_8.jpg",
  },
  {
    id: 5,
    nombre: "Nike Air Max Tw",
    talle: 41-45.,
    precio: 239000,
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw16bf4c87/products/NIDV7721-001/NIDV7721-001-6.JPG",
  },
  {
    id: 6,
    nombre: "Nike",
    talle: 41-45.,
    precio: 60000,
    img: "https://nikearprod.vtexassets.com/arquivos/ids/699261/DD8959_100_A_PREM.jpg?v=638229666028100000 ",
  },
  {
    id: 7,
    nombre: "Nike Air Force 107 LV8",
    talle: 41-45.,
    precio: 200000,
    img: "https://nikearprod.vtexassets.com/arquivos/ids/731907/DZ2522_100_A_PREM.jpg?v=638308289486970000",
  },
  {
    id: 8,
    nombre: "Nike Air Max 270 React",
    talle: 41-45.,
    precio: 30000,
    img: "https://acdn.mitiendanube.com/stores/001/075/480/products/zapatillas-nike-air-max-270-react-ao4971-0021-920381d692f87f7a8116757957007956-640-0.jpg",
  },
];

let carrito = [];

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.innerHTML = `  
        <img src = "${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.talle}</p>
        <p>${product.precio} $</p>
    `;

    shopContent.append(content);
})