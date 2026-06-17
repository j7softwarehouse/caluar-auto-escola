import { ReactNode } from 'react';
interface CarouselProps {
    children: ReactNode[];
    itemsPerView?: 1 | 2 | 3;
    autoPlay?: boolean;
}
export default function Carousel({ children, itemsPerView, autoPlay }: CarouselProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=Carousel.d.ts.map