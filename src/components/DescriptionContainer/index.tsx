import React, { ReactNode } from "react";

type DescriptionContainerProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const DescriptionContainer: React.FC<DescriptionContainerProps> = ({
  description,
  title,
  children,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>{children}</div>
    </>
  );
};

export default DescriptionContainer;
