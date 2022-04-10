import React from "react";

import { Box, VStack, Button } from "@chakra-ui/react";

import Status from "../shared/Status";
import Timer from "../shared/Timer";

const BaseTimerPaused = () => {
  return (
    <VStack alignItems="flex-start" spacing="16">
      <Status status="Initial" color="green.300" />
      <Box>
        <Timer time="0" />
        <Button bgColor="red.500" color="white" mr="4">
          Stop
        </Button>
        <Button bgColor="teal.400" color="white">
          Lap
        </Button>
      </Box>
    </VStack>
  );
};

export default BaseTimerPaused;