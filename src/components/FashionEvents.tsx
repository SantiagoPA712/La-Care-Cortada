import React from 'react';

const FashionEvents: React.FC = () => {
  const events = [
    { id: 1, name: 'Desfile en París', date: '2024-10-20', location: 'París', photo: 'https://imagenes.elpais.com/resizer/v2/NAVJ43663FCF6QNLQSHF7HMKEA.jpg?auth=3fa21dbf7e4d6d7ca915d8db74adfe99b853d8fbbf8f7ebe3ff29aab06052068&width=414' },
    { id: 2, name: 'Semana de la Moda', date: '2024-11-05', location: 'Nueva York', photo: 'https://media.vogue.mx/photos/6201b92804986d29e03edb59/master/pass/013-HunterAbrams_EckhausLatta.jpg' },
  ];

  return (
    <div>
      <h1>Próximos Eventos de Moda</h1>
      {events.map((event) => (
        <div key={event.id}>
          <img src={event.photo} alt={event.name} style={{ width: '400px', height: '300px' }} />
          <h3>{event.name}</h3>
          <p>Fecha: {event.date}</p>
          <p>Ubicación: {event.location}</p>
        </div>
      ))}
    </div>
  );
};

export default FashionEvents;
