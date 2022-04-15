import React from "react";

import { Box, Text } from "@chakra-ui/react";
import Timer from "../shared/Timer";

const BaseLapData = ({ laps }) => (
  <Box mt="16">
    <Text fontSize="16px">Laps</Text>
    <Box ml={4}>
      {laps.map((time) => (
        <Timer time={time} key={time} />
      ))}
    </Box>
  </Box>
);

export default BaseLapData;
