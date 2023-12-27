import { createContext, useContext, useState } from "react";
import DescriptionContainer from "../../DescriptionContainer";

type ThemeType = "black" | "white";

const UseContext = () => {
  const [theme, setTheme] = useState<ThemeType>("white");

  const ThemeContext = createContext(theme);
  const activeTheme = useContext(ThemeContext);

  const setBlackTheme = () => {
    setTheme("black");
  };

  const title = `useContext`;
  const description = ` useContext is a React Hook that lets you read and subscribe to
  context from your component.`;

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ backgroundColor: activeTheme }}>
        <DescriptionContainer title={title} description={description}>
          <button onClick={setBlackTheme}>Switch to black theme</button>
          <div>Theme: {activeTheme}</div>
        </DescriptionContainer>
      </div>
    </ThemeContext.Provider>
  );
};

export default UseContext;
