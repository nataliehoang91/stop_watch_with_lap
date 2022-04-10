import React, { useState, useEffect } from "react";

import { Container, Box, VStack, Text, Button, HStack } from "@chakra-ui/react";

import TimerInitial from "./TimerInitial";
import TimerRunning from "./TimerRunning";
import TimerPaused from "./TimerPaused";

const BaseApp = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);

  // funcitons

  const pauseTimer = () => {
    setIsPaused(true);
  };

  const startTimer = () => {
    setIsStarted(true);
  };

  const resetTimer = () => {
    setIsStarted(false);
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
      {!isStarted && <TimerInitial startTimer={startTimer} />}
      {isStarted && isPaused && <TimerPaused resetTimer={resetTimer} />}
      {isStarted && !isPaused && <TimerRunning pauseTimer={pauseTimer} />}
    </Container>
  );
};

export default BaseApp;
