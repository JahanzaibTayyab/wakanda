import React from "react";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "../store";
function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <div className="App">Wakanda</div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
