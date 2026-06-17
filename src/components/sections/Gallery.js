import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Carousel from '../ui/Carousel';
import Lightbox from '../ui/Lightbox';
export default function Gallery() {
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const images = [
        { src: '/images/gallery-1.jpg', alt: 'Turma Caluar' },
        { src: '/images/gallery-2.jpg', alt: 'Aula Pratica' },
        { src: '/images/gallery-3.jpg', alt: 'Aprovado' },
    ];
    return (_jsx("section", { id: "galeria", className: "py-20 bg-light", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-manrope font-700 mb-12", children: "Nossa Galeria" }), _jsx(Carousel, { itemsPerView: 3, children: images.map((img, idx) => (_jsx("div", { className: "px-2 cursor-pointer", onClick: () => setLightboxIndex(idx), children: _jsx("img", { src: img.src, alt: img.alt, className: "rounded-lg h-64 object-cover w-full" }) }, idx))) }), _jsx(Lightbox, { isOpen: lightboxIndex !== null, onClose: () => setLightboxIndex(null), children: lightboxIndex !== null && (_jsx("img", { src: images[lightboxIndex].src, alt: "Gallery", className: "w-full rounded-lg" })) })] }) }));
}
//# sourceMappingURL=Gallery.js.map