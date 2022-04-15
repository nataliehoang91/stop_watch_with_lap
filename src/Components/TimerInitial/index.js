import React from "react";

import { Box, VStack, Button } from "@chakra-ui/react";

import Status from "../shared/Status";
import Timer from "../shared/Timer";

const BaseTimerInitial = ({ startTimer }) => (
  <VStack spacing="12" alignItems="center">
    <Status status="Initial" color="yellow.300" />
    <Box>
      <Timer time="0" />
      <Button
        variant="outline"
        borderColor="yellow.300"
        color="yellow.100"
        px="8"
        onClick={startTimer}
        mt="12"
      >
        Start
      </Button>
    </Box>
  </VStack>
);

export default BaseTimerInitial;
