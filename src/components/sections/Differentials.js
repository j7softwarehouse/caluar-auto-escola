import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
const items = [
    { title: 'Instrutores Pacientes', desc: 'Cada aluno tem seu tempo. Ensino com calma.' },
    { title: 'Aprovacao Garantida', desc: 'Metodologia focada em confianca e preparacao.' },
    { title: 'Parcelamento Facil', desc: 'Opcoes que cabem no seu bolso.' },
    { title: 'Atendimento Humano', desc: 'Do primeiro contato ate a sua CNH.' },
];
export default function Differentials() {
    const ref = useIntersectionObserver();
    return (_jsx("section", { ref: ref, className: "fade-in py-20 bg-white", children: _jsx("div", { className: "max-w-6xl mx-auto px-4", children: _jsx("div", { className: "grid md:grid-cols-4 gap-6", children: items.map((item, idx) => (_jsxs("div", { className: "p-6 rounded-lg bg-light hover:shadow-lg transition-shadow group", children: [_jsx("div", { className: "h-1 bg-accent w-0 group-hover:w-full transition-all rounded-full mb-4" }), _jsx("h3", { className: "font-manrope font-700 text-primary mb-2", children: item.title }), _jsx("p", { className: "text-sm text-tx-muted", children: item.desc })] }, idx))) }) }) }));
}
//# sourceMappingURL=Differentials.js.map