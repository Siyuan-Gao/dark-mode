import {useState} from 'react'

export const useLocalStorage = (key , initialValue)=> {
  // Now, to set something to localStorage, we need a key (must be a string) and a value (can be anything).To retrieve something from localStorage, we need the key. To update something in localStorage, you use the same method as adding something new, and it will just replace the old key/value pair in localStorage. Knowing this, let's add key and initialValue as parameters to the hook.
  const [storeValue, setStoreValue] = useState(()=>{
  // Set up a state property called storedValue.
  const item = window.localStorage.getItem(key);
  // In the callback ,check if the item we passed in already exists in localStorage, and return that value, otherwise we'll return whatever initialValue was passed in.
  return item ? JSON.parse(item) : initialValue;
  //  if you pass in arrays or objects to localStorage, you will need to parse it into JSON. Then when you retrieve it, like we do above, you'll need to parse it back into regular JavaScript
});

  const setValue = value => {
      // Save state
    setStoreValue(value);
    //Save to local storage
    window.localStorage.setItem(key,JSON.stringify(value));
  }
  
  return [storeValue,setStoreValue]
}