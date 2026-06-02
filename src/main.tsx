import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//Create a client
const queryClient = new QueryClient();
//createRoot(document.getElementById("root")!).render(
ReactDOM.createRoot(document.getElementById("root")!).render(
  //Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
);
