import { ThemeProvider } from "@emotion/react";
import theme from "./components/theme";
import Button from "./components/Button/Button";
import { List } from "./components/List";
import { Card } from "./components/Card";
import { CardMedia } from "./components/CardMedia";
import { CardActions } from "./components/CardActions";

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
      <List>
        <List.Item>
          <List.Headline text="Headline" />
          <List.SupportingText text="Supporting Text" />
        </List.Item>
      </List>
      <div style={{ display: "flex", gap: 8 }}>
        <Card variant="elevated" customCss={{ width: 300 }}>
          <Button
            variant="filled"
            label="Click Me"
            onClick={() => alert("Button clicked")}
          />
        </Card>
        <Card variant="outlined" customCss={{ width: 300 }}>
          <Button
            variant="filled"
            label="Click Me"
            onClick={() => alert("Button clicked")}
          />
        </Card>
        <Card variant="filled" customCss={{ width: 450 }}>
          <CardActions justifyContent="flex-start">
            <Button
              variant="outlined"
              label="Click Me"
              onClick={() => alert("Button clicked")}
            />
            <Button
              variant="filled"
              label="Click Me"
              onClick={() => alert("Button clicked")}
            />
          </CardActions>
        </Card>
        <Card variant="filled" customCss={{ width: 450 }}>
          <CardMedia
            component="img"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="placeholder"
            customCss={{ height: 100 }}
          />
          <CardActions>
            <Button
              variant="outlined"
              label="Click Me"
              onClick={() => alert("Button clicked")}
            />
            <Button
              variant="filled"
              label="Click Me"
              onClick={() => alert("Button clicked")}
            />
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
