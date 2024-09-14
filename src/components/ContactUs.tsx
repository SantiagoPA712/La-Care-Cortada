import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div>
      <h1>Contáctanos</h1>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <textarea placeholder="Mensaje"></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
