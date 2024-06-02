import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../Css/Header.css";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
