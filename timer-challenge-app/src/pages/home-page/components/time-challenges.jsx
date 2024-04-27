import { useState, useRef } from "react";
import ChallengeBlock from "./challenge-block";
import ResultDialog from "./result-dialog";

const ChallengeBlocks = [
  { level: "easy", challengeTime: 1, isOtherStarted: false },
  { level: "Not Easy", challengeTime: 5, isOtherStarted: false },
];

const ChallengeResult = {
  challengeTime: "",
  resultTime: 0,
};

export default function TimeChallenges() {
  const [challengeBlocks, setChallengeBlocks] = useState(ChallengeBlocks);
  const [challengeResult, setChallengeResult] = useState(ChallengeResult);

  const dialogRef = useRef();

  function handleOnStoppedResult(totalInterval, challenge) {
    setChallengeBlocks((prev) => {
      return prev.map((item) => {
        return { ...item, isOtherStarted: false };
      });
    });
    setChallengeResult({
      challengeTime: challenge,
      resultTime: totalInterval,
    });
    dialogRef.current.show();
  }

  function handleOnStartClick(index) {
    setChallengeResult(ChallengeResult);
    setChallengeBlocks((prev) => {
      return prev.map((item, i) => {
        return i != index ? { ...item, isOtherStarted: true } : item;
      });
    });
  }

  return (
    <>
      <ResultDialog
        ref={dialogRef}
        challenge={challengeResult.challengeTime}
        result={challengeResult.resultTime}
      />
      <div className="max-w-50rem my-12 mx-auto flex flex-wrap gap-8">
        {challengeBlocks.map((challengeBlock, index) => {
          return (
            <ChallengeBlock
              key={index}
              level={challengeBlock.level}
              challengeTime={challengeBlock.challengeTime}
              isOtherBlockStarted={challengeBlock.isOtherStarted}
              onStartClick={() => {
                handleOnStartClick(index);
              }}
              onStoppedResult={(totalInterval) => {
                handleOnStoppedResult(
                  totalInterval,
                  challengeBlock.challengeTime
                );
              }}
            />
          );
        })}
      </div>
    </>
  );
}
