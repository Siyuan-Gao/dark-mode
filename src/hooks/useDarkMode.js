import {useLocalStorage} from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key,initialValue) => {

  const [value, setValue] = useLocalStorage("key,initialValue");

  useEffect(() => {
    const className = 'dark-mode';
    const body = window.document.body;
    if (value) {

      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }
  }, [value])

  return [value, setValue];
};
