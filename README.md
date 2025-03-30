# Compliance Dashboard - Recent Activity Module

This module displays a log of recent compliance-related activities. It's a microfrontend designed to be consumed by the Compliance Dashboard host application.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/kanetu/mfe-compliance-dashboard-recent-activity.git
    cd compliance-dashboard-recent-activity
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    ```

    The module will be available at `http://localhost:3003`.

## Project Structure

- `src/`: Contains the module's code.
  - `App.tsx`: The main component that displays the activity log.
  - `bootstrap.tsx`: The main entry point that renders the `App` component.
  - `index.tsx`: The entry point that dynamically imports `bootstrap.tsx`.
  - `components/`: Contains React components used by the module.
  - `types/`: Contains TypeScript type definitions.
  - `utils/`: Contains utility functions.
  - `styles/`: Contains CSS styles (including Tailwind CSS directives).
- `public/`: Contains the `index.html` file.
- `webpack.config.js`: Webpack configuration for the module.

## Dependencies

- React
- React DOM
- Webpack and Module Federation plugins
- Tailwind CSS
- Radix UI
- Tanstack React Table

## Notes

- This module is designed to be consumed by a host application using Module Federation.
- It exposes the `App` component.
- The `index.tsx` file dynamically imports the `bootstrap.tsx` file.
- Tailwind CSS is used for styling.
