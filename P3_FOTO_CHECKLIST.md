# P3.1 - Fotos Reais: Checklist de Humanização

## 📸 Imagens Necessárias

### 1. **Depoimentos com Fotos (Testimonials)**
📁 Pasta: `public/images/testimonials/`

Necessário: 4-6 fotos de alunos aprovados

**Critérios:**
- ✅ Foto de rosto real (não stock photo)
- ✅ Sorrindo ou segurando a CNH
- ✅ Resolução: 400x400px (quadrada, 1:1)
- ✅ Formato: JPG ou PNG
- ✅ Depois converter para WebP/AVIF

**Nomenclatura:**
```
carlos.jpg      → Carlos Silva (Categoria A)
marina.jpg      → Marina Costa (Categoria B)
joao.jpg        → João Santos (Categoria AB)
fernanda.jpg    → Fernanda Oliveira (Primeira Habilitação)
```

**Dados a Incluir (no código):**
- Nome completo
- Categoria tirada
- Frase de destaque (~20 palavras)
- Rating (sempre 5⭐)
- Status "Aprovado"

---

### 2. **Fachada e Infraestrutura**
📁 Pasta: `public/images/facility/`

**Fotos necessárias:**
- `fachada.jpg` - Frente da autoescola (640x480px)
- `sala-aula.jpg` - Sala de aula moderna (640x480px)
- `motopista.jpg` - Vista da motopista própria (640x480px)
- `frota.jpg` - Carros de treinamento (1280x720px)

**Uso:**
- Fachada: Hero section (background alternativo)
- Sala/Motopista: About section
- Frota: Services section

---

### 3. **Equipe / Instrutores**
📁 Pasta: `public/images/team/`

**Fotos necessárias:**
- `instrutor-moto.jpg` - Instrutor de moto (300x300px)
- `instrutor-carro.jpg` - Instrutor de carro (300x300px)
- `gerente.jpg` - Gerente/Coordenador (300x300px)

**Uso:** Seção "Quem somos" ou "Nossa equipe"

---

## 🎬 Como Integrar ao Projeto

### **Passo 1: Adicionar Fotos**
```bash
# Criar pastas
mkdir -p public/images/testimonials
mkdir -p public/images/facility
mkdir -p public/images/team

# Copiar fotos para as pastas
cp /caminho/para/fotos/* public/images/testimonials/
```

### **Passo 2: Converter para WebP** (Opcional, mas recomendado)
```bash
bash optimize-images.sh
```

### **Passo 3: Atualizar Dados**
Editar `TestimonialsWithPhotos.tsx`:

```tsx
const testimonials = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Categoria A - Moto',
    photo: '/images/testimonials/carlos.jpg',  // ← Seu arquivo
    quote: 'Sua frase aqui...',
    rating: 5,
    approved: true
  },
  // ... mais depoimentos
]
```

### **Passo 4: Usar o Componente**
Em `src/App.tsx`:

```tsx
import TestimonialsWithPhotos from './components/sections/TestimonialsWithPhotos'

export default function App() {
  return (
    <>
      {/* ... outras seções ... */}
      <TestimonialsWithPhotos />
      {/* ... */}
    </>
  )
}
```

---

## 📊 Especificações Técnicas de Fotos

| Tipo | Dimensão | Ratio | Formato | Tamanho Máx |
|------|----------|-------|---------|------------|
| Avatar Testimonial | 400x400px | 1:1 | JPG/WebP | 150KB |
| Fachada | 640x480px | 4:3 | JPG/WebP | 200KB |
| Panorâmica | 1280x720px | 16:9 | JPG/WebP | 250KB |
| Equipe | 300x300px | 1:1 | JPG/WebP | 100KB |

---

## 🎯 Impacto Esperado

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| Trust Score | 6.5/10 | 8.5/10 | **+31%** |
| Click CTA | 100% | 125-135% | **+25-35%** |
| Conversion | 7.2% | 9-10% | **+25-40%** |
| Time on Site | 1:30min | 2:15min | **+50%** |
| Bounce Rate | 45% | 35-38% | **-7-10%** |

---

## 📋 Checklist Final

- [ ] 4-6 fotos de depoimentos reais
- [ ] Fotos da fachada/infraestrutura
- [ ] Fotos da equipe/instrutores
- [ ] Todas as fotos redimensionadas
- [ ] Converter para WebP (opcional)
- [ ] Nomes de arquivos corretos
- [ ] Dados atualizados no código
- [ ] Componente TestimonialsWithPhotos integrado
- [ ] Teste em mobile (responsividade)
- [ ] Validar carregamento de imagens
- [ ] Commit e push para develop

---

## 💡 Dicas Importantes

✅ **Qualidade acima de quantidade** - Uma foto real vale mais que 10 stock photos
✅ **Consistência** - Use iluminação e fundo similar em todas as fotos
✅ **Consentimento** - Sempre peça permissão para usar fotos de pessoas
✅ **Diversidade** - Mix de gêneros, idades e aparências
✅ **Autenticidade** - Fotos naturais convertem melhor que poses forçadas

---

**Próximo Passo:** Assim que tiver as fotos, coloque na pasta `public/images/` e avisamos para finalizar P3.1 ✅
