import React from "react";

interface Iprops {
  fill: string;
  cl?: string;
}

export const BreadArrow = ({ fill, cl }: Iprops) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`bread-arrow-${cl}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.41009 8.91205C6.73553 8.58661 7.26317 8.58661 7.5886 8.91205L11.9993 13.3228L16.4101 8.91205C16.7355 8.58661 17.2632 8.58661 17.5886 8.91205C17.914 9.23748 17.914 9.76512 17.5886 10.0906L12.5886 15.0906C12.2632 15.416 11.7355 15.416 11.4101 15.0906L6.41009 10.0906C6.08466 9.76512 6.08466 9.23748 6.41009 8.91205Z"
        fill={fill}
      />
    </svg>
  );
};
