import React from "react";

import { Box, HStack, Text } from "@chakra-ui/react";
import Timer from "../shared/Timer";

const BaseLapData = ({ laps }) => (
  <Box pt="16">
    <Text fontSize="2xl" color="whiteAlpha.900">
      Laps
    </Text>
    <Box
      mx="8"
      my="4"
      textAlign="left"
      borderColor="whiteAlpha.300"
      borderWidth="1px"
      borderStyle="solid"
      p="8"
    >
      {laps.map((time, index) => (
        <HStack justifyContent="space-between">
          <Timer time={time} key={time} isLappedTime />
          <Text pl="24" fontSize="2xl" color="whiteAlpha.900">
            {index + 1} lap
          </Text>
        </HStack>
      ))}
    </Box>
  </Box>
);

export default BaseLapData;
