import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import Button from '../ui/Button';
export default function AdminPanel({ isOpen, onClose }) {
    const { state, updatePromo, updateNumbers, updateFaq } = useAdmin();
    const [tab, setTab] = useState('promo');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const handleAuth = () => {
        if (password === 'caluar2026') {
            setAuthenticated(true);
        }
    };
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm", onClick: onClose, children: _jsxs("div", { className: "absolute right-0 top-0 h-full w-96 bg-white shadow-lg flex flex-col overflow-hidden", onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "p-4 bg-primary text-white flex justify-between items-center", children: [_jsx("h2", { className: "font-manrope font-700", children: "Admin CMS" }), _jsx("button", { onClick: onClose, className: "text-xl", children: "\u2715" })] }), !authenticated ? (_jsxs("div", { className: "p-6 flex flex-col gap-4", children: [_jsx("p", { children: "Acesso protegido por senha" }), _jsx("input", { type: "password", placeholder: "Senha", value: password, onChange: (e) => setPassword(e.target.value), className: "border p-2 rounded" }), _jsx(Button, { onClick: handleAuth, variant: "primary", size: "md", children: "Acessar" })] })) : (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex gap-2 p-4 bg-light", children: [_jsx("button", { onClick: () => setTab('promo'), className: `px-3 py-2 text-sm font-700 rounded ${tab === 'promo' ? 'bg-primary text-white' : 'bg-white'}`, children: "Promo" }), _jsx("button", { onClick: () => setTab('numbers'), className: `px-3 py-2 text-sm font-700 rounded ${tab === 'numbers' ? 'bg-primary text-white' : 'bg-white'}`, children: "Numbers" }), _jsx("button", { onClick: () => setTab('faq'), className: `px-3 py-2 text-sm font-700 rounded ${tab === 'faq' ? 'bg-primary text-white' : 'bg-white'}`, children: "FAQ" })] }), _jsxs("div", { className: "flex-1 overflow-y-auto p-4", children: [tab === 'promo' && (_jsxs("div", { className: "space-y-4", children: [_jsxs("label", { children: [_jsx("span", { className: "block text-sm font-700 mb-2", children: "Ativar promo" }), _jsx("input", { type: "checkbox", checked: state.promo.active, onChange: (e) => updatePromo({ ...state.promo, active: e.target.checked }) })] }), _jsxs("label", { children: [_jsx("span", { className: "block text-sm font-700 mb-2", children: "T\u00EDtulo" }), _jsx("input", { type: "text", value: state.promo.title, onChange: (e) => updatePromo({ ...state.promo, title: e.target.value }), className: "w-full border p-2 rounded text-sm" })] }), _jsxs("label", { children: [_jsx("span", { className: "block text-sm font-700 mb-2", children: "Texto" }), _jsx("textarea", { value: state.promo.text, onChange: (e) => updatePromo({ ...state.promo, text: e.target.value }), className: "w-full border p-2 rounded text-sm h-20" })] })] })), tab === 'numbers' && (_jsxs("div", { className: "space-y-4 text-sm", children: [_jsx("p", { children: "Estat\u00EDsticas \u2014 atualizadas em localStorage" }), state.numbers.map((num, idx) => (_jsx("div", { className: "border-b pb-3", children: _jsx("input", { type: "number", value: num, onChange: (e) => {
                                                    const newNums = [...state.numbers];
                                                    newNums[idx] = parseInt(e.target.value);
                                                    updateNumbers(newNums);
                                                }, className: "w-full border p-2 rounded text-sm" }) }, idx)))] })), tab === 'faq' && (_jsxs("div", { className: "space-y-4 text-sm", children: [_jsx("p", { children: "FAQ \u2014 adicione/remova perguntas" }), state.faq.map((item, idx) => (_jsxs("div", { className: "border-b pb-3", children: [_jsx("input", { type: "text", placeholder: "Pergunta", value: item.question, onChange: (e) => {
                                                        const newFaq = [...state.faq];
                                                        newFaq[idx].question = e.target.value;
                                                        updateFaq(newFaq);
                                                    }, className: "w-full border p-2 rounded text-sm mb-2" }), _jsx("textarea", { placeholder: "Resposta", value: item.answer, onChange: (e) => {
                                                        const newFaq = [...state.faq];
                                                        newFaq[idx].answer = e.target.value;
                                                        updateFaq(newFaq);
                                                    }, className: "w-full border p-2 rounded text-sm h-16" })] }, idx)))] }))] })] }))] }) }));
}
//# sourceMappingURL=AdminPanel.js.map