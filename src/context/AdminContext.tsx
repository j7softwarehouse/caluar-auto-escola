import { createContext, useContext, useState, ReactNode } from 'react'
import { AdminState } from '../types'

interface AdminContextType {
  state: AdminState
  updateState: (newState: Partial<AdminState>) => void
  updatePromo: (promo: AdminState['promo']) => void
  updateNumbers: (numbers: AdminState['numbers']) => void
  updateFaq: (faq: AdminState['faq']) => void
  isAuthenticated: boolean
  authenticate: (password: string) => boolean
  logout: () => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

const DEFAULT_STATE: AdminState = {
  promo: {
    active: false,
    title: 'Oferta Especial!',
    text: 'Aproveite 20% de desconto em matrícula este mês',
    ctaLabel: 'Quero aproveitar',
    ctaLink: 'https://wa.me/5531988508599',
  },
  numbers: [24, 46, 4],
  faq: [
    {
      question: 'Quais categorias de CNH a Caluar oferece?',
      answer: 'Oferecemos todas as categorias: A, B, AB, C, D, E, além de reciclagem e CNH Brasil.',
    },
  ],
  gallery: [],
}

export function AdminProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AdminState>(() => {
    const saved = localStorage.getItem('caluar_cms')
    return saved ? JSON.parse(saved) : DEFAULT_STATE
  })

  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('admin_auth') === 'true'
  )

  const updateState = (newState: Partial<AdminState>) => {
    setState((prev) => {
      const updated = { ...prev, ...newState }
      localStorage.setItem('caluar_cms', JSON.stringify(updated))
      return updated
    })
  }

  const authenticate = (password: string) => {
    if (password === 'caluar2026') {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_auth', 'true')
      return true
    }
    return false
  }

  const updatePromo = (promo: AdminState['promo']) => {
    updateState({ promo })
  }

  const updateNumbers = (numbers: AdminState['numbers']) => {
    updateState({ numbers })
  }

  const updateFaq = (faq: AdminState['faq']) => {
    updateState({ faq })
  }

  const logout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('admin_auth')
  }

  return (
    <AdminContext.Provider
      value={{ state, updateState, updatePromo, updateNumbers, updateFaq, isAuthenticated, authenticate, logout }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin deve ser usado dentro de AdminProvider')
  }
  return context
}
