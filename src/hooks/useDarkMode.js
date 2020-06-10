import {useLocalStorage} from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {

  const [value, setValue] = useLocalStorage("darkMode", false);

  useEffect(() => {
    const className = 'dark-mode';
    const body = window.document.body;
    if (value) {
      window.body.classList.add(className);
    } else {
      window.body.classList.remove(className);
    }
  }, [value])

  return [value, setValue];
};
