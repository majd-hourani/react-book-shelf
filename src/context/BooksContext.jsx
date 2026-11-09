import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  const valueToShare = { count, incrementCount };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { BooksContext };
export default Provider;
