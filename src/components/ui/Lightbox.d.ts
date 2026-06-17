import { ReactNode } from 'react';
interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
export default function Lightbox({ isOpen, onClose, children }: LightboxProps): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=Lightbox.d.ts.map