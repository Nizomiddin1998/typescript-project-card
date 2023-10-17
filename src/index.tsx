import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/react-query";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Suspense fallback={"loading..."}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withCssVariables
          theme={{
            colors: {
              teal: [
                "#6690FF",
                "#6690FF",
                "#6690FF",
                "#6690FF",
                "#6690FF",
                "#6690FF",
                "#6690FF",
                "#6690FF",
                "#6690FF",
                "#6690FF",
              ],
            },
          }}
        >
          <Notifications position="top-right" />
          <App />
        </MantineProvider>
      </QueryClientProvider>
    </React.Suspense>
  </React.StrictMode>
);
