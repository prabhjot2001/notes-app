import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider.tsx";
import React from "react";
import { Toaster } from "react-hot-toast";
import NotesContextProvider from "./context/NotesContext.tsx";
import UserAuthContextProvider from "./context/UserAuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <UserAuthContextProvider>
          <NotesContextProvider>
            <App />
          </NotesContextProvider>
        </UserAuthContextProvider>
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
