Ecommerce Villordo

El proyecto fue trabajado con dependencias vistas en clase (react-router-dom, axios, etc) y por ahora el framework de
CSS elegido es Material-UI.

Aun hay mucho por pulir en lo que es el CSS, pero creo que la logica implementada esta optima segun lo solicitado hasta el momento.

En el archivo App, estan configuradas las rutas, con rutas dinamicas para el detalle de productos y las categorias. Se puede navegar a traves de las mismas con un NavBar (por ahora solo subi 3 categorias de productos).

Se implemento un setTimeOut para mostrar un circulo de progreso mientras simulamos la consulta al backend.

Luego al hacer click en cada producto, tomando el id del mismo se renderiza un detalle un poco mas amplio junto al componente "ItemCount" que permite elegir la cantidad del producto y agregarlo al carrito (funcionalidad que aun no ha sido desarrollada).
