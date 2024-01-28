import React from "react";
import { FooterWrapper } from "./styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        &copy; 2024 Online Store. All rights reserved. |{" "}
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
