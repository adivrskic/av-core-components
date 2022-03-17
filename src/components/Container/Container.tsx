import React from "react";
import "./Container.css";

export interface ContainerProps {
  backgroundColor?: string;
  section?: boolean;
  horizontalAlignment?: string;
  verticalAlignment?: string;
  shadow?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
const Container = ({
  backgroundColor,
  section = false,
  horizontalAlignment = "center",
  verticalAlignment = "center",
  shadow = false,
  children,
}: ContainerProps) => {
  const Container = section ? "<section>" : "div";

  return <section className="av-core-section">{children}</section>;
};

export default Container;
