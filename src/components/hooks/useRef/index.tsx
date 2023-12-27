import React, { useRef, useState } from "react";
import DescriptionContainer from "../../DescriptionContainer";

const UseRef = () => {
  const title = `useRef`;
  const description = `useRef is a React Hook that lets you store mutable values between re-renders.`;

  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current?.play();
    } else {
      ref?.current?.pause();
    }
  }
  return (
    <DescriptionContainer title={title} description={description}>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <br />
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </DescriptionContainer>
  );
};

export default UseRef;
