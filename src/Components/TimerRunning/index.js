import React from "react";

import {
  Box,
  VStack,
  Button,
  Spinner,
  HStack,
  ChakraProvider,
  Stack,
} from "@chakra-ui/react";

import Status from "../shared/Status";
import Timer from "../shared/Timer";

const BaseTimerRunning = ({ pauseTimer, time, bookmarkTime }) => {
  return (
    <VStack alignItems="center" spacing="12">
      <HStack>
        <Status status="Running..." color="blue.300" />
        <Spinner
          thickness="1px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="sm"
        />
      </HStack>
      <Box>
        <Timer time={time} />
        <Box mt="12">
          <Button
            variant="outline"
            borderColor="red.500"
            color="red.400"
            px="8"
            mr="8"
            onClick={pauseTimer}
          >
            Stop
          </Button>
          <Button
            variant="outline"
            borderColor="yellow.300"
            color="yellow.100"
            px="8"
            _active={{ borderColor: "yellow.300", color: "yellow.100" }}
            _hover={{ borderColor: "yellow.300", color: "yellow.100" }}
            _focus={{ borderColor: "yellow.300", color: "yellow.100" }}
            onClick={bookmarkTime}
          >
            Lap
          </Button>
        </Box>
      </Box>
    </VStack>
  );
};

export default BaseTimerRunning;
