import React from 'react';

const PhotoSales: React.FC = () => {
  const photos = [
    { id: 1, name: 'Foto 1', url: 'https://pics.filmaffinity.com/072142469144940-nm_200.jpg' },
    { id: 2, name: 'Foto 2', url: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/10/03/16963465276286.jpg' },
    { id: 3, name: 'Foto 3', url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Ana_de_Armas_GQ_2018_2.png' },
  ];

  return (
    <div>
      <h1>Venta de Fotos</h1>
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <div key={photo.id} style={{ marginBottom: '20px' }}>
            <img 
              src={photo.url} 
              alt={photo.name} 
              style={index === 1 ? { width: '400px', height: '300px' } : { width: '200px', height: '300px' }} 
            />
            <button>Comprar Descarga Digital</button>
            <button>Comprar Impresión Física</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSales;
