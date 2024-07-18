const shopContent =document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")


let carrito =   JSON.parse(localStorage.getItem("carrito"))||[];

productos.forEach((product)=>{
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
    comprar.className ="comprar";
    content.appendChild(comprar);

    comprar.addEventListener('click', ()=>{
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
      if(repeat){
        carrito.map((prod)=>{
          if(prod.id === product.id){
            prod.cantidad++
          };
        });
      }else{
        carrito.push({
          id : product.id,
          img : product.img,
          nombre : product.nombre,
          precio : product.precio,
          cantidad: product.cantidad,
        }); 
      }
      
      
      console.log(carrito);

      // This function runs every time you add a product.
      carritoCounter();
      saveLocal();
    });
});



// set item 
// setItem("Key", value);
const saveLocal = ()=>{
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item 
//getItem("key")

JSON.parse(localStorage.getItem("carrito"));



