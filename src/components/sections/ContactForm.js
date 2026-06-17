import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Button from '../ui/Button';
export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = `Olá! Meu nome é ${formData.name}. Email: ${formData.email} | Tel: ${formData.phone}. ${formData.message}`;
        const waLink = `https://wa.me/5531988508599?text=${encodeURIComponent(msg)}`;
        window.open(waLink, '_blank');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };
    return (_jsx("section", { id: "contato", className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-manrope font-700 mb-12", children: "Entre em Contato" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("input", { type: "text", placeholder: "Seu nome", required: true, className: "w-full p-4 border border-gray-300 rounded-lg", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }) }), _jsx("input", { type: "email", placeholder: "seu@email.com", required: true, className: "w-full p-4 border border-gray-300 rounded-lg", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }) }), _jsx("input", { type: "tel", placeholder: "(31) 9 9999-9999", className: "w-full p-4 border border-gray-300 rounded-lg", value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }) }), _jsx("textarea", { placeholder: "Sua mensagem", rows: 5, className: "w-full p-4 border border-gray-300 rounded-lg", value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }) }), _jsx(Button, { type: "submit", variant: "accent", size: "lg", className: "w-full", children: "Enviar via WhatsApp" })] })] }) }));
}
//# sourceMappingURL=ContactForm.js.map