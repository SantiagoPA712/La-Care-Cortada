import React from 'react';

const HomePage: React.FC = () => {
  const featuredModels = [
    { id: 1, name: 'Margot Robbie', photo: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2015/03/26/14273744425472.jpg' },
    { id: 2, name: 'Ana de Armas', photo: 'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2020/04/30/5fa8fc64578a2.jpeg' },
    { id: 3, name: 'Dua Lipa', photo: 'https://media.vogue.es/photos/604eac6cec6186bd86ec93ad/master/w_1600%2Cc_limit/1307102174' },
  ];

  const popularProducts = [
    { id: 1, name: 'Labial Rojo', price: 10, photo: 'https://img.freepik.com/vector-premium/lapiz-labial-rojo-aislado-fondo-blanco_103688-192.jpg?w=360' },
    { id: 2, name: 'Base Clara', price: 20, photo: 'https://www.llamamebelleza.com/storage/images/image?remote=https%3A%2F%2Fwww.llamamebelleza.com%2FWebRoot%2FStoreES%2FShops%2F90521409%2F6000%2F4AD6%2F6C81%2FBE05%2F12E7%2F0A0C%2F6D12%2F793E%2FBASE-T1.jpg&shop=90521409&width=600&height=2560' },
    { id: 3, name: 'Sombra Oscura', price: 30, photo: 'https://www.cosmeticosvogue.com.co/-/media/project/loreal/brand-sites/vogue/master/latam/products/ojos/listing/sombras20individuales/negra/sombra-_pdp_desktop_-main_350x350_negra.png' },
  ];

  const upcomingEvents = [
    { id: 1, name: 'Desfile en París', date: '2024-10-20', location: 'París', photo: 'https://imagenes.elpais.com/resizer/v2/4LIPTU2KOBGGBJZHNB76OU3GBQ.jpg?auth=06917e3e485e9b7a7715e32c243b33920b1c0a929a4631ea82f66f5b770ec5c3&width=414' },
    { id: 2, name: 'Semana de la Moda', date: '2024-11-05', location: 'Nueva York', photo: 'https://fotografias.larazon.es/clipping/cmsimages01/2024/02/12/24DEF973-E189-43F8-B923-C705C6668015/98.jpg?crop=4650,2616,x0,y242&width=1900&height=1069&optimize=low&format=webply' },
  ];

  return (
    <div>
      <h1>Bienvenidos a La Care Cortada</h1>
      <p>Andrea Mesa presenta su exclusivo imperio de moda y maquillaje.</p>

     
      <section>
        <h2>Modelos Destacados</h2>
        <div className="featured-models" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {featuredModels.map((model) => (
            <div key={model.id} style={{ textAlign: 'center' }}>
              <img src={model.photo} alt={model.name} style={{ width: '150px', height: '200px', objectFit: 'cover' }} />
              <p>{model.name}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section>
        <h2>Productos Populares</h2>
        <div className="popular-products" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {popularProducts.map((product) => (
            <div key={product.id} style={{ textAlign: 'center' }}>
              <img src={product.photo} alt={product.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
              <p>{product.name}</p>
              <p>Precio: ${product.price}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section>
        <h2>Próximos Eventos</h2>
        <div className="upcoming-events" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {upcomingEvents.map((event) => (
            <div key={event.id} style={{ textAlign: 'center' }}>
              <img src={event.photo} alt={event.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
              <p>{event.name}</p>
              <p>Fecha: {event.date}</p>
              <p>Ubicación: {event.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
