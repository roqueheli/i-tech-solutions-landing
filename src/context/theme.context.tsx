"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Tipos para el contexto
interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Contexto del tema
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Tipos para el proveedor
interface ThemeProviderProps {
  children: ReactNode;
}

// Proveedor del contexto
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Recuperar el estado inicial desde localStorage
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? true : false;
  });

  // Alternar entre modo oscuro y claro
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      // Guardar el tema en localStorage
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Efecto para sincronizar el DOM con el tema
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
