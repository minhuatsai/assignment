import { useRef, useState } from "react";

function Assignment2() {
  const [buttonsState, setButtonsState] = useState({
    btnStart: { disabled: false },
    btnEnd: { disabled: true },
  });
  const [duration, setDuration] = useState("");
  const timerRef = useRef();

  function setBtnDisabled(btnType, isDisabled) {
    setButtonsState((state) => {
      return {
        ...state,
        [btnType]: {
          ...state.btnStart,
          disabled: isDisabled,
        },
      };
    });
  }
  function recordTimerCurrentTime() {
    timerRef.current = new Date().getTime();
  }
  function setTimerDuration() {
    const currentTime = new Date().getTime();
    setDuration(currentTime - timerRef.current);
  }
  function onStart() {
    setBtnDisabled("btnStart", true);
    setBtnDisabled("btnEnd", false);
    recordTimerCurrentTime();
  }
  function onEnd() {
    setBtnDisabled("btnStart", false);
    setBtnDisabled("btnEnd", true);
    setTimerDuration();
  }
  return (
    <div className="page-container">
      <div className="page-content">
        <button onClick={onStart} disabled={buttonsState.btnStart.disabled}>
          Start
        </button>
        <button onClick={onEnd} disabled={buttonsState.btnEnd.disabled}>
          End
        </button>
        <p>
          duration (milliseconds) :{" "}
          {buttonsState.btnStart.disabled ? "loading..." : `${duration}`}
        </p>
      </div>
    </div>
  );
}

export default Assignment2;
