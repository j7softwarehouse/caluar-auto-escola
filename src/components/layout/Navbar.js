import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Button from '../ui/Button';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navLinks = [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Servicos', href: '#servicos' },
        { label: 'Galeria', href: '#galeria' },
        { label: 'Avaliacoes', href: '#avaliacoes' },
        { label: 'Contato', href: '#contato' },
    ];
    return (_jsxs("nav", { className: `fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled
            ? 'bg-primary/95 backdrop-blur-xl shadow-lg py-3'
            : 'bg-white/80 backdrop-blur-xl py-4'}`, children: [_jsxs("div", { className: "max-w-6xl mx-auto px-4 flex items-center justify-between", children: [_jsx("a", { href: "#", className: "text-2xl font-manrope font-800 text-primary", children: "CALUAR" }), _jsx("div", { className: "hidden md:flex items-center gap-8", children: navLinks.map((link) => (_jsx("a", { href: link.href, className: `font-medium transition-colors ${isScrolled ? 'text-white hover:text-accent' : 'text-primary hover:text-accent'}`, children: link.label }, link.label))) }), _jsx("div", { className: "hidden md:block", children: _jsx(Button, { href: "https://wa.me/5531988508599?text=Oi%20Caluar!", variant: "accent", size: "md", children: "Falar no WhatsApp" }) }), _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "md:hidden p-2", "aria-label": "Menu", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16' }) }) })] }), isOpen && (_jsx("div", { className: "md:hidden bg-primary text-white py-4", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 flex flex-col gap-3", children: [navLinks.map((link) => (_jsx("a", { href: link.href, className: "font-medium hover:text-accent", children: link.label }, link.label))), _jsx(Button, { href: "https://wa.me/5531988508599?text=Oi%20Caluar!", variant: "accent", className: "w-full", children: "Falar no WhatsApp" })] }) }))] }));
}
//# sourceMappingURL=Navbar.js.map