<h1 align="center">🍽️ Aplicativo de Receitas em React Native 🍽️</h1>

<img width="1081" height="331" alt="image" src="https://github.com/user-attachments/assets/50cb45aa-fd4b-4f05-8297-d0bd421d8400" />

Projeto mobile para exploração de receitas culinárias, com autenticação via Clerk, navegação por categorias, pesquisa de pratos, exibição de instruções detalhadas, tutoriais em vídeo do YouTube e opção de salvar receitas favoritas.

## ✅ Requisitos do Ambiente

Antes de iniciar, verifique se possui instalado:

- Node.js
- App **Expo Go** no dispositivo móvel

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/Maia-th/Bela-Camp-App.git
cd Bela-Camp-App
````

Instale as dependências de cada pasta:

```bash
cd backend
npm install

cd ../mobile
npm install
```

## ⚙️ Configuração do `.env`

### Backend (`/backend`)

```bash
PORT=5001
DATABASE_URL=sua_url_do_banco_neon
NODE_ENV=development
```
> Obtenha a URL de conexão do banco de dados em: [Neon Dashboard](https://console.neon.tech/app/projects)

### Mobile (`/mobile`)

```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=sua_clerk_publishable_key
```

> Obtenha a chave Clerk em: [Clerk Dashboard](https://dashboard.clerk.com/apps?path=api-keys)

## 🚀 Como Executar

### 1️⃣ Rodar as Migrations

```bash
cd backend
npx drizzle-kit migrate
```

### 2️⃣ Rodar o Backend

```bash
cd backend
npm run dev
```

### 3️⃣ Rodar o Aplicativo Mobile

```bash
cd mobile
npx expo start
```

> ⚠️ **Observação**:
> Se for rodar o aplicativo em um **dispositivo físico**, edite o arquivo `mobile/constants/api.js` e atualize o `API_URL` com o **IP da sua máquina** na rede local, por exemplo:
>
> ```js
> export const API_URL = "http://192.168.x.x:5001/api";
> ```
>
> (substitua `192.168.x.x` pelo IP do seu computador, que deve estar na mesma rede Wi-Fi do dispositivo).

## 📚 Tecnologias Utilizadas

* **React Native + Expo** — Frontend mobile
* **Express.js + PostgreSQL** — Backend e banco de dados
* **Clerk** — Login e Verificação de E-mail
