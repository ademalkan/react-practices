import React, { ReactNode } from "react";
import styles from "./style.module.css";
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
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.container}>{description}</p>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default DescriptionContainer;
