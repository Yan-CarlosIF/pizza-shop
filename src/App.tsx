import "./global.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "./components/theme/theme-provider";
import { router } from "./routes";

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
        <Helmet titleTemplate="%s | Pizza Shop" />
        <Toaster richColors closeButton />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
