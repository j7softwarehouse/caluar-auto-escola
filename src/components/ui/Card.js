import { jsx as _jsx } from "react/jsx-runtime";
export default function Card({ children, className = '', href }) {
    const baseStyles = 'bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300';
    const classes = `${baseStyles} ${className}`;
    if (href) {
        return (_jsx("a", { href: href, className: classes, children: children }));
    }
    return _jsx("div", { className: classes, children: children });
}
//# sourceMappingURL=Card.js.map