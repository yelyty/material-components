import { ThemeProvider } from "@emotion/react";
import theme from "./components/theme";
import Button from "./components/Button/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", gap: 10 }}>
        <Button
          variant="filled"
          label="Click Me"
          onClick={() => alert("Button clicked")}
        />
        <Button
          disabled
          variant="filled"
          label="Click Me"
          onClick={() => alert("Button clicked")}
        />
        <Button
          variant="outlined"
          label="Click Me"
          onClick={() => alert("Button clicked")}
        />
        <Button
          disabled
          variant="outlined"
          label="Click Me"
          onClick={() => alert("Button clicked")}
        />
        <Button
          variant="text"
          label="Click Me"
          onClick={() => alert("Button clicked")}
        />
        <Button
          disabled
          variant="text"
          label="Click Me"
          onClick={() => alert("Button clicked")}
        />
        <Button
          variant="tonal"
          label="Click Me"
          onClick={() => alert("Button clicked")}
        />
        <Button
          disabled
          variant="tonal"
          label="Click Me"
          onClick={() => alert("Button clicked")}
        />
        <Button
          variant="elevated"
          label="Click Me"
          onClick={() => alert("Button clicked")}
        />
        <Button
          disabled
          variant="elevated"
          label="Click Me"
          onClick={() => alert("Button clicked")}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
