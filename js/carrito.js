const pintarCarrito = () => {
  //Limpio el modal container
  modalContainer.innerHTML = "";
  //Abro mi modalContainer.


  //HEADER.
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = ` 
    <h1 class = "modal-header-title">Carrito.</h1>
    `;
  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "X";
  modalButton.className = "modal-header-button";

  
  // Oculto mi modalContainer
  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
  modalHeader.append(modalButton);

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
        <img src = "${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $ </p>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio} </p>
        <span class="delete-product">❌</span>;
      `;
    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--;
      }
      saveLocal();
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      if (product.cantidad !== 0) {
        product.cantidad++;
      }
      saveLocal();
      pintarCarrito();
    });

    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
      eliminarProducto(product.id);
    });
  });

  //TOTAL
  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `total a pagar: ${total} $`;
  modalContainer.append(totalBuying);

  


  //COMPRAR
  const comprarButton = document.createElement("button");
  comprarButton.className = "button-comprar";
  comprarButton.innerHTML = "comprar";
  modalContainer.append(comprarButton);

  if(total === 0){
    alert("Inserte un producto al carrito");
    modalContainer.innerHTML = ""
  }

  comprarButton.addEventListener("click", () => {
    // Cierra el primer modal
    modalContainer.style.display = "none";
    //Crea el segundo modal
    const pagosContainer = document.createElement("div");
    pagosContainer.className = "compra-container";

    const pagoMain = document.createElement("div");
    pagoMain.className = "pago-main"
    pagosContainer.appendChild(pagoMain)

    const pagoHeader = document.createElement("div");
    pagoHeader.className = "header-container";
    pagoHeader.innerHTML = `<h1>Confirmar Pago</h1>`;
    pagoMain.append(pagoHeader);

    const cerrarPagoButton = document.createElement("h1");
    cerrarPagoButton.innerText = "X";
    cerrarPagoButton.className = "pagos-header-button";

    cerrarPagoButton.addEventListener("click", () => {
      pagosContainer.style.display = "none";
    });
    pagoHeader.append(cerrarPagoButton);

    const pagoContent = document.createElement("div");
    pagoContent.className = "modal-form-content";
    pagoContent.innerHTML = `
                            <form action="" method="post">
                              <label for="POST-name">Nombre:</label>
                              <input id="POST-name" type="text" name="name" />
                              <label for="POST-lastName">Apellido:</label>
                              <input id="POST-lastName" type="text" name="secondName">
                              <label for="POST-dni>DNI:</label>
                              <input id="POST-dni type="text" name="Dni">
                            </form>
                            <p> Total a pagar ${total}</p>`;
    pagoMain.append(pagoContent);
   
    document.body.append(pagosContainer); // agregamos el segundo modal al body
    pagosContainer.classList.add('center-modal');
    
    const buttonPagar = document.createElement("button");
    buttonPagar.innerHTML= "pagar"
     buttonPagar.addEventListener("click",console.log('click')
     )
    
    pagosContainer.appendChild(buttonPagar)
  });
};



verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (productId) => {
  const foundId = carrito.find((element) => element.id === productId);
  console.log(foundId);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  carritoCounter();
  saveLocal();
  pintarCarrito();
};

// Add to my carrito counter getItem
const carritoCounter = () => {
  cantidadCarrito.style.display = "block";
  const carritoLength = carrito.length;
  // setItem("KEY", VALUE)
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
carritoCounter();
