const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const getProducts = async () => {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error(`Error al obtener los datos: ${response.statusText}`);
    }
    const data = await response.json();
    // console.log(data);

    data.forEach((product) => {
      let content = document.createElement("div");
      content.className = "card";
      content.innerHTML = `  
        <img src = "${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.talle}</p>
        <p class="price">${product.precio} $</p>
    `;

      shopContent.append(content);

      let comprar = document.createElement("button");

      comprar.innerText = "comprar";
      comprar.className = "comprar";
      content.appendChild(comprar);

      comprar.addEventListener("click", () => {
        const repeat = carrito.some(
          (repeatProduct) => repeatProduct.id === product.id
        );
        if (repeat) {
          carrito.map((prod) => {
            if (prod.id === product.id) {
              prod.cantidad++;
            }
            return prod;
          });
        } else {
          carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
          });
        }

        console.log(carrito);

        // This function runs every time you add a product.
        carritoCounter();
        saveLocal();
      });
    });
  } catch (error) {
    alert("Ocurrió un error al obtener los productos", error.message);
    console.log(`Ocurrio un erro al obtener los productos ${error.message}`);
    
  }
};
getProducts();

// set item
// setItem("Key", value);
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item
//getItem("key")

JSON.parse(localStorage.getItem("carrito"));
