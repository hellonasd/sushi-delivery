import React from "react";

interface Iprops {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: Iprops) => {
  return <div className="container">{children}</div>;
};
