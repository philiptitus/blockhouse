

# Next.js x Django App

This is a project that demonstrates fetching data from a Django backend and displaying it on charts using Chart.js in a Next.js frontend.

## Prerequisites

Make sure you have the following installed on your machine:

- **Python** (version 3.x)
- **Node.js** (version 14.x or higher)
- **Pip** (Python package installer)
- **npm** or **yarn** (for Node.js)

## Project Structure

```
blockhouse/
│
├── other folders/  e.g : data, hooks, app    # Contains the Next.js app
│   blockhouse/  # Django backend (inside the main folder)
│       ├── manage.py
│       └── other backend files...
└── README.md
```

## Setup Instructions

### 1. Backend Setup (Django)

1. Navigate to the `blockhouse` folder using a terminal:
    ```bash
    cd blockhouse
    ```

2. Create a virtual environment for the Django project:
    ```bash
    python -m venv venv
    ```

3. Activate the virtual environment:

   - On **Windows**:
     ```bash
     venv\Scripts\activate
     ```
   - On **macOS/Linux**:
     ```bash
     source venv/bin/activate
     ```

4. Install the necessary Python libraries:
    ```bash
    pip install -r requirements.txt
    ```

5. Apply database migrations:
    ```bash
    python manage.py migrate
    ```

6. Start the Django development server:
    ```bash
    python manage.py runserver
    ```

Your backend server should now be running at `http://127.0.0.1:8000/`.

### 2. Frontend Setup (Next.js)

1. Open another terminal and navigate to the `root` of the folder:


2. Install the necessary Node.js libraries:
    ```bash
    npm install --force
    ```

    Or, if you're using **yarn**:
    ```bash
    yarn install --force
    ```

3. Start the Next.js development server:
    ```bash
    npm run dev
    ```

    Or with **yarn**:
    ```bash
    yarn dev
    ```

The Next.js app should now be running at `http://localhost:3000/`.

### 3. Running Both Servers

You should have **two terminals open**:

- One running the Django backend on `http://127.0.0.1:8000/`.
- One running the Next.js frontend on `http://localhost:3000/`.

The frontend fetches data from the backend and displays it on charts using Chart.js.

---

## Next Steps

Once the setup is complete, you're ready to start building features and displaying data fetched from the Django backend on charts in the frontend.


Libraries Used
Frontend (Next.js)

The frontend is built with Next.js and utilizes various libraries to enhance functionality, manage data, and render charts. Below is a list of the key libraries used:

    Next.js (next): Framework for server-rendered React applications.
    React (react, react-dom): Core library for building the user interface.
    Chart.js (chart.js): Library used for rendering various charts.
    react-chartjs-2: React wrapper for Chart.js, allowing for integration in React components.
    Recharts: Another charting library used for rendering complex charts such as candlestick charts.
    Axios: A promise-based HTTP client for making API requests to the backend.
    Redux (redux, react-redux): State management libraries to handle the global state of the application.
    redux-thunk: Middleware for handling asynchronous actions in Redux.
    Bootstrap (bootstrap, react-bootstrap): Popular CSS framework for responsive design and UI components.
    Sass (sass, sass-loader, node-sass): Preprocessor scripting language to style components.
    SimpleBar (simplebar, simplebar-react): Custom scrollbars library for creating stylish, customizable scroll areas.
    UUID: Utility for generating unique identifiers for keys and other use cases.
    Luxon: Library for dealing with dates and times, used alongside Chart.js.
    ApexCharts (apexcharts, react-apexcharts): Another charting library used for rendering various data visualizations.
    JS Cookies: Utility library for handling cookies.
    Prism React Renderer: Syntax highlighting for code blocks.

Backend (Django)

The backend is powered by Django and Django REST Framework, which exposes API endpoints to be consumed by the frontend. Here are the key libraries used:

    Django (Django>=4.2,<5.0): High-level Python web framework that encourages rapid development and clean design.
    Django REST Framework (djangorestframework>=3.14.0,<4.0): Toolkit for building Web APIs in Django.
    Simple JWT (djangorestframework-simplejwt>=5.2.2,<6.0): JWT-based authentication for the Django REST framework.
    Django CORS Headers (django-cors-headers>=3.14.0,<4.0): Middleware for handling Cross-Origin Resource Sharing (CORS) to allow frontend requests from different origins.


Thought Process
Overview

The goal of this project was to create a web application that combines a Next.js frontend with a Django backend to fetch and display data using interactive charts. The app's primary purpose is to present data visually using charts, which are rendered using Chart.js and Recharts.
Backend Design

    Choosing Django for the Backend:
        Framework Selection: Django was chosen for its robustness, scalability, and its built-in features for rapid development. It simplifies tasks like database management, user authentication, and API creation.
        API Development: Django REST Framework (DRF) was used to create RESTful APIs. DRF allows for easy serialization of data and provides a flexible, powerful toolkit for building APIs.
        Authentication: JWT (JSON Web Tokens) was implemented using djangorestframework-simplejwt to handle secure authentication and authorization of API requests.
        CORS Handling: Django CORS Headers was added to handle Cross-Origin Resource Sharing, enabling the frontend application to communicate with the backend server seamlessly.


Frontend Design

    Choosing Next.js for the Frontend:
        Framework Selection: Next.js was chosen for its server-side rendering capabilities, which improve performance and SEO. It also provides a streamlined development experience with built-in support for static site generation and API routes.
        Data Fetching: Axios was used to handle API requests and manage responses from the Django backend. This library simplifies HTTP requests and integrates well with React components.

    Charting Libraries:
        Chart.js: Used for rendering basic charts such as line charts and bar charts. It is a powerful, flexible library that provides a wide range of chart types.
        Recharts: Chosen for rendering more complex charts like candlestick charts. Recharts offers a composable approach to building charts, making it easier to customize and extend.

    State Management:
        Redux: Implemented for managing the global state of the application. Redux helps in handling the state of data fetched from the backend and ensures a consistent state across the app.
        Middleware: Redux Thunk was used to handle asynchronous actions, allowing the app to make API requests and manage responses effectively.

    Styling and UI:
        Bootstrap: Integrated for responsive design and UI components. Bootstrap’s utility classes and components speed up the development process and ensure a consistent look and feel.
        Sass: Utilized for advanced styling and maintaining a modular CSS structure. Sass provides powerful features like variables, nested rules, and mixins.

    User Experience:
        Interactive Charts: Charts were made interactive to allow users to explore data dynamically. Features such as tooltips, legends, and animations enhance the user experience.
        Responsive Design: Ensured that the application is fully responsive, providing an optimal viewing experience on various devices and screen sizes.

Conclusion

The app was designed to provide a seamless integration between a Django backend and a Next.js frontend, focusing on delivering a user-friendly interface for visualizing data through interactive charts. The choice of technologies and libraries was driven by the need for performance, scalability, and ease of development. By leveraging the strengths of Django and Next.js, the project aims to offer a robust and efficient solution for data visualization.

