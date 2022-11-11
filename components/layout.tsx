import React from "react";
import { Header } from "./header";
import { Menu } from "./menu";

interface Iprops {
  children: React.ReactNode;
}

export const Layout = ({ children }: Iprops) => {
  return (
    <>
      <Header />
      <Menu />
      {children}
    </>
  );
};
