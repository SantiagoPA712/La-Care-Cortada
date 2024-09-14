import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ModelsManagement from './components/ModelsManagement';
import MakeupProducts from './components/MakeupProducts';
import FashionEvents from './components/FashionEvents';
import PhotoSales from './components/PhotoSales';
import ExclusiveMemberships from './components/ExclusiveMemberships';
import ContactUs from './components/ContactUs';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';
const App = () => {
    return (_jsxs(Router, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/models", element: _jsx(ModelsManagement, {}) }), _jsx(Route, { path: "/products", element: _jsx(MakeupProducts, {}) }), _jsx(Route, { path: "/events", element: _jsx(FashionEvents, {}) }), _jsx(Route, { path: "/photos", element: _jsx(PhotoSales, {}) }), _jsx(Route, { path: "/memberships", element: _jsx(ExclusiveMemberships, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactUs, {}) }), _jsx(Route, { path: "/admin", element: _jsx(AdminDashboard, {}) })] })] }));
};
export default App;
