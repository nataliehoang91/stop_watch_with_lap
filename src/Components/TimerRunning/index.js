import React from 'react';
import useNow from '../shared/hooks/useNow';

import { Container, Box, VStack, Button } from '@chakra-ui/react';

import Status from '../shared/Status';
import Timer from '../shared/Timer';

const BaseTimerRunning = ({ pauseTimer, startTime }) => {
  const time = useNow() - startTime;
  return (
    <VStack alignItems="flex-start" spacing="16">
      <Status status="Running..." color="blue.300" />
      <Box>
        <Timer time={time} />
        <Button bgColor="red.500" color="white" mr="4" onClick={pauseTimer}>
          Stop
        </Button>
        <Button bgColor="teal.400" color="white">
          Lap
        </Button>
      </Box>
    </VStack>
  );
};

export default BaseTimerRunning;
