import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FashionEvents = () => {
    const events = [
        { id: 1, name: 'Desfile en París', date: '2024-10-20', location: 'París', photo: 'https://imagenes.elpais.com/resizer/v2/NAVJ43663FCF6QNLQSHF7HMKEA.jpg?auth=3fa21dbf7e4d6d7ca915d8db74adfe99b853d8fbbf8f7ebe3ff29aab06052068&width=414' },
        { id: 2, name: 'Semana de la Moda', date: '2024-11-05', location: 'Nueva York', photo: 'https://media.vogue.mx/photos/6201b92804986d29e03edb59/master/pass/013-HunterAbrams_EckhausLatta.jpg' },
    ];
    return (_jsxs("div", { children: [_jsx("h1", { children: "Pr\u00F3ximos Eventos de Moda" }), events.map((event) => (_jsxs("div", { children: [_jsx("img", { src: event.photo, alt: event.name, style: { width: '400px', height: '300px' } }), _jsx("h3", { children: event.name }), _jsxs("p", { children: ["Fecha: ", event.date] }), _jsxs("p", { children: ["Ubicaci\u00F3n: ", event.location] })] }, event.id)))] }));
};
export default FashionEvents;
