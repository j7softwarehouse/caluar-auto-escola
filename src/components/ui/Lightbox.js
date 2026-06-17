import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
export default function Lightbox({ isOpen, onClose, children }) {
    useEffect(() => {
        if (!isOpen)
            return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape')
                onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm", onClick: onClose, children: _jsxs("div", { className: "relative max-w-4xl w-full mx-4", onClick: (e) => e.stopPropagation(), children: [children, _jsx("button", { onClick: onClose, className: "absolute -top-10 right-0 text-white hover:text-accent transition-colors", "aria-label": "Fechar", children: _jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })] }) }));
}
//# sourceMappingURL=Lightbox.js.map