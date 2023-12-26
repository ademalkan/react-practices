import { useDeferredValue, useState } from "react";
import SlowList from "./SlowList";

const UseDefferedValue = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  return (
    <>
      <h1>useDefferedValue</h1>
      <p>
        useDeferredValue is a React Hook that lets you defer updating a part of
        the UI.
      </p>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <SlowList text={deferredText} />
      </div>
    </>
  );
};

export default UseDefferedValue;
