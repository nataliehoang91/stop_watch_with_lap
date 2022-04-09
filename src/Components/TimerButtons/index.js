import React from "react";

import { Button, HStack } from "@chakra-ui/react";

const BaseTimerButtons = ({ isActive, isPaused, startTimer, resetTimer }) => (
  <HStack>
    {!isActive ? (
      <Button bgColor="green.500" color="white" onClick={startTimer}>
        Start
      </Button>
    ) : (
      <>
        <Button bgColor="green.500" color="white" onClick={resetTimer}>
          Reset
        </Button>
        {isPaused ? (
          <Button bgColor="red.500" color="white">
            Stop
          </Button>
        ) : (
          <Button bgColor="green.500" color="white">
            Resume
          </Button>
        )}
        <Button bgColor="teal.400" color="white">
          Lap
        </Button>
      </>
    )}
  </HStack>
);

export default BaseTimerButtons;
