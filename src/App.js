import React from "react";
import { useSelector } from 'react-redux'

import NavBar from "./components/NavBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from "@mui/material";

const App = () => {
  const currentTheme = useSelector(store => store.theme)
  const theme = createTheme({
    palette: {
      mode: currentTheme,
    },
  });

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <TodoForm />
        <TodoList />
      </ThemeProvider>
    </Container>
  );
};

export default App
