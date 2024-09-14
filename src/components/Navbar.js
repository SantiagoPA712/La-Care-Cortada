import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (_jsx("nav", { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/", children: "Inicio" }) }), _jsx("li", { children: _jsx(Link, { to: "/models", children: "Modelos" }) }), _jsx("li", { children: _jsx(Link, { to: "/products", children: "Productos" }) }), _jsx("li", { children: _jsx(Link, { to: "/events", children: "Eventos" }) }), _jsx("li", { children: _jsx(Link, { to: "/photos", children: "Fotos" }) }), _jsx("li", { children: _jsx(Link, { to: "/memberships", children: "Membres\u00EDas" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", children: "Contacto" }) }), _jsx("li", { children: _jsx(Link, { to: "/admin", children: "Admin" }) })] }) }));
};
export default Navbar;
