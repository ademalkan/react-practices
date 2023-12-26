import { createContext, useContext, useState } from "react";

type ThemeType = "black" | "white";

const UseContext = () => {
  const [theme, setTheme] = useState<ThemeType>("white");
  
  const ThemeContext = createContext(theme);
  const activeTheme = useContext(ThemeContext);

  const setBlackTheme = () => {
    setTheme("black");
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div style={{ backgroundColor: activeTheme }}>
          <h1>useContext</h1>
          <p>
            useContext is a React Hook that lets you read and subscribe to
            context from your component.
          </p>
          <div>
            <button onClick={setBlackTheme}>Switch to black theme</button>
            <div>Theme: {activeTheme}</div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default UseContext;
