async function obtenerDatos() {
    const url = 'https://jsonplaceholder.typicode.com/photos'; // Aquí debes poner la URL de tu API
  
    try {
      // Utilizamos la variable url en la función fetch para hacer la solicitud a la API
      const response = await fetch(url);
      const data = await response.json();
      
      // Iteramos sobre los primeros 20 títulos de álbumes y los mostramos
      data.slice(0, 20).forEach(album => {
        console.log(album.title);
      });
  
      // Llamamos a la función para enviar el mensaje después de 3 segundos
      await enviarMensaje();
    } catch (error) {
      // Manejamos cualquier error que pueda ocurrir al hacer la solicitud a la API
      console.error('Error al obtener los datos:', error);
    }
  }
  
  // Función para enviar el mensaje después de 3 segundos
  function enviarMensaje() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
        console.log("Información enviada");
           resolve('Mensaje enviado');
       }, 3000);
   });
  }
  
  // Llamamos a la función principal
  obtenerDatos();