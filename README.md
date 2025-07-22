# Playwrigth 🎭

En esta rama se realizo un desarrollo simple, sin reutilización de codigo, sin buenas practicas y sin patrones de diseño. Lo unico que se tuvo en cuenta fue organizar la funcionalidades por carpeta.

```
+---tests
|   |   example.spec.ts
|   |   
|   +---complete-purchase
|   +---login-tests
|   |       login-just-with-password.spec.ts
|   |       login-just-with-username.spec.ts
|   |       login-unknow-user.spec.ts
|   |       login-with-empty-fields.spec.ts
|   |       login-with-locked-user.spec.ts
|   |       login.spec.ts
|   |       logout.spec.ts
|   |       
|   +---select-products
|   |       add-all-products.spec.ts
|   |       add-and-remove-all-products.spec.ts
|   |       add-left-the-product.spec.ts
|   |       add-some-products.spec.ts
|   |       select-product.spec.ts
|   |       
|   \---shopping-cart
\---tests-examples
        demo-todo-app.spec.ts
```

# Set de pruebas ⚗️🧪
## Website - Sauce Demo 💵

## 1) Login 👨🏻

- Inicio de sesión. [✅]
- Inicio de sesión con campos vacíos. [✅]
- Inicio de sesión solo con usuario. [✅]
- Inicio de sesión solo con contraseña. [✅]
- Inicio de sesión usuario no registrado. [✅]
- Inicio de sesión con usuario bloqueado. [✅]
- Cierre de sesión. [✅]

## 2) Seleccionar Artículos 👔👖

- Seleccionar un artículo. [✅]
- Seleccionar varíos artículos. [✅]
- Seleccionar todos los artículos. [✅]
- Seleccionar y quitar el mismo artículo seleccionado. [✅]
- Seleccionar y quitar todos los artículos. [✅]

## 3) Carrito 🛒

- Validar artículos seleccionados. []
- Eliminar artículos desde el carrito. []

## 4) Finalizar venta ✅

- Finalizar la venta con todos los datos.
- Finalizar la venta solo con el primer dato.
- Finalizar la venta solo con dos datos.
- Validar el valot final de la venta.
- Validar el mensaje de finalización de transacción.

## Technologies 👨🏻‍💻

- ![Static Badge](https://img.shields.io/badge/NodeJS-20.17.0-brightgreen)
- ![Static Badge](https://img.shields.io/badge/Playwright-1.54.1-orange)
- ![Static Badge](https://img.shields.io/badge/TypeScript-5.8-blue)

# How To Install

To you can run the tests cases, you need follow de next steps

You need install `Playwright` 🎭 in project folder
- Run this command on vscode terminal `npm init playwright@latest`.
- Do you want to use `TypeScript` or `JavaScript`?: You can choose any.
- Where to put your e2e tasks: `tests` You can name it like you want, but Playwright suggests "tests".
- Add a GitHub Actions workflow? This opcion is not required, can be true or false.
- Install Playright browsers: can be done manually via '`npx playwright install`'. In this time, we will choose `true`.

Is absolutely necessary install all package when you has cloned the repo recently.

### Several commands

- `npx playwright test` - Runs the end-to-end tests.
- `tree /F /A > estructura.txt` - View project structure.

