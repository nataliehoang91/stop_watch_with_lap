import React from 'react';

import { Box, VStack, Button } from '@chakra-ui/react';

import Status from '../shared/Status';
import Timer from '../shared/Timer';

const BaseTimerPaused = ({ time, resumeTimer, resetTimer }) => {
  return (
    <VStack alignItems="flex-start" spacing="16">
      <Status status="Stopped" color="red.300" />
      <Box>
        <Timer time={time} />
        <Button bgColor="blue.500" color="white" mr="4" onClick={resumeTimer}>
          Resume
        </Button>
        <Button bgColor="teal.400" color="white" onClick={resetTimer}>
          Reset
        </Button>
      </Box>
    </VStack>
  );
};

export default BaseTimerPaused;
