import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Carousel from '../ui/Carousel';
const reviews = [
    { name: 'João Silva', text: 'Excelente escola! Aprovei na primeira chance.', rating: 5 },
    { name: 'Maria Santos', text: 'Instrutores muito pacientes e atentos.', rating: 5 },
    { name: 'Pedro Costa', text: 'Prático e teórico de qualidade. Recomendo!', rating: 5 },
    { name: 'Ana Oliveira', text: 'Melhor experiência que tive. Caluar é top!', rating: 5 },
];
function StarRating({ rating }) {
    return (_jsx("div", { className: "flex gap-1", children: [...Array(5)].map((_, i) => (_jsx("span", { className: i < rating ? 'text-accent' : 'text-gray-300', children: "\u2605" }, i))) }));
}
export default function Reviews() {
    return (_jsx("section", { id: "avaliacoes", className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-manrope font-700 mb-12", children: "Avalia\u00E7\u00F5es de Alunos" }), _jsx(Carousel, { itemsPerView: 3, children: reviews.map((rev, idx) => (_jsx("div", { className: "px-2", children: _jsxs("div", { className: "bg-light p-6 rounded-lg h-full", children: [_jsx(StarRating, { rating: rev.rating }), _jsx("p", { className: "text-tx-muted mt-3 mb-4", children: rev.text }), _jsx("p", { className: "font-manrope font-700 text-primary", children: rev.name })] }) }, idx))) })] }) }));
}
//# sourceMappingURL=Reviews.js.map