import { useId } from "react";
import DescriptionContainer from "../../DescriptionContainer";

const UseId = () => {
  const id = useId();

  const title = `useId`;
  const description = `useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.`;
  return (
    <DescriptionContainer title={title} description={description}>
      <form>
        {id}
        <hr />
        <label htmlFor={id + "-firstName"}>First Name:</label>
        <input id={id + "-firstName"} type="text" />
        <hr />
        <label htmlFor={id + "-lastName"}>Last Name:</label>
        <input id={id + "-lastName"} type="text" />
      </form>
    </DescriptionContainer>
  );
};

export default UseId;
