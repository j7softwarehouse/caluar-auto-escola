import { jsx as _jsx } from "react/jsx-runtime";
export default function Button({ children, variant = 'accent', size = 'md', href, onClick, className = '', type = 'button', }) {
    const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap hover:scale-105 active:scale-95';
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-mid',
        accent: 'bg-accent text-dark hover:bg-yellow-400',
        outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-dark',
    };
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    if (href) {
        return (_jsx("a", { href: href, target: "_blank", rel: "noopener noreferrer", className: classes, children: children }));
    }
    return (_jsx("button", { type: type, onClick: onClick, className: classes, children: children }));
}
//# sourceMappingURL=Button.js.map