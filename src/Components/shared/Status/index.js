import React from "react";

import { Box, Text } from "@chakra-ui/react";

const BaseStatus = ({ status, color }) => (
  <Box>
    <Text fontSize="md" color={color}>
      {status}
    </Text>
  </Box>
);

export default BaseStatus;
