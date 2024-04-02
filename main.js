const obtenerDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    try {
        const response = await fetch(url);
        const data = await response.json();

        data.slice(0, 20).forEach(album => {
            console.log(album.title);
        });

        await infoEnviada();
    } catch (error) {
        console.log(error);
    }
}

const enviarMensaje = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Información enviada');
        }, 3000);
    });
}
const infoEnviada = async () => {
    const info = await enviarMensaje();
    console.log(info);
}
obtenerDatos();