import { useContext, createContext } from "react";
import type { ThemeContextProps } from "./theme";

const INITIAL_CONTEXT: ThemeContextProps = {
  theme: "light",
  toggleTheme() {},
};

const ThemeContext = createContext<ThemeContextProps>(INITIAL_CONTEXT);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { useTheme, ThemeContext };
