# Caluar Auto Escola

Site institucional responsivo da Caluar Auto Escola, desenvolvido com Next.js 14 e tecnologias modernas. O projeto apresenta seções variadas incluindo apresentação, serviços, depoimentos com carousel de reviews, formulários de contato e integração com sistemas de gerenciamento.

## Tecnologias

Next.js 14, React 18, TypeScript, Tailwind CSS, Node.js 18+, PostgreSQL, NextAuth.js, Nodemailer, Docker.

## Como Rodar Localmente

Clone o repositório e navegue até a pasta do projeto. Copie o arquivo `.env.example` da pasta `/env/dev` para `.env.local` na raiz do projeto e configure os valores conforme seu ambiente local. Instale as dependências com `npm install`, execute o servidor de desenvolvimento com `npm run dev` e acesse http://localhost:3000 no navegador.

Para parar o servidor, pressione `Ctrl+C` no terminal.

## Estrutura de Pastas

```
/src              - Código fonte principal (componentes, páginas, utils)
/public           - Arquivos estáticos públicos (imagens, fonts)
/docs             - Documentação técnica do projeto
/scripts          - Scripts de automação e utilitários
/env              - Arquivos de ambiente por espaço (dev, homol, prod)
  /dev            - Variáveis de desenvolvimento
  /homol          - Variáveis de homologação
  /prod           - Variáveis de produção
/tests            - Testes automatizados (Jest, React Testing Library)
/.github/workflows - Workflows de CI/CD (GitHub Actions)
```

## Variáveis de Ambiente

Cada ambiente possui seu arquivo `.env.example` dentro de `/env/{ambiente}`. Configure as seguintes variáveis conforme necessário:

**NODE_ENV** - Define o ambiente (development, staging ou production), **NEXT_PUBLIC_API_URL** - URL base da API, **DATABASE_URL** - String de conexão do banco de dados, **NEXTAUTH_SECRET** - Chave secreta para autenticação, **NEXTAUTH_URL** - URL de autenticação, **API_KEY** - Chave de acesso para APIs externas, **SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD** - Configurações de email.

Nunca versione arquivos `.env` com valores reais. Utilize apenas `.env.example` como modelo.

## Fluxo de Branches

O projeto segue Git Flow simplificado com as seguintes branches:

**main** - Código em produção (Cloudflare Production), merges apenas via Pull Request de develop ou hotfix/*, **develop** - Código em preview (Cloudflare Pages Preview), base de desenvolvimento, origem de todas as features, **feature/nome-da-funcionalidade** - Branches para novas funcionalidades a partir de develop, **hotfix/descricao** - Correções urgentes aplicadas direto em develop e mergeadas para main.

**REGRA CRÍTICA**: Nada vai para main sem antes passar por develop. Fluxo obrigatório é: `feature/* → develop → main`

## Scripts Disponíveis

**npm run dev** - Inicia o servidor de desenvolvimento, **npm run build** - Compila o projeto para produção, **npm start** - Inicia o servidor em produção, **npm test** - Executa testes automatizados, **npm run lint** - Executa verificação de código com ESLint.

## CI/CD

O projeto utiliza GitHub Actions com dois workflows automatizados:

**ci.yml** - Executado em todo PR aberto para main ou develop, valida a branch de origem (enforce: nada para main sem passar por develop), título do PR e bloqueia arquivos sensíveis, **deploy.yml** - Executado no push em develop (Cloudflare Pages Preview) e main (Cloudflare Pages Production) para deploy automático no ambiente correspondente.

## Contribuindo

Consulte o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre padrão de commits, branches e processo de contribuição.

## Suporte

Para dúvidas ou problemas, abra uma issue no repositório ou entre em contato com o time de desenvolvimento.
