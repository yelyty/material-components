import { ThemeProvider } from "@emotion/react";
import theme from "./components/theme";
import Button from "./components/Button/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="filled"
        label="Click Me"
        onClick={() => alert("Button clicked")}
      />
    </ThemeProvider>
  );
}

export default App;
