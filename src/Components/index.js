import React, { useState, useEffect } from "react";

import { Container, Box, VStack, Text, Button, HStack } from "@chakra-ui/react";

import Status from "./Status";
import Timer from "./Timer";
import TimerButtons from "./TimerButtons";
import Laps from "./Laps";

const BaseApp = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  // funcitons
  const getStatus = () => {};

  const pauseTimer = () => {};

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <Container
      borderWidth={1}
      borderColor="green.300"
      pt="24"
      px="16"
      maxWidth="800px"
      minHeight="100vh"
    >
      <VStack alignItems="flex-start" spacing="16">
        <Status />
        <Box>
          <Timer time={time} />
          <TimerButtons
            isActive={isActive}
            isPaused={isPaused}
            startTimer={startTimer}
            resetTimer={resetTimer}
          />
        </Box>
        <Laps />
      </VStack>
    </Container>
  );
};

export default BaseApp;
