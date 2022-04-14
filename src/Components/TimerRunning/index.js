import React from "react";

import { Box, VStack, Button } from "@chakra-ui/react";

import Status from "../shared/Status";
import Timer from "../shared/Timer";

const BaseTimerRunning = ({ pauseTimer, time, bookmarkTime }) => {
  return (
    <VStack alignItems="flex-start" spacing="16">
      <Status status="Running..." color="blue.300" />
      <Box>
        <Timer time={time} />
        <Box mt="16">
          <Button bgColor="red.500" color="white" mr="4" onClick={pauseTimer}>
            Stop
          </Button>
          <Button bgColor="teal.400" color="white" onClick={bookmarkTime}>
            Lap
          </Button>
        </Box>
      </Box>
    </VStack>
  );
};

export default BaseTimerRunning;
