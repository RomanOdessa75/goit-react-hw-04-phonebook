import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const storedContacts = localStorage.getItem(key) ?? defaultValue;
    const parsedContacts = JSON.parse(storedContacts);
    // if (parsedContacts) {
    //   return parsedContacts;
    // } else {
    //   return [];
    // }
    return parsedContacts;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
