import {
  SuccessContainer,
  SuccessMessage,
  ThankYouMessage,
  HomeLink,
} from "./styled";

const SuccessPage = (): JSX.Element => {
  return (
    <SuccessContainer>
      <SuccessMessage>Payment Successful</SuccessMessage>
      <ThankYouMessage>
        Thank you for shopping with us! Your payment has been processed
        successfully.
      </ThankYouMessage>
      <HomeLink to="/">Return to Home</HomeLink>
    </SuccessContainer>
  );
};

export default SuccessPage;
