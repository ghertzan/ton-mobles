import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/styles.css";
import CartContextProvider from "./providers/CartContextProvider.jsx";
import { ToastContainer, Slide } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <App />
      <ToastContainer transition={Slide} position="top-center" />
    </CartContextProvider>
  </StrictMode>
);
