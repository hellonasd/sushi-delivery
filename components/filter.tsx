import React from "react";

interface Iprops {
  children: React.ReactNode;
}

export const Filter = ({ children }: Iprops) => {
  return <>{children}</>;
};
