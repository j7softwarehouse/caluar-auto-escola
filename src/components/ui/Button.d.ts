import { ReactNode } from 'react';
interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'accent' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}
export default function Button({ children, variant, size, href, onClick, className, type, }: ButtonProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map