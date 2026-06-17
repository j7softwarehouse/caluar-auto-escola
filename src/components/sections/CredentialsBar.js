import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
const labels = ['Anos de experiencia', 'Alunos formados', 'Nota no Google', 'Categorias'];
const suffixes = ['+', '+', '', ''];
export default function CredentialsBar() {
    const { state } = useAdmin();
    const ref = useIntersectionObserver();
    const [counts, setCounts] = useState({});
    useEffect(() => {
        if (!ref.current?.classList.contains('is-visible'))
            return;
        state.numbers.forEach((target, idx) => {
            const interval = setInterval(() => {
                setCounts((prev) => {
                    const current = prev[idx] || 0;
                    const next = Math.min(current + Math.ceil(target / 50), target);
                    if (next >= target)
                        clearInterval(interval);
                    return { ...prev, [idx]: next };
                });
            }, 30);
        });
    }, [ref.current?.classList.contains('is-visible'), state.numbers]);
    return (_jsx("section", { ref: ref, className: "fade-in bg-primary text-white py-16", children: _jsx("div", { className: "max-w-6xl mx-auto px-4", children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: state.numbers.map((_, idx) => (_jsxs("div", { className: "text-center", children: [_jsxs("div", { className: "text-4xl md:text-5xl font-manrope font-800 text-accent mb-2", children: [counts[idx] || 0, suffixes[idx]] }), _jsx("p", { className: "text-sm md:text-base text-white/80", children: labels[idx] })] }, idx))) }) }) }));
}
//# sourceMappingURL=CredentialsBar.js.map