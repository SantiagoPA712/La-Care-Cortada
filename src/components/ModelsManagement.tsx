import React, { useState } from 'react';

type Model = {
  id: number;
  name: string;
  photos: string[];
  portfolio: string;
  bookingInfo: string;
};

const ModelsManagement: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [newModel, setNewModel] = useState<Model>({
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

  return (
    <div>
      <h1>Gestión de Modelos</h1>
      <ul>
        {models.map((model) => (
          <li key={model.id}>
            <h3>{model.name}</h3>
            <p>{model.portfolio}</p>
            <p>{model.bookingInfo}</p>
          </li>
        ))}
      </ul>
      <h2>Agregar Nuevo Modelo</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Nombre del Modelo"
          value={newModel.name}
          onChange={(e) => setNewModel({ ...newModel, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Portafolio"
          value={newModel.portfolio}
          onChange={(e) => setNewModel({ ...newModel, portfolio: e.target.value })}
        />
        <input
          type="text"
          placeholder="Información de Reserva"
          value={newModel.bookingInfo}
          onChange={(e) => setNewModel({ ...newModel, bookingInfo: e.target.value })}
        />
        <button type="button" onClick={addModel}>
          Agregar Modelo
        </button>
      </form>
    </div>
  );
};

export default ModelsManagement;
