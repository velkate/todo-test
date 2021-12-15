import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";

// Add components
import NavBar from "./components/NavBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

//Add context, reducer and usePersist(LocalStorage)
import Store from "./store/context";
import reducer from "./store/reducer";
import { usePersistedContext, usePersistedReducer } from "./hooks/usePersist";

// Metarial-UI Theme(Dark or Light)
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from "@mui/material";

const App = () => {
  const globalStore = usePersistedContext(useContext(Store), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state"
  );

  const theme = createTheme({
    palette: {
      mode: state.myTheme,
    },
  });

  return (
    <Container>
      <Store.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <TodoForm />
          <TodoList />
        </ThemeProvider>
      </Store.Provider>
    </Container>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
