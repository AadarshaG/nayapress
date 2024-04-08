import "@pathofdev/react-tag-input/build/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import ReactDOM from "react-dom";
import { Windmill } from "windmill-react-ui-kit";
import App from "./App";
import "./assets/css/custom.css";
import "./assets/css/tailwind.css";
import "./assets/css/tailwind.output.css";
import myTheme from "./assets/theme/myTheme";
import ThemeSuspense from "./components/theme/ThemeSuspense";
import { AdminProvider } from "./context/AdminContext";
import { SidebarProvider } from "./context/SidebarContext";

// if (process.env.NODE_ENV !== "production") {
//   const axe = require("react-axe");
//   axe(React, ReactDOM, 1000);
// }
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <AdminProvider>
      <SidebarProvider>
        <Suspense fallback={<ThemeSuspense />}>
          <Windmill usePreferences theme={myTheme}>
            <App />
          </Windmill>
        </Suspense>
      </SidebarProvider>
    </AdminProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,

  document.getElementById("root")
);
