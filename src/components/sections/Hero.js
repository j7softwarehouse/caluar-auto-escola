import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../ui/Button';
export default function Hero() {
    return (_jsxs("section", { className: "relative min-h-screen flex items-center justify-center pt-20 overflow-hidden", style: {
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }, children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-dark/82 via-primary/65 to-primary/55" }), _jsx("div", { className: "relative z-10 max-w-6xl mx-auto px-4 py-20", children: _jsxs("div", { className: "max-w-2xl", children: [_jsx("div", { className: "inline-block mb-8 px-4 py-2 rounded-full border border-accent text-accent text-sm font-manrope font-600", children: "Desde 2002 em Itabirito/MG" }), _jsx("h1", { className: "text-5xl md:text-6xl font-manrope font-800 text-white mb-6 leading-tight", children: "Sua CNH com quem cuida de voce de verdade" }), _jsx("p", { className: "text-xl font-inter font-300 text-white/80 mb-8 leading-relaxed", children: "Instrutores pacientes, aprovacao real e um atendimento que nao te deixa na mao." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [_jsx(Button, { href: "https://wa.me/5531988508599?text=Quero%20minha%20CNH", variant: "accent", size: "lg", children: "Quero minha CNH" }), _jsx(Button, { href: "#sobre", variant: "outline", size: "lg", children: "Ver categorias" })] }), _jsx("div", { className: "absolute -bottom-20 -right-20 w-96 h-96 border-2 border-accent/30 rounded-full pointer-events-none" })] }) })] }));
}
//# sourceMappingURL=Hero.js.map