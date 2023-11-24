import React from "react";
import Header from "../components/Header";
import { Metadata } from "next";

export const metedata:Metadata = {
  title:{
    template:"Menu"
  }
}

export default function Restaurantlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
}
