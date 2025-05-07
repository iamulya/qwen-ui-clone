# Qwen UI Clone (React)

This project is a front-end clone of the Qwen AI chat interface, built using React. It aims to replicate the visual layout and static elements of the Qwen UI based on a provided screenshot. The focus is on the component structure and styling with CSS.

This project was generated based on a visual design and does not include any backend functionality or actual AI capabilities.

## ✨ Screenshot

*(You should insert a screenshot of the running application here. For example:)*
<!-- ![Qwen UI Clone Screenshot](./screenshot.png) -->
*(Replace the above line with an actual image link or embedded image after you take a screenshot.)*

## 🚀 Features

-   **Sidebar Layout:**
    -   Logo and application name ("Qwen")
    -   "New Chat" button
    -   Search bar for chats
    -   Collapsible "All chats" section with "Today" and "Previous 7 days" categories (visual only)
    -   User profile section ("Architect Handbook") at the bottom
-   **Main Content Area:**
    -   Model selector (e.g., "Qwen3-235B-A22B") with a "Set as default" option (visual only)
    -   Top-right user avatar
    -   Greeting message (e.g., "Good morning, Architect Handbook")
    -   Main input text area with placeholder
    -   Input controls below the text area:
        -   Add attachment button (+)
        -   "Thinking" mode button (with dropdown arrow - visual only)
        -   "Search" mode button
        -   "MCP" button
        -   Voice input (mic) button
    -   Suggestion pills for common queries
-   **Floating Elements:**
    -   Help icon (?) at the bottom-right of the screen
-   **Component-based architecture** using React.
-   **Styled with plain CSS** for demonstration purposes.

## 🛠️ Tech Stack

-   **React** (v17+): JavaScript library for building user interfaces
-   **HTML5**
-   **CSS3** (Plain CSS, imported globally)
-   **Create React App** (for project setup)

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:
-   Node.js (v14.x or higher recommended)
-   npm (v6.x or higher) or yarn

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/qwen-ui-clone.git
    cd qwen-ui-clone
    ```
    *(Replace `https://github.com/your-username/qwen-ui-clone.git` with the actual URL if you host it.)*

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

## ▶️ Running the Application

To start the development server and view the application in your browser:

Using npm:
```bash
npm start
```
Or using yarn:
```bash
yarn start
```
This will typically open the application in your default web browser at `http://localhost:3000`.

## 📂 Project Structure

```
qwen-ui-clone/
├── public/
│   └── index.html        # Main HTML page
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Avatar.js
│   │   ├── HelpIcon.js
│   │   ├── MainContent.js
│   │   └── Sidebar.js
│   ├── App.css             # Global styles for the application
│   ├── App.js              # Main application component, orchestrates layout
│   ├── index.css           # Basic global styles (often from create-react-app)
│   └── index.js            # Entry point of the React application
├── .gitignore
├── package.json
└── README.md
```

## ⚠️ Limitations

-   **Static UI:** This is a visual clone only. There is no backend integration or actual chat functionality.
-   **No Interactivity:** Dropdowns, button actions (beyond visual hover states), and input processing are not implemented. Functionality like opening dropdowns, sending messages, or performing searches requires JavaScript logic and potentially state management, which is not included in this basic visual clone.
-   **Placeholder Icons:** Uses Unicode characters for icons. For a production application, SVG icons or a dedicated icon library (e.g., Font Awesome, Material Icons via `react-icons`) would be more appropriate for consistency and scalability.
-   **Basic Responsiveness:** While the layout uses flexbox, it's primarily designed for a desktop view similar to the provided screenshot. It may not be fully responsive on all screen sizes without further CSS media queries and adjustments.

## 🌱 Future Enhancements (Potential)

-   Implement state management (e.g., using React's `useState` hook for local state, or Context API / Redux / Zustand for global state) to handle UI interactions like opening dropdowns, managing input field values, etc.
-   Add routing (e.g., with `react-router-dom`) if different views or pages were needed.
-   Integrate with a mock API or a real backend for chat functionality.
-   Improve responsiveness for various devices (tablets, mobile phones).
-   Replace Unicode icons with a proper icon library or SVGs.
-   Add unit and integration tests.

## 📄 License

This project is for demonstration and educational purposes. Feel free to use the code as a learning resource. If you plan to use it for other purposes, please consider the original design's copyright if applicable.
