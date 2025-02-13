# Shopery

## 🚀 Getting Started

To start the project, use:

```sh
pnpm dev fe-admin
pnpm dev fe-web
pnpm serve be-api
```

To generate a new library, use:

```sh
npx nx g lib @shopery/ui --directory=libs/ui/ui-shared
```

To run Prettier for the entire project, use:

```sh
pnpm prettier-all
```

To run ESLint:

```sh
pnpm lint fe-web
pnpm lint fe-admin
pnpm lint be-api
```

---

## 🛠 Technologies

### Web (Frontend)

<div align="center">
  <a href='https://nextjs.org'><img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" width="50" height="50" title="Next.js"></a>
  <a href="https://www.typescriptlang.org"><img src="https://www.svgrepo.com/show/374146/typescript-official.svg" width="50" height="50" title="TypeScript"></a>
  <a href="https://firebase.google.com/docs/auth"><img src="https://www.svgrepo.com/show/373595/firebase.svg" width="50" height="50" title="Firebase Auth"></a>
  <a href="https://zustand-demo.pmnd.rs"><img src="https://raw.githubusercontent.com/pmndrs/zustand/refs/heads/main/examples/demo/public/favicon.ico" width="50" height="50" title="Zustand"></a>
  <a href="https://zustand-demo.pmnd.rs"><img src="https://images.seeklogo.com/logo-png/43/1/react-query-logo-png_seeklogo-435661.png" width="50" height="50" title="React Query"></a>
  <a href="https://stripe.com"><img src="https://cdn.prod.website-files.com/63f6e52346a353ca1752970e/64a567b7500fa85b4f95a747_stripe_logo_icon_167962.png" width="50" height="50" title="Stripe"></a>
  <a href="https://ant.design"><img src="https://camo.githubusercontent.com/f6bf5ee2b30310ad83a81212b9be69bdc2bb577f2ebe868ad89f8586b4721ffc/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f4b4470677667754d704766716148506a6963524b2e737667" width="50" height="50" title="Ant Design UI"></a>
</div>

### Admin Panel

<div align="center">
  <a href="https://react.dev"><img src="https://www.svgrepo.com/show/452092/react.svg" width="50" height="50" title="React.js"></a>
  <a href="https://www.typescriptlang.org"><img src="https://www.svgrepo.com/show/374146/typescript-official.svg" width="50" height="50" title="TypeScript"></a>
  <a href="https://firebase.google.com/docs/auth"><img src="https://www.svgrepo.com/show/373595/firebase.svg" width="50" height="50" title="Firebase Auth"></a>
  <a href="https://redux.js.org"><img src="https://static-00.iconduck.com/assets.00/redux-icon-1024x971-2ocv6rm8.png" width="50" height="50" title="Redux"></a>
  <a href="https://www.chakra-ui.com"><img src="https://img.icons8.com/?size=512&id=r9QJ0VFFrn7T&format=png" width="50" height="50" title="Chakra UI"></a>
</div>

### Backend

<div align="center">
  <a href="https://nodejs.org/en"><img src="https://www.svgrepo.com/show/354119/nodejs-icon.svg" width="50" height="50" title="Node.js"></a>
  <a href="https://www.typescriptlang.org"><img src="https://www.svgrepo.com/show/374146/typescript-official.svg" width="50" height="50" title="TypeScript"></a>
  <a href="https://www.mongodb.com"><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" width="50" height="50" title="MongoDB"></a>
  <a href="https://firebase.google.com/docs/auth"><img src="https://www.svgrepo.com/show/373595/firebase.svg" width="50" height="50" title="Firebase Auth"></a>
  <a href="https://jwt.io"><img src="https://seeklogo.com/images/J/jwt-logo-11B708E375-seeklogo.com.png" width="50" height="50" title="JWT Auth"></a>
  <a href="https://redis.io"><img src="https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png" width="50" height="50" title="Redis"></a>
  <a href="https://fastify.dev"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaORCd00C-ymGynrRdk0k3tgfc80B_qdBM7Q&s" width="50" height="50" title="Fastify"></a>
</div>

---

## 📄 Project Structure

```
shopery/
├── apps/
│   ├── fe-web/     # Next.js Web Frontend
│   ├── fe-admin/   # React Admin Panel
│   └── be-api/     # Fastify Backend API
│
├── libs/
│   ├── ui-shared/  # Shared UI components
│   └── shared/     #Shared function and business logic
│
├── package.json
├── nx.json
└── README.md
```

---

🎯 **Contributors & Maintainers**

- Feel free to contribute to the project! Fork, create a branch, and submit a PR.

---

💡 **Questions or Issues?**
If you encounter any issues, feel free to open an issue on the repository.
