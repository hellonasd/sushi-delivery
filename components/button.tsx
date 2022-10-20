import React from "react";

interface IProps {
  title: string;
  cl?: string;
}

export const Button: React.FC<IProps> = ({ title, cl }) => {
  return <button className={`button ${cl ? cl : ""}`}>{title}</button>;
};
