import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import Button from './Button';
export default function PromoPopup() {
    const { state } = useAdmin();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (!state.promo.active)
            return;
        if (sessionStorage.getItem('promo_shown'))
            return;
        const timer = setTimeout(() => {
            setIsOpen(true);
            sessionStorage.setItem('promo_shown', 'true');
        }, 2000);
        return () => clearTimeout(timer);
    }, [state.promo.active]);
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm", children: _jsxs("div", { className: "bg-white rounded-lg p-8 max-w-md mx-4 text-center", children: [_jsx("h2", { className: "text-3xl font-manrope font-700 mb-4 text-dark", children: state.promo.title }), _jsx("p", { className: "text-tx-muted mb-6 text-lg", children: state.promo.text }), _jsxs("div", { className: "flex gap-4", children: [_jsx(Button, { href: state.promo.ctaLink, variant: "accent", size: "lg", className: "flex-1", children: state.promo.ctaLabel }), _jsx(Button, { onClick: () => setIsOpen(false), variant: "outline", size: "lg", className: "flex-1", children: "Depois" })] })] }) }));
}
//# sourceMappingURL=PromoPopup.js.map