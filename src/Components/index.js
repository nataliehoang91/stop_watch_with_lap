import React, { useState } from 'react';
import useNow from './shared/hooks/useNow';

import { Container, Box, VStack, Text, Button, HStack } from '@chakra-ui/react';

import TimerInitial from './TimerInitial';
import TimerRunning from './TimerRunning';
import TimerPaused from './TimerPaused';

const BaseApp = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);
  const currentTime = useNow();
  const [startTime, setStartTime] = useState(currentTime);

  // funcitons
  const startTimer = () => {
    setStartTime(currentTime);
    setIsStarted(true);
  };

  const pauseTimer = () => {
    setStartTime(currentTime - startTime);
    setIsPaused(true);
  };

  const resumeTimer = () => {
    setStartTime(currentTime - startTime);
    setIsPaused(false);
  };

  const resetTimer = () => {
    setStartTime(currentTime);
    setIsStarted(false);
    setIsPaused(false);
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
      {isStarted && isPaused && (
        <TimerPaused
          time={startTime}
          resetTimer={resetTimer}
          resumeTimer={resumeTimer}
        />
      )}
      {isStarted && !isPaused && (
        <TimerRunning startTime={startTime} pauseTimer={pauseTimer} />
      )}
    </Container>
  );
};

export default BaseApp;
