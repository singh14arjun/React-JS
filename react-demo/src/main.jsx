import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import TodoIndex from "./todo-list/todo-index.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(

  <CookiesProvider>
    {/* <TodoIndex /> */}
    <App />
  </CookiesProvider>

);