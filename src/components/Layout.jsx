import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ childen }) => {
  return (
    <div>
      <Header />
      {childen}
      <Footer />
    </div>
  );
};

export default Layout;
