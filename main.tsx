import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "./hooks/use-theme"
import { ToastProvider, ToastViewport } from "@/components/ui/toast"
import "./globals.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <App />
        <ToastViewport />
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>
)
