import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const faqs = [
    { q: 'Quanto custa a autoescola?', a: 'Oferecemos pacotes a partir de R$ 1.500. Consulte-nos para detalhes.' },
    { q: 'Quantas aulas preciso?', a: 'Mínimo 20 aulas práticas, conforme legislação DETRAN.' },
    { q: 'Posso parcelar?', a: 'Sim! Oferecemos parcelamento em até 6x sem juros.' },
    { q: 'Qual a taxa de aprovação?', a: 'Nossa taxa é de 95% na primeira tentativa!' },
    { q: 'Vocês têm simulados?', a: 'Sim, inclusos nas aulas e disponíveis on-line 24h.' },
    { q: 'Qual o horário de atendimento?', a: 'Segunda a sábado das 7h às 18h. Domingo fechado.' },
];
export default function Faq() {
    const [open, setOpen] = useState(null);
    return (_jsx("section", { id: "faq", className: "py-20 bg-light", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-manrope font-700 mb-12", children: "Perguntas Frequentes" }), _jsx("div", { className: "space-y-3", children: faqs.map((item, idx) => (_jsxs("div", { className: "bg-white rounded-lg overflow-hidden", children: [_jsxs("button", { onClick: () => setOpen(open === idx ? null : idx), className: "w-full p-4 flex justify-between items-center font-manrope font-700 text-primary hover:bg-light", children: [item.q, _jsx("span", { children: open === idx ? '−' : '+' })] }), open === idx && (_jsx("div", { className: "px-4 pb-4 text-tx-muted", children: item.a }))] }, idx))) })] }) }));
}
//# sourceMappingURL=Faq.js.map