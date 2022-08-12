import { useEffect, useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<string>("theme", "light");

  const darkTheme = useCallback(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    setTheme("dark");
  }, []);

  const lightTheme = useCallback(() => {
    document.documentElement.removeAttribute("data-theme");
    setTheme("light");
  }, []);

  //set theme
  useEffect(() => {
    if (theme === "dark") {
      darkTheme();
    } else {
      lightTheme();
    }
  }, []);

  return { lightTheme, darkTheme };
};

export default useTheme;
