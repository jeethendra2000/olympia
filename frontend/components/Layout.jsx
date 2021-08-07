import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container } from "@material-ui/core";

function layout({ children }) {
  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
      <Navbar />
      <Container style={{paddingTop:"50px"}}>{children}</Container>
      <Footer />
    </div>
  );
}

export default layout;
