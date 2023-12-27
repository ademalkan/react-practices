import { useDeferredValue, useState } from "react";
import SlowList from "./SlowList";
import DescriptionContainer from "../../DescriptionContainer";

const UseDefferedValue = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  const title = `useDefferedValue`;
  const description = `useDeferredValue is a React Hook that lets you defer updating a part o'the UI.`;
  return (
    <DescriptionContainer title={title} description={description}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </DescriptionContainer>
  );
};

export default UseDefferedValue;
