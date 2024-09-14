import React, { useState } from 'react';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
};

const MakeupProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Labial Rojo', description: 'Desata tu poder con este labial rojo intenso que dura todo el día. Perfecto para una noche de glamour, su fórmula hidratante te acompañará hasta el amanecer.', price: 10, category: 'Labiales' },
    { id: 2, name: 'Labial Rosa', description: 'Añade un toque de dulzura con este labial rosa suave, diseñado para realzar tu belleza natural con una textura ligera que abraza tus labios con un acabado sedoso.', price: 10, category: 'Labiales' },
    { id: 3, name: 'Labial Café', description: 'El labial café ideal para un look sofisticado y moderno. Con su acabado mate aterciopelado, aporta una elegancia discreta pero imponente.', price: 10, category: 'Labiales' },
    { id: 4, name: 'Base Clara', description: 'La base líquida que ilumina tu rostro con un acabado radiante. Su textura ligera se funde perfectamente con tu piel, dejándola suave y uniforme sin esfuerzo.', price: 20, category: 'Bases' },
    { id: 5, name: 'Base Tenue', description: 'Dale a tu piel el resplandor perfecto con esta base sólida que ofrece una cobertura impecable y duradera. Su fórmula transpirable la hace ideal para todo el día.', price: 30, category: 'Bases' },
    { id: 6, name: 'Base Oscura', description: 'Eleva tu maquillaje con esta base líquida en tono oscuro, diseñada para dar profundidad y definición a tu piel, mientras mantiene un acabado natural y luminoso.', price: 20, category: 'Bases' },
    { id: 7, name: 'Sombra Clara', description: 'Ilumina tu mirada con esta sombra clara que aporta un brillo sutil. Ideal para un look fresco y natural, su fórmula suave se desliza con facilidad, realzando tus ojos.', price: 20, category: 'Sombras' },
    { id: 8, name: 'Sombra Oscura', description: 'Crea un look dramático y audaz con esta sombra oscura, perfecta para un smokey eye intenso. Su fórmula de larga duración garantiza una mirada impactante durante horas.', price: 30, category: 'Sombras' },
    { id: 9, name: 'Sombra Opaca', description: 'Para un look clásico y sofisticado, esta sombra opaca es tu aliada. Su acabado mate realza la profundidad de tus ojos, ofreciendo una cobertura suave y uniforme.', price: 25, category: 'Sombras' }
  ]);

  const [filter, setFilter] = useState<string>('Todos');

  const filteredProducts = products.filter((product) => filter === 'Todos' || product.category === filter);

  return (
    <div>
      <h1>Catálogo de Productos</h1>

      <label>Filtrar por categoría: </label>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="Todos">Todos</option>
        <option value="Labiales">Labiales</option>
        <option value="Bases">Bases</option>
        <option value="Sombras">Sombras</option>
      </select>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MakeupProducts;
