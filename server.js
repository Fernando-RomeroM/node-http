// Importar el módulo de datos * No pornerlo dos veces,  que sino da error*
const data = require('./data');

// Acceder a las propiedades del objeto con la información de la página web
console.log("Título:", data.title);
console.log("Subtítulo:", data.subtitle);
console.log("Descripción:", data.description);cle
console.log("Autor:", data.author);
console.log("Email:", data.email);
console.log("Redes Sociales:");
console.log("- Twitter:", data.social.twitter); //data = padre, social = hijo, (opción final)
console.log("- Instagram:", data.social.instagram);
console.log("- Facebook:", data.social.facebook);
console.log("Palabras Clave:", data.keywords.join(", ")); // poner "," entre los resultados

// Importar el módulo HTTP *Importante*
const http = require('http');

// Crear un servidor HTTP *Importante*
const server = http.createServer((req, res) => {
  // Establecer el encabezado de respuesta con el tipo de contenido
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Código HTML al completo que enlaza con data.js
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.title}</title>
    </head>
    <body>
      <header>
        <h1>${data.title}</h1>
        <h2>${data.subtitle}</h2>
      </header>
      <section>
        <p>${data.description}</p>
        <p>Autor: ${data.author}</p>
        <p>Email: ${data.email}</p>
        <p>Redes Sociales:</p>
        <ul>
          <li>Twitter: <a href="${data.social.twitter}">${data.social.twitter}</a></li>
          <li>Instagram: <a href="${data.social.instagram}">${data.social.instagram}</a></li>
          <li>Facebook: <a href="${data.social.facebook}">${data.social.facebook}</a></li>
        </ul>
      </section>
      <footer>
        <p>Palabras Clave: ${data.keywords.join(", ")}</p>
      </footer>
    </body>
    </html>
  `;
  
  // Enviar el cuerpo del documento HTML como respuesta
  res.end(htmlContent);
});

// Establecer el puerto en el que el servidor escuchará las solicitudes
const port = 3000; // 3000 es el puerto que nosotros le asignamos, puede ser cualquier otro número.
// Iniciar el servidor y escuchar en el puerto especificado
server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
