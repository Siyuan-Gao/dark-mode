import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (initialValue, key) => {


  const [someValue, setSeomeValue] = useLocalStorage('toggle',initialValue );
  // Call useLocalStorage and pass in the key you want to use to store whether or not dark mode is enabled. Remember, this hook returns an array with a value and a setter in an array, exactly like the state hook, so make sure to capture those values in a const - const [someValue, setSomeValue] = useLocalStorage('your key here')

    useEffect(()=>
    // const className = 'dark-mode';

      if(someValue){ 
        window.document.body.classList.add('dark-mode');}else{
        window.document.body.classList.remove('dark-mode');
      }
      , [someValue]);

      return [someValue, setSomeValue]
}