import React from "react";

import { Box, VStack, Button } from "@chakra-ui/react";

import Status from "../shared/Status";
import Timer from "../shared/Timer";

const BaseTimerPaused = ({ time, resumeTimer, resetTimer }) => {
  return (
    <VStack alignItems="center" spacing="12">
      <Status status="Stopped" color="red.300" />
      <Box>
        <Timer time={time} />
        <Box mt="12">
          <Button
            variant="outline"
            borderColor="yellow.300"
            color="yellow.100"
            px="8"
            mr="8"
            onClick={resumeTimer}
          >
            Resume
          </Button>
          <Button
            variant="outline"
            borderColor="green.500"
            color="green.300"
            px="8"
            onClick={resetTimer}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </VStack>
  );
};

export default BaseTimerPaused;
