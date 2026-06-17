# Caluar Auto-Escola — Documentação para Claude Code

## Projeto: Site Institucional Next.js 14

Site responsivo para Caluar Auto-Escola (formação de condutores em Itabirito, MG).

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript (strict mode)
- **Styling:** CSS Modules + Tailwind CSS (conforme padrão J7)
- **Componentes:** Reutilizáveis com variantes
- **Deploy:** Cloudflare Pages (develop→Preview, main→Production)

### 12 Seções da Página (ordem conforme referência)

1. **Navbar** — Menu responsivo com scroll color-change
2. **HeroSection** — Banner principal "Conquiste sua CNH com segurança"
3. **GalleryMiniSection** — Grid de 5 imagens em destaque
4. **DorSection** — "A CNH pareça mais difícil do que deveria?"
5. **ServicesSection** — Serviços/diferenciais em cards
6. **SobreSection** — "Por que escolher Caluar?" com 24 anos de experiência
7. **ProcessSection** — Passo-a-passo do processo (5 etapas)
8. **ReviewsSection** — Carousel de depoimentos (Google Reviews: 4.6★, 131 avaliações)
9. **FAQSection** — Perguntas frequentes (6-8 perguntas)
10. **GalleryFullSection** — Galeria grande com fotos
11. **MapSection** — Localização e informações de contato
12. **Footer** — Links, contato, redes sociais

### Padrões de Código

**Componentes:**
- Usar `'use client'` apenas quando hooks são necessários
- CSS Modules para estilos isolados
- Nomes descritivos: `HeroSection.tsx`, não `Hero.tsx`
- Props tipadas com TypeScript

**Navegação:**
- Anchor IDs: `id="sobre"`, `id="servicos"`, etc.
- Links no navbar usam smooth scrolling
- href="#nome-secao" para links internos

**Imagens:**
- Usar `next/image` com `fill` ou dimensões explícitas
- Salvar em `/public/images`
- Nomes descritivos: `hero-banner.jpg`, `galeria-01.jpg`

**Cores e Espaçamento:**
- Definir tokens em `/src/styles/tokens.css`
- Cores primárias: azul (#003D82), laranja (#FF9500)
- Usar Tailwind para responsive (sm, md, lg, xl)

### Contato da Empresa
- **Telefone:** (31) 3563-3619
- **WhatsApp:** 55 31 3563-3619
- **Endereço:** Rua Domingos Michel, 120, Itabirito, MG
- **Google Reviews:** 4.6⭐ (131 avaliações)
- **Experiência:** 24 anos em formação de condutores

### Git Workflow (CRÍTICO)

```
feature/feature-name → develop (PR → deploy Preview)
         ↓
       develop → main (PR → deploy Production)
```

**REGRA:** Nada vai para main sem passar por develop.

### Referência de Design
- Arquivo: `docs/caluar_hybrid.html` (captura do design)
- Usar como guia visual para layouts, cores e componentes

### Scripts
```bash
npm run dev      # Servidor desenvolvimento
npm run build    # Build produção
npm test         # Testes (Jest + React Testing Library)
npm run lint     # ESLint
```

---

**Inicie criando:**
1. `package.json` com dependências
2. `tsconfig.json` e `next.config.js`
3. Layout base (app/layout.tsx, app/page.tsx)
4. Navbar e Footer
5. Seções uma a uma
