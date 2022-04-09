import React from "react";

import { Box, chakra } from "@chakra-ui/react";

const BaseTimer = ({ time }) => {
  return (
    <Box pb="16">
      <chakra.span fontSize="4xl">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </chakra.span>
      <chakra.span fontSize="4xl">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
      </chakra.span>
      <chakra.span fontSize="4xl">
        {("0" + ((time / 10) % 100)).slice(-2)}
      </chakra.span>
    </Box>
  );
};

export default BaseTimer;
