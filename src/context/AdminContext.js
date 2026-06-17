import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const AdminContext = createContext(undefined);
const DEFAULT_STATE = {
    promo: {
        active: false,
        title: 'Oferta Especial!',
        text: 'Aproveite 20% de desconto em matrícula este mês',
        ctaLabel: 'Quero aproveitar',
        ctaLink: 'https://wa.me/5531988508599',
    },
    numbers: [23, 5000, 49, 6],
    faq: [
        {
            question: 'Quais categorias de CNH a Caluar oferece?',
            answer: 'Oferecemos todas as categorias: A, B, AB, C, D, E, além de reciclagem e CNH Brasil.',
        },
    ],
    gallery: [],
};
export function AdminProvider({ children }) {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('caluar_cms');
        return saved ? JSON.parse(saved) : DEFAULT_STATE;
    });
    const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem('admin_auth') === 'true');
    const updateState = (newState) => {
        setState((prev) => {
            const updated = { ...prev, ...newState };
            localStorage.setItem('caluar_cms', JSON.stringify(updated));
            return updated;
        });
    };
    const authenticate = (password) => {
        if (password === 'caluar2026') {
            setIsAuthenticated(true);
            sessionStorage.setItem('admin_auth', 'true');
            return true;
        }
        return false;
    };
    const updatePromo = (promo) => {
        updateState({ promo });
    };
    const updateNumbers = (numbers) => {
        updateState({ numbers });
    };
    const updateFaq = (faq) => {
        updateState({ faq });
    };
    const logout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('admin_auth');
    };
    return (_jsx(AdminContext.Provider, { value: { state, updateState, updatePromo, updateNumbers, updateFaq, isAuthenticated, authenticate, logout }, children: children }));
}
export function useAdmin() {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useAdmin deve ser usado dentro de AdminProvider');
    }
    return context;
}
//# sourceMappingURL=AdminContext.js.map