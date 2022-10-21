import React from "react";

interface IProps {
  title: string;
  st?: string;
  cl?: string;
}

export const Button: React.FC<IProps> = ({ title, st, cl }) => {
  return (
    <button className={`button ${cl ? "cl" : ""}`}>
      <span className="button__decstop">{title}</span>
      <span className="button__mobile">{st}</span>
    </button>
  );
};
