import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import TodoIndex from "./todo-list/todo-index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
      <TodoIndex />
    </CookiesProvider>
  </StrictMode>
);