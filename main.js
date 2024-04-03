const obtenerDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    try {
        const response = await fetch(url);
        const data = await response.json();

        data.forEach(element => {
            if(element.id <= 20){
                console.log(element.title);
            }
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