import React from "react";

import { Box, chakra } from "@chakra-ui/react";

const BaseTimer = ({ time }) => {
  const hh = String(Math.floor(time / 1000 / 60 / 60)).padStart(2, "0");
  const mm = String(Math.floor(time / 1000 / 60) % 60).padStart(2, "0");
  const ss = String(Math.floor(time / 1000) % 60).padStart(2, "0");
  const ms = String(time % 1000).padStart(3, "0");

  return (
    <Box>
      <chakra.span fontSize="4xl">{hh}:</chakra.span>
      <chakra.span fontSize="4xl">{mm}:</chakra.span>
      <chakra.span fontSize="4xl">{ss}:</chakra.span>
      <chakra.span fontSize="4xl">{ms}</chakra.span>
    </Box>
  );
};

export default BaseTimer;
