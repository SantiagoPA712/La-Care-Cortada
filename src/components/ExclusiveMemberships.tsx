import React from 'react';

const ExclusiveMemberships: React.FC = () => {
  return (
    <div>
      <h1>Membresías Exclusivas</h1>
      <h2>Niveles de Membresía</h2>
      <ul>
        <li>Gratis - Acceso a contenido básico</li>
        <li>Silver - Acceso a contenido exclusivo y eventos</li>
        <li>Gold - Descuentos en productos y acceso VIP</li>
      </ul>
      <button>Regístrate</button>
      <button>Iniciar Sesión</button>
    </div>
  );
};

export default ExclusiveMemberships;
