const useLocalStorage = () => {
  const loadFromLocalStorage = (name: string) => {
    try {
      const serialisedState = window.localStorage.getItem(name);
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (err) {
      console.log(err);
    }
  };

  function saveToLocalStorage(name: string, data: object) {
    try {
      const serialisedData = JSON.stringify(data);
      window.localStorage.setItem(name, serialisedData);
    } catch (err) {
      console.log(err);
    }
  }

  return { loadFromLocalStorage, saveToLocalStorage };
};

export default useLocalStorage;
