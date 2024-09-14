import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const ModelsManagement = () => {
    const [models, setModels] = useState([]);
    const [newModel, setNewModel] = useState({
        id: models.length + 1,
        name: '',
        photos: [],
        portfolio: '',
        bookingInfo: '',
    });
    const addModel = () => {
        setModels([...models, newModel]);
        setNewModel({ id: models.length + 1, name: '', photos: [], portfolio: '', bookingInfo: '' });
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "Gesti\u00F3n de Modelos" }), _jsx("ul", { children: models.map((model) => (_jsxs("li", { children: [_jsx("h3", { children: model.name }), _jsx("p", { children: model.portfolio }), _jsx("p", { children: model.bookingInfo })] }, model.id))) }), _jsx("h2", { children: "Agregar Nuevo Modelo" }), _jsxs("form", { onSubmit: (e) => e.preventDefault(), children: [_jsx("input", { type: "text", placeholder: "Nombre del Modelo", value: newModel.name, onChange: (e) => setNewModel({ ...newModel, name: e.target.value }) }), _jsx("input", { type: "text", placeholder: "Portafolio", value: newModel.portfolio, onChange: (e) => setNewModel({ ...newModel, portfolio: e.target.value }) }), _jsx("input", { type: "text", placeholder: "Informaci\u00F3n de Reserva", value: newModel.bookingInfo, onChange: (e) => setNewModel({ ...newModel, bookingInfo: e.target.value }) }), _jsx("button", { type: "button", onClick: addModel, children: "Agregar Modelo" })] })] }));
};
export default ModelsManagement;
