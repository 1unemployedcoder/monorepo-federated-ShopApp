# Monorepo ShopApp

## Project Description

This project is a multi-module frontend application utilizing Module Federation for creating a scalable architecture. It includes three main services: Admin, Host, and Shop.

### Services

1. **Admin**: Administrative interface providing content and system settings management. Implemented using a React UI Library.
2. **Host**: Service combining Admin and Shop within a Module Federation module. This enables easy scaling and maintenance of both applications.
3. **Shop**: Main storefront application providing shopping functionality. Includes testing tools such as Jest and Storybook.

## Technologies

The project utilizes the following technologies and tools:

- **React**
- **React-Ui-library**
- **React-testing-library**
- **React-spring**
- **Redux Toolkit**
- **Styled Components**
- **Webpack**
- **Jest**
- **Storybook**
- **Cypress**
- **ESLint**
- **TypeScript**
- **Sass**

## Installation and Running

1. Install dependencies by running `npm install`.
2. Start the local development server with `npm start`.
3. Build the project in development mode using `npm run build:dev`.
4. Build the project in production mode with `npm run build:prod`.
5. Run tests with `npm test`.
6. Start Storybook with `npm run storybook`.
7. Build Storybook with `npm run build-storybook`.
8. Run Cypress tests using `npm run test:cypress`.
