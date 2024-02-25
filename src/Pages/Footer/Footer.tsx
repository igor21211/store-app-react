import { FooterWrapper } from "./styled";

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper data-testid="footer">
      <p>
        &copy; 2024 Online Store. All rights reserved. |{" "}
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
