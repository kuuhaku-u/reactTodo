# React Basic Todo

## Features:
- **Signin Component:**
  - Allows users to sign in with a name (temporary for now) and submit.

- **Protected Routes:**
  - Ensures certain routes are only accessible to authenticated users.
  - Contains:
    - List Component: Displays list of todos Form JSON placeholder.
    - Add Component: Allows users to add new todos and stuff.

- **Higher Order Components (HOCs):**
  - **Wrapper HOC:**
    - Protects routes by wrapping them and ensuring that only authenticated users can access them.
  - **Custom Model Hook:**
    - Handles state and functionality related to a modal in the application.

- **Hooks:**
  - **useFetch Hook:**
    - A custom hook for handling data fetching operations.
