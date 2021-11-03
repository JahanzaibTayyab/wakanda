import React from "react";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "../store";
import theme from "../assets/styles/theme";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <div className="App">Wakanda</div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
