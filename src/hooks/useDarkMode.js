import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (initialValue, key) => {


  const [value, setValue] = useLocalStorage('darkMode');
  // Call useLocalStorage and pass in the key you want to use to store whether or not dark mode is enabled. Remember, this hook returns an array with a value and a setter in an array, exactly like the state hook, so make sure to capture those values in a const - const [someValue, setSomeValue] = useLocalStorage('your key here')

    useEffect(()=>{
    // const className = 'dark-mode';
      const body = window.document.body;
      if(value){ 
        body.classList.add('dark-mode');
      } else{
        body.classList.remove('dark-mode');
      }
      }, [value])

      return [value, setValue]
}