async function obtenerDatos() {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    try {
        const response = await fetch(url);
        const data = await response.json();

        data.slice(0, 20).forEach(album => {
            console.log(album.title);
        });

        await enviarMensaje();
    } catch (error) {
        console.log(error);    
    }
}
function enviarMensaje() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Información enviada");
            resolve('Mensaje enviado');
        }, 3000);
    });
}
obtenerDatos();