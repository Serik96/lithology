import React, { PropsWithChildren } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

type TProps = PropsWithChildren;

const AppProvider = ({ children }: TProps) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppProvider;
