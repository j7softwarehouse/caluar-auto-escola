# Guia de Contribuição

Obrigado por contribuir com o projeto Caluar Auto Escola! Para manter a qualidade e organização do código, siga as regras estabelecidas neste guia.

## Padrão de Branches

Sempre crie branches a partir de `develop` com o prefixo apropriado, use nomes descritivos em lowercase separados por hífens, exemplo: `feature/adiciona-carousel-reviews` ou `fix/corrige-responsividade-navbar`.

**feature/** - Para novas funcionalidades, **fix/** - Para correções de bugs, **docs/** - Para alterações em documentação, **refactor/** - Para refatoração de código, **style/** - Para formatação e estilo, **test/** - Para adição ou ajuste de testes, **hotfix/** - Para correções urgentes (criadas a partir de develop, mergeadas em develop e depois em main).

**⚠️ REGRA CRÍTICA**: Nada vai para main sem antes passar por develop. Toda e qualquer alteração deve seguir o fluxo: `feature/* → develop → main`

## Padrão de Commits

Siga o padrão Conventional Commits em todos os commits. Estrutura: `<tipo>: <descrição>`.

**feat:** nova funcionalidade (exemplo: `feat: adiciona autenticação via JWT`), **fix:** correção de bug (exemplo: `fix: corrige espaçamento em seção de contato`), **docs:** alteração em documentação (exemplo: `docs: atualiza README com instruções de deploy`), **style:** formatação sem impacto em lógica (exemplo: `style: formata arquivo com Prettier`), **refactor:** refatoração sem nova funcionalidade (exemplo: `refactor: simplifica lógica de componente Button`), **test:** adição ou ajuste de testes (exemplo: `test: adiciona testes para validação de formulário`), **chore:** tarefas de manutenção (exemplo: `chore: atualiza dependências do projeto`).

## Processo de Contribuição

1. Atualize a branch `develop` com `git pull origin develop`
2. Crie uma nova branch feature a partir de develop com `git checkout -b feature/sua-funcionalidade`
3. Implemente suas alterações seguindo os padrões de código do projeto
4. Faça commits frequentes e descritivos seguindo o padrão Conventional Commits
5. Realize testes locais antes de enviar o PR
6. Envie o branch para o repositório com `git push origin feature/sua-funcionalidade`
7. Abra um Pull Request para `develop` descrevendo as alterações
8. Aguarde review e aprovação de pelo menos um membro do time
9. Após aprovação em develop, o PR será mergeado e deployado em Preview (Cloudflare Pages)
10. Quando estiver pronto para produção, abra um PR de `develop` para `main`
11. Após aprovação em main, será deployado em Production (Cloudflare Pages)

## Regras de Pull Request

Todos os PRs abertos para `main` ou `develop` devem ter aprovação de pelo menos um reviewer antes do merge. **PRs para `main` devem vir APENAS de `develop` ou `hotfix/*` - esta regra é enforçada automaticamente pelo CI**. Arquivos sensíveis como `.env`, credentials, tokens e chaves de API serão automaticamente bloqueados e impedirão o merge. O título do PR deve começar com um dos tipos do Conventional Commits, exemplo: `feat: adiciona seção de depoimentos`. A descrição do PR deve incluir o contexto das alterações, impacto esperado e instruções para teste.

## Segurança

Nunca commite arquivos `.env` com valores reais, apenas versione `.env.example` como modelo. Nunca adicione credenciais, tokens ou chaves de API direto no código. Variáveis sensíveis devem ser definidas apenas em `.env` ou variáveis de ambiente do sistema. Realize verificação de segurança antes de submeter PR com alterações em autenticação ou dados sensíveis.

## Testes

Execute testes localmente antes de abrir PR com `npm test`. Adicione testes para novas funcionalidades e garantir cobertura mínima de 80%. Todos os testes devem passar antes do merge. Em caso de testes falhando no CI, corrija localmente e faça novo push.

## Dúvidas ou Problemas

Abra uma issue descrevendo detalhadamente o problema ou dúvida. Use labels apropriadas (bug, enhancement, documentation, question). Aguarde feedback do time de desenvolvimento.

Obrigado por contribuir! 🚀
