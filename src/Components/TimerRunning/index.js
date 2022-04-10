import React from "react";

import { Container, Box, VStack, Button } from "@chakra-ui/react";

import Status from "../shared/Status";
import Timer from "../shared/Timer";

const BaseTimerRunning = ({ pauseTimer }) => {
  return (
    <VStack alignItems="flex-start" spacing="16">
      <Status status="Running..." color="blue.300" />
      <Box>
        <Timer time="0" />
        <Button bgColor="red.500" color="white" mr="4" onClick={pauseTimer}>
          Stop
        </Button>
        <Button bgColor="teal.400" color="white">
          Lap
        </Button>
      </Box>
    </VStack>
  );
};

export default BaseTimerRunning;
