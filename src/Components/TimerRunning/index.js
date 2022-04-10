import React from "react";

import { Container, Box, VStack, Button } from "@chakra-ui/react";

import Status from "../shared/Status";
import Timer from "../shared/Timer";

const BaseTimerRunning = ({ pauseTimer }) => {
  return (
    <Container
      borderWidth={1}
      borderColor="green.300"
      pt="24"
      px="16"
      maxWidth="800px"
      minHeight="100vh"
    >
      <VStack alignItems="flex-start" spacing="16">
        <Status status="Initial" color="green.300" />
        <Box>
          <Timer time="0" />
          <Button bgColor="red.500" color="white" onClick={pauseTimer}>
            Stop
          </Button>
          <Button bgColor="teal.400" color="white">
            Lap
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default BaseTimerRunning;
