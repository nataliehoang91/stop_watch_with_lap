import React from "react";

import { Box, chakra } from "@chakra-ui/react";

const BaseTimer = ({ time, isLappedTime }) => {
  const hh = String(Math.floor(time / 1000 / 60 / 60)).padStart(2, "0");
  const mm = String(Math.floor(time / 1000 / 60) % 60).padStart(2, "0");
  const ss = String(Math.floor(time / 1000) % 60).padStart(2, "0");
  const ms = String(time % 1000).padStart(3, "0");

  return (
    <Box>
      <chakra.span
        fontSize={isLappedTime ? "3xl" : "5xl"}
        color="whiteAlpha.800"
      >
        {hh}:
      </chakra.span>
      <chakra.span
        fontSize={isLappedTime ? "3xl" : "5xl"}
        color="whiteAlpha.800"
      >
        {mm}:
      </chakra.span>
      <chakra.span
        fontSize={isLappedTime ? "3xl" : "5xl"}
        color="whiteAlpha.800"
      >
        {ss}:
      </chakra.span>
      <chakra.span
        fontSize={isLappedTime ? "3xl" : "5xl"}
        color="whiteAlpha.800"
      >
        {ms}
      </chakra.span>
    </Box>
  );
};

export default BaseTimer;
