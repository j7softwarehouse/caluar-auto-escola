# Setup Inicial - Caluar Auto Escola

## Status: ✓ Estrutura Base Concluída

Este documento marca a conclusão da preparação inicial do projeto Caluar Auto Escola conforme padrão J7 Software House.

## Estrutura Criada

✓ Pastas base: `/src`, `/public`, `/docs`, `/scripts`, `/tests`  
✓ Ambientes: `/env/dev`, `/env/homol`, `/env/prod`  
✓ Arquivo `.gitignore` para Next.js 14  
✓ Arquivo `.env.example` em cada ambiente  
✓ README.md com documentação completa  
✓ CONTRIBUTING.md com guia de contribuição  
✓ Workflow CI/CD: `.github/workflows/ci.yml`  
✓ Workflow Deploy: `.github/workflows/deploy.yml`  
✓ Repositório Git inicializado com branches: main, homol, develop  
✓ Primeiro commit realizado: "chore: estrutura inicial do projeto"

## Branches Configuradas

Duas branches principais com o mesmo histórico inicial e prontas:

```
main    → Código em produção (Cloudflare Pages Production - sem commits diretos)
develop → Código em preview (Cloudflare Pages Preview - base de desenvolvimento)
```

⚠️ **REGRA CRÍTICA**: Nada vai para main sem antes passar por develop.

## Próximos Passos

1. **Conectar a Organization GitHub**: Clone o repositório para a Organization `j7softwarehouse` como repositório Private.

2. **Configurar Remotos**: Adicione o remote origin apontando para o repositório da Organization.

3. **Realizar Push**: Faça push de todas as branches para o repositório remoto:
   ```bash
   git push -u origin main
   git push -u origin develop
   ```

4. **Configurar Branch Padrão**: Na interface do GitHub, defina `develop` como a branch padrão do repositório.

5. **Configurar Cloudflare Pages**: Conecte o repositório ao Cloudflare Pages:
   - Selecione `develop` como preview branch
   - Selecione `main` para produção
   - Configure variáveis de ambiente para cada ambiente

6. **Habilitar Branch Protection**: Configure as regras de proteção para main e develop:
   - Exigir ao menos 1 aprovação antes do merge
   - Exigir que branch esteja atualizada com main (para main) ou develop (para develop)
   - Exigir passagem de status checks (CI)
   - **Para main**: Permitir apenas PRs de develop ou hotfix/* (enforçado pelo CI)

7. **Configurar Secrets**: Adicione os seguintes secrets no GitHub (Settings → Secrets):
   - `CLOUDFLARE_API_TOKEN` - Token de autenticação Cloudflare
   - `CLOUDFLARE_ACCOUNT_ID` - ID da conta Cloudflare
   - Credenciais do banco de dados para cada ambiente
   - Chaves de API de terceiros

8. **Iniciar Desenvolvimento**: Crie a primeira feature:
   ```bash
   git checkout -b feature/setup-projeto
   # Editar arquivos necessários
   git add .
   git commit -m "feat: configura projeto Next.js base"
   git push origin feature/setup-projeto
   ```
   - Abra PR para develop (será deployado em Preview após merge)
   - Quando estiver pronto para produção, abra PR de develop → main (será deployado em Production)

## Comandos Git Principais

**Criar nova feature**:
```bash
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-funcionalidade
```

**Submeter alterações**:
```bash
git add .
git commit -m "feat: descrição da funcionalidade"
git push origin feature/nome-da-funcionalidade
```

**Atualizar feature com develop**:
```bash
git fetch origin
git rebase origin/develop
git push origin feature/nome-da-funcionalidade --force
```

**Após PR aprovada, merging é automático ou manual conforme configuração GitHub**.

## Checklist de Implementação da App

Antes de começar o desenvolvimento, considere implementar:

- [ ] Configuração do Next.js 14 com TypeScript
- [ ] Estrutura básica de páginas e componentes
- [ ] Setup de Tailwind CSS
- [ ] Integração com banco de dados (PostgreSQL)
- [ ] Autenticação com NextAuth.js
- [ ] Setup de testes (Jest + React Testing Library)
- [ ] Configuração de linter (ESLint) e formatter (Prettier)
- [ ] Documentação de API endpoints
- [ ] Setup de logging e monitoramento

## Documentação Importante

- [README.md](../README.md) - Documentação geral do projeto
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Guia de contribuição
- [env/dev/.env.example](../env/dev/.env.example) - Variáveis de ambiente DEV
- [env/homol/.env.example](../env/homol/.env.example) - Variáveis de ambiente HOMOL
- [env/prod/.env.example](../env/prod/.env.example) - Variáveis de ambiente PROD

---

**Projeto pronto para iniciar desenvolvimento com padrão J7 Software House! 🚀**
