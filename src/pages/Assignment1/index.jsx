import { useEffect, useRef, useState } from "react";
import "./index.scss";

function Assignment1() {
  const initMaxFrameWidth = 400;
  const [frameMaxWidth, setFrameMaxWidh] = useState(initMaxFrameWidth);
  const [textareaState, setTextareaState] = useState({
    disabled: false,
    height: "auto",
  });
  const textField = useRef();

  function handleTextareaDisabled() {
    setTextareaState((state) => {
      return {
        ...state,
        disabled: !state.disabled,
      };
    });
  }
  function handleFrameWidth() {
    setFrameMaxWidh((state) => {
      return state === initMaxFrameWidth ? 800 : initMaxFrameWidth;
    });
  }
  function handleTextFieldResize() {
    const currentScrollHeight = textField.current.scrollHeight;
    if (currentScrollHeight !== textField.current.clientHeight) {
      setTextareaState((state) => {
        return {
          ...state,
          height: `${currentScrollHeight}px`,
        };
      });
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleTextFieldResize);

    return () => {
      window.removeEventListener("resize", handleTextFieldResize);
    };
  }, []);

  //處理當視窗resize後按下button2，textarea高度會有scroll卷軸的問題
  useEffect(() => {
    handleTextFieldResize();
  }, [frameMaxWidth]);

  return (
    <>
      <div className="frame" style={{ maxWidth: `${frameMaxWidth}px` }}>
        <textarea
          className="text-field"
          disabled={textareaState.disabled}
          ref={textField}
          onChange={handleTextFieldResize}
          style={{ height: textareaState.height }}
        ></textarea>
        <ul className="button-list">
          <li>
            <button onClick={handleTextareaDisabled}>Button1</button>
          </li>
          <li>
            <button onClick={handleFrameWidth}>Button2</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Assignment1;
