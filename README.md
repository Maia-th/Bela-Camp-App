# Supermercado Bela Camp App

⚠️ Este projeto está em desenvolvimento ativo. 

<div align="center">

![image](https://github.com/user-attachments/assets/57034ed7-1272-4518-b73f-7865cad64f5a)

</div>

- [Template de Pull Request](.github/docs/pull-request-template.md)

## Fluxo de Desenvolvimento

Este projeto segue o modelo GitFlow para organização das branches e fluxo de desenvolvimento.

- `main`: Branch principal que contém o código em produção.
- `develop`: Branch de desenvolvimento com o código que será testado antes de ir para a produção.
- `feature` branches: Cada nova funcionalidade ou melhoria deve ser desenvolvida em uma branch de feature (feature/nome-da-feature).
- `hotfix` branches: Correções de bugs urgentes devem ser feitas em branches específicas (hotfix/nome-do-hotfix).
- `release` branches: Usadas para preparar uma nova versão de produção.

Passos para contribuir com uma nova feature ou correção

1. Crie uma nova branch a partir de develop:

> Antes de criar a nova branch, execute um `git pull origin develop` para garantir que a sua branch `develop` local esteja atualizada com a versão mais recente do repositório remoto.

```bash
git checkout -b feature/nome-da-feature develop
```

2. Desenvolva a funcionalidade ou correção de bug.

3. Ao concluir, faça o commit das suas alterações:

```bash
git add .
git commit -m "feat: Descrição da feature ou correção"
```

4. Faça o push da branch:

```bash
git push origin feature/nome-da-feature
```

5. Abra um Pull Request (PR) para a branch develop.

6. Exclua a branch criada após o merge com a branch `develop`:

```bash
git branch -d feature/nome-da-feature
```

## Regras para Aprovação de PR

- Todo PR deve ser revisado e aprovado por ao menos um desenvolvedor antes de ser mesclado às branches `develop` ou `main`.
