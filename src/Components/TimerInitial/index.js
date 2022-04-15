import React from "react";

import { Box, VStack, Button } from "@chakra-ui/react";

import Status from "../shared/Status";
import Timer from "../shared/Timer";

const BaseTimerInitial = ({ startTimer }) => (
  <VStack alignItems="flex-start" spacing="16">
    <Status status="Initial" color="green.300" />
    <Box>
      <Timer time="0" />
      <Button bgColor="green.500" color="white" onClick={startTimer} mt="16">
        Start
      </Button>
    </Box>
  </VStack>
);

export default BaseTimerInitial;
