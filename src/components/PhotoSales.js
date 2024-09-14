import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const PhotoSales = () => {
    const photos = [
        { id: 1, name: 'Foto 1', url: 'https://pics.filmaffinity.com/072142469144940-nm_200.jpg' },
        { id: 2, name: 'Foto 2', url: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/10/03/16963465276286.jpg' },
        { id: 3, name: 'Foto 3', url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Ana_de_Armas_GQ_2018_2.png' },
    ];
    return (_jsxs("div", { children: [_jsx("h1", { children: "Venta de Fotos" }), _jsx("div", { className: "photo-gallery", children: photos.map((photo, index) => (_jsxs("div", { style: { marginBottom: '20px' }, children: [_jsx("img", { src: photo.url, alt: photo.name, style: index === 1 ? { width: '400px', height: '300px' } : { width: '200px', height: '300px' } }), _jsx("button", { children: "Comprar Descarga Digital" }), _jsx("button", { children: "Comprar Impresi\u00F3n F\u00EDsica" })] }, photo.id))) })] }));
};
export default PhotoSales;
