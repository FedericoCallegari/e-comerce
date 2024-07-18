# E-Commerce App

## Descripción

E-Commerce App es una aplicación web de comercio electrónico construida con JavaScript Vanilla. Esta aplicación permite a los usuarios comprar productos de manera intuitiva. Utiliza `fetch, async/await` para manejar las solicitudes a un archivo JSON que contiene los productos y realiza manipulaciones del DOM para actualizar la interfaz de usuario .Uso de `localStorage` para almacenar los productos ingresados en el carrito de compras.

## Características

- **Catálogo de Productos:** Navega y busca entre una variedad de productos almacenados en un archivo JSON.
- **Carrito de Compras:** Agrega productos al carrito y gestiona tus selecciones antes de realizar una compra.
- **Proceso de Pago:** Simulación de proceso de pago.

## Tecnologías Utilizadas

- JavaScript (Vanilla)
- HTML5
- CSS3
- JSON

## Instalación

Para ejecutar esta aplicación localmente, sigue los siguientes pasos:

### Prerrequisitos

- Un navegador web moderno (Chrome, Firefox, Edge, etc.)
- Un servidor local para servir archivos estáticos (opcional, pero recomendado)

### Pasos

1. Clona el repositorio:
    ```bash
    git clone https://github.com/FedericoCallegari/e-comerce/tree/main
    ```

2. Abre el archivo `index.html` en tu navegador o sirve los archivos usando un servidor local (por ejemplo, con VSCode puedes usar la extensión "Live Server").

## Estructura del Proyecto

e-commerce-app-js-vanilla/
│
├── index.html
├── styles.css
├── app.js
├── carrito.js
└── data.json

- `index.html`: Contiene la estructura básica de la aplicación.
- `styles.css`: Contiene los estilos CSS para la aplicación.
- `app.js`: Contiene el código JavaScript para manejar la lógica de la aplicación.
- `carrito.js`: Contiene la logica del modal del carrito de compras.
- `products.json`: Contiene los datos de los productos.

1. **Carga de Productos:**
   - Los productos se cargan desde el archivo `products.json` utilizando `fetch` y `async/await`.

2. **Navegación de Productos:**
   - Los productos se muestran en la página principal y se puede buscar por nombre.

3. **Agregar al Carrito:**
   - Haz clic en el botón "Comprar" para añadir productos al carrito.

4. **Visualización del Carrito:**
   - El carrito de compras se actualiza dinámicamente en el DOM y muestra los productos seleccionados.

5. **Proceso de Pago:**
   - Simulación del proceso de pago (sin funcionalidad backend).

## Contribución:

Las contribuciones son bienvenidas. Por favor sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz un commit (`git commit -a 'Agrega nueva feature'`).
4. Sube tu rama (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.

## Contacto:

Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactarme directamente en `callegarifede1@gmail.com`.

