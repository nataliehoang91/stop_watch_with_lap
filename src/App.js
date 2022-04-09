import { ChakraProvider } from "@chakra-ui/react";

import Components from "./Components";

const App = () => {
  return (
    <ChakraProvider>
      <Components />
    </ChakraProvider>
  );
};

export default App;
