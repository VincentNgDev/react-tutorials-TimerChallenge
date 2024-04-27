import { useState, useRef } from "react";

export default function ChallengeBlock({ level, challengeTime, onStartClick, onStoppedResult, isOtherBlockStarted = false}) {
  const startTime = useRef(null);
  const totalInterval  = useRef(0);
  const stopwatch = useRef();

  const [isStarted, setIsStarted] = useState(false);
  const [time, setTime] = useState("00:00:00");

  function handleStart() {
    totalInterval.current = 0;
    startTime.current = new Date();
    setTime("00:00:00");
    stopwatch.current = setInterval(updateStopwatch, 1000);
    setIsStarted(true);
    onStartClick();
  }

  function handleStop() {
    clearInterval(stopwatch.current);
    totalInterval.current += new Date() - startTime.current;
    startTime.current = null;
    setIsStarted(false);
    onStoppedResult(totalInterval.current);
  }

  function updateStopwatch() {
    const elapsedTime = new Date() - startTime.current + totalInterval.current;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000).toString().padStart(2, '0');
    setTime(`${hours}:${minutes}:${seconds}`);
  }

  return (
    <div className="w-22rem flex flex-col items-center justify-center p-8 my-8 mx-auto bg-gradient-to-l from-challenge-bg-from-color to-challenge-bg-to-color text-challenge-txt-color shadow-challenge-box-shadow rounded-md">
      <h1 className="text-2xl tracking-widest m-0 text-center uppercase text-challenge-txt-color">
        {level}
      </h1>
      <p className="border border-solid border-challenge-time-border-color rounded-4px py-1 px-2 m-2">
        {challengeTime} seconds
      </p>
      <button
        disabled={isOtherBlockStarted}
        className="mt-4 py-2 px-4 border-none rounded-4px bg-challenge-btn-bg-color text-challenge-btn-txt-color text-size-i-d2 cursor-pointer hover:bg-challenge-btn-hover-bg-color disabled:bg-result-dialog-btn-disabled-bg-color/50"
        onClick={isStarted ? handleStop : handleStart}
      >
        {isStarted ? "Stop" : "Start"} Challenge
      </button>
      <h2 className="mt-4">
        {isStarted ? `Time is running...${time}` : "Time inactive"}
      </h2>
    </div>
  );
}
