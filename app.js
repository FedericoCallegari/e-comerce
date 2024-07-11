const shopContent =document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")


let carrito = [];

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
      carrito.push({
        id : product.id,
        img : product.img,
        nombre : product.nombre,
        precio : product.precio
      })
      console.log(carrito);
    })
})

verCarrito.addEventListener("click", ()=>{
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = ` 
  <h1 class = "modal-header-title">Carrito.</h1>
  `
  modalContainer.append(modalHeader);
  const modalButton = document.createElement("h1");
  modalButton.innerText = "X";
  modalButton.className = "modal-header-button"

  modalHeader.append(modalButton);
})