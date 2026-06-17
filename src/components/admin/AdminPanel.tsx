import { useState } from 'react'
import { useAdmin } from '../../context/AdminContext'
import Button from '../ui/Button'

interface AdminPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const { state, updatePromo, updateNumbers, updateFaq } = useAdmin()
  const [tab, setTab] = useState<'promo' | 'numbers' | 'faq'>('promo')
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  const handleAuth = () => {
    if (password === 'caluar2026') {
      setAuthenticated(true)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="absolute right-0 top-0 h-full w-96 bg-white shadow-lg flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-primary text-white flex justify-between items-center">
          <h2 className="font-manrope font-700">Admin CMS</h2>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        {!authenticated ? (
          <div className="p-6 flex flex-col gap-4">
            <p>Acesso protegido por senha</p>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded"
            />
            <Button onClick={handleAuth} variant="primary" size="md">
              Acessar
            </Button>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex gap-2 p-4 bg-light">
              <button
                onClick={() => setTab('promo')}
                className={`px-3 py-2 text-sm font-700 rounded ${
                  tab === 'promo' ? 'bg-primary text-white' : 'bg-white'
                }`}
              >
                Promo
              </button>
              <button
                onClick={() => setTab('numbers')}
                className={`px-3 py-2 text-sm font-700 rounded ${
                  tab === 'numbers' ? 'bg-primary text-white' : 'bg-white'
                }`}
              >
                Numbers
              </button>
              <button
                onClick={() => setTab('faq')}
                className={`px-3 py-2 text-sm font-700 rounded ${
                  tab === 'faq' ? 'bg-primary text-white' : 'bg-white'
                }`}
              >
                FAQ
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {tab === 'promo' && (
                <div className="space-y-4">
                  <label>
                    <span className="block text-sm font-700 mb-2">Ativar promo</span>
                    <input
                      type="checkbox"
                      checked={state.promo.active}
                      onChange={(e) =>
                        updatePromo({ ...state.promo, active: e.target.checked })
                      }
                    />
                  </label>
                  <label>
                    <span className="block text-sm font-700 mb-2">Título</span>
                    <input
                      type="text"
                      value={state.promo.title}
                      onChange={(e) =>
                        updatePromo({ ...state.promo, title: e.target.value })
                      }
                      className="w-full border p-2 rounded text-sm"
                    />
                  </label>
                  <label>
                    <span className="block text-sm font-700 mb-2">Texto</span>
                    <textarea
                      value={state.promo.text}
                      onChange={(e) =>
                        updatePromo({ ...state.promo, text: e.target.value })
                      }
                      className="w-full border p-2 rounded text-sm h-20"
                    />
                  </label>
                </div>
              )}

              {tab === 'numbers' && (
                <div className="space-y-4 text-sm">
                  <p>Estatísticas — atualizadas em localStorage</p>
                  {state.numbers.map((num, idx) => (
                    <div key={idx} className="border-b pb-3">
                      <input
                        type="number"
                        value={num}
                        onChange={(e) => {
                          const newNums = [...state.numbers]
                          newNums[idx] = parseInt(e.target.value)
                          updateNumbers(newNums)
                        }}
                        className="w-full border p-2 rounded text-sm"
                      />
                    </div>
                  ))}
                </div>
              )}

              {tab === 'faq' && (
                <div className="space-y-4 text-sm">
                  <p>FAQ — adicione/remova perguntas</p>
                  {state.faq.map((item, idx) => (
                    <div key={idx} className="border-b pb-3">
                      <input
                        type="text"
                        placeholder="Pergunta"
                        value={item.question}
                        onChange={(e) => {
                          const newFaq = [...state.faq]
                          newFaq[idx].question = e.target.value
                          updateFaq(newFaq)
                        }}
                        className="w-full border p-2 rounded text-sm mb-2"
                      />
                      <textarea
                        placeholder="Resposta"
                        value={item.answer}
                        onChange={(e) => {
                          const newFaq = [...state.faq]
                          newFaq[idx].answer = e.target.value
                          updateFaq(newFaq)
                        }}
                        className="w-full border p-2 rounded text-sm h-16"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
