# Supermercado Bela Camp App

<div align="center">

⚠️ Este projeto está em desenvolvimento ativo. 

</div>

Este é o início do aplicativo oficial do Supermercado Bela Camp. Nesta primeira versão (MVP), o app funcionará como um catálogo digital, permitindo que os usuários explorem os produtos disponíveis na loja. A proposta, no entanto, é evoluir este MVP para um aplicativo completo de compras, com funcionalidades como carrinho, pedidos online e integração com formas de pagamento.

O projeto está sendo desenvolvido com React Native, utilizando o Expo, com TypeScript e Expo Router para navegação.

<div align="center">

![image](https://github.com/user-attachments/assets/57034ed7-1272-4518-b73f-7865cad64f5a)

</div>

- [Template de Pull Request](.github/pull-request-template.md)

## ✅ Requisitos do Ambiente

Antes de iniciar, verifique se você possui instalado:

* [Node.js](https://nodejs.org/) (versão recomendada: LTS)
* App **Expo Go** no seu dispositivo móvel (disponível na [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) e [App Store](https://apps.apple.com/app/expo-go/id982107779))

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/Maia-th/Bela-Camp-App.git
cd Bela-Camp-App
```

Instale as dependências:

```bash
npm install
```

## 🚀 Iniciar o Projeto

Inicie o projeto localmente com:

```bash
npx expo start
```

Use o **QR Code** exibido para rodar o app no seu celular com o **Expo Go**.

> 💡 **Dica:** Certifique-se de que seu computador e celular estejam na **mesma rede Wi-Fi**.

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

## Bibliotecas Externas

- NativeWind — Utilizada para estilização com classes Tailwind CSS no React Native.
- Lucide — Biblioteca de ícones leves e modernos para React Native.