import React from "react";

import { Container, Box } from "@chakra-ui/react";

const BaseApp = () => (
  <Container
    borderWidth={1}
    borderColor="green.300"
    pt={24}
    maxWidth="1200px"
    minHeight="100vh"
  >
    <Box>Hello World</Box>
  </Container>
);

export default BaseApp;
