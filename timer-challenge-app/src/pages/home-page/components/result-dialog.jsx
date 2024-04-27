import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultDialog = forwardRef(function ResultDialog(
  { challenge, result },
  ref
) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      show() {
        dialogRef.current.showModal();
      },
    };
  });

  const resultTime = result === null ? "0" : (result / 1000).toFixed(2);
  // Calculate the score if the time difference is 0 is 100% else if the time difference is 2 or greater will be 0%

  let score = 0;

  if (result !== null) {
    const timeDifference = Math.abs(challenge - resultTime);
    if (timeDifference === 0) {
      score = 100;
    } else if (timeDifference >= 2) {
      score = 0;
    } else {
      score = Math.round((1 - timeDifference / 2) * 100);
    }
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="border-none rounded-lg p-8 bg-result-dialog-bg-color open:animate-result-dialog-open-animation backdrop:bg-black/90"
    >
      <h2 className="font-handjet-mono m-0 mb-1 text-5xl uppercase">
        Your Score: {score}%
      </h2>
      <p className="my-2 mx-0 text-size-i-d2">
        Your target time was{" "}
        <strong className="text-result-dialog-txt-strong-color">
          {challenge} second
        </strong>
      </p>
      <p className="my-2 mx-0 text-size-i-d2">
        You stopped the timer at{" "}
        <strong className="text-result-dialog-txt-strong-color">
          {resultTime} seconds
        </strong>
      </p>
      <form method="dialog" className="text-right">
        <button className="mt-4 py-2 px-4 border-none rounded-4px bg-result-dialog-btn-bg-color text-result-dialog-btn-txt-color cursor-pointer hover:bg-result-dialog-btn-hover-bg-colo">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("result-dialog-root")
  );
});

export default ResultDialog;
