# TodoApp✅(practica)

## Tecnologias usadas

- React
- TypeScript
- Vite
- Supabase
- Tailwind CSS
- Framer Motion
- NextUI
- FontAwesome
- toastify
- Redux tool kit

## Sobre el proyecto

Es una aplicacion de tareas (todo) con fines practicos, aplicar lo aprendido con React gracias el curso de **Fernando Herrera** y empezar a usar typescript para mis futuros proyectos personales, ademas creado con el fin de aplicar tecnologias con las cuales no estaba familiarizado.

Se uso **[Supabasde](https://supabase.com) para gestionar una base de datos SQL y el Auth de la aplicacion** ofreciendo authenticacion con Google y un crud basico de las tareas (Create, read, update, delete).

Para las animaciones se uso **Framer Motion**



## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
