import React, { useState } from "react";
import useNow from "./shared/hooks/useNow";

import { Container, VStack } from "@chakra-ui/react";

import TimerInitial from "./TimerInitial";
import TimerRunning from "./TimerRunning";
import TimerPaused from "./TimerPaused";
import LapData from "./Laps";
import { addToArray } from "../utils";

const BaseApp = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [laps, bookmarkLap] = useState([]);
  const currentTime = useNow();
  const [startTime, setStartTime] = useState(currentTime);
  const time = useNow() - startTime;

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
    bookmarkLap([]);
  };

  console.log("Hello")

  const bookmarkTime = () => {
    const bmLaps = addToArray(time, laps);
    bookmarkLap(bmLaps);
  };

  return (
    <>
    <h1>Hello</h1>
    <h2>World</h2>
    <p>This is a James</p>
    <p>This is a Natalie</p>

    </>
  );
};

export default BaseApp;
