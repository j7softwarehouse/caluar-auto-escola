import { ReactNode } from 'react';
import { AdminState } from '../types';
interface AdminContextType {
    state: AdminState;
    updateState: (newState: Partial<AdminState>) => void;
    updatePromo: (promo: AdminState['promo']) => void;
    updateNumbers: (numbers: AdminState['numbers']) => void;
    updateFaq: (faq: AdminState['faq']) => void;
    isAuthenticated: boolean;
    authenticate: (password: string) => boolean;
    logout: () => void;
}
export declare function AdminProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useAdmin(): AdminContextType;
export {};
//# sourceMappingURL=AdminContext.d.ts.map