import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from '../ui/Card';
const services = [
    { title: 'CNH A', desc: 'Motocicletas e motonetas' },
    { title: 'CNH B', desc: 'Carros de passeio' },
    { title: 'CNH AB', desc: 'Moto e carro juntos' },
    { title: 'CNH C', desc: 'Caminhoes' },
    { title: 'CNH D', desc: 'Onibus' },
    { title: 'CNH E', desc: 'Carretas' },
    { title: 'Reciclagem', desc: 'Renovacao de CNH' },
];
export default function Services() {
    return (_jsx("section", { id: "servicos", className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-manrope font-700 mb-12", children: "Todas as Categorias" }), _jsx("div", { className: "grid md:grid-cols-3 gap-6", children: services.map((srv, idx) => (_jsxs(Card, { children: [_jsx("h3", { className: "text-xl font-manrope font-700 text-primary mb-2", children: srv.title }), _jsx("p", { className: "text-tx-muted text-sm", children: srv.desc })] }, idx))) })] }) }));
}
//# sourceMappingURL=Services.js.map