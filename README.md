<h1 align="center">🍽️ Aplicativo de Receitas em React Native 🍽️</h1>

## ✨ Destaques:

* Cadastro, Login e Verificação de E-mail com Código de 6 Dígitos usando **Clerk**
* Navegação por Receitas em Destaque e Filtro por Categorias
* Pesquisa de Receitas e Exibição de Instruções Detalhadas de Preparo
* Páginas de Receitas com Tutoriais em Vídeo do YouTube
* Adicione Receitas aos Favoritos e Acesse na Aba de Favoritos
* **Tecnologias**: React Native + Express + PostgreSQL + Expo

---

## 🧪 Configuração do `.env`

### Backend (`/backend`)

```bash
PORT=5001
DATABASE_URL=sua_url_do_banco_neon
NODE_ENV=development
```

### Aplicativo Mobile (`/mobile`)

```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=sua_clerk_publishable_key
```

---

## 🔧 Executar o Backend

```bash
cd backend
npm install
npm run dev
```

## 📱 Executar o Aplicativo Mobile

```bash
cd mobile
npm install
npx expo start
```
