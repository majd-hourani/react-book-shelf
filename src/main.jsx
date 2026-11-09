import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const BooksContext = createContext();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BooksContext.Provider value={5}>
      <App />
    </BooksContext.Provider>
  </StrictMode>,
);

export default BooksContext;
