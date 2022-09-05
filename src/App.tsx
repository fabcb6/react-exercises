import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import FocusableInput from "./components/FocusableInput/FocusableInput";
import Message from "./components/Message/Message";
import ControlsComponent from "./components/ControlsComponent/ControlsComponent";
import GroceryApp from "./components/GroceryApp/GroceryApp";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>Main Page</StyledApp>
      <button onClick={() => toggleTheme()}>Change {theme} mode</button>

      <hr />
      <FocusableInput shouldFocus={true} />
      <hr />
      <Message />
      <hr />
      <ControlsComponent username={"Fabian"} permissions={[]} />
      <hr />
      <GroceryApp
        products={[
          { name: "Oranges", votes: 0 },
          { name: "Bananas", votes: 0 },
        ]}
      />
    </ThemeProvider>
  );
}

export default App;
