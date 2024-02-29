import React, { MouseEvent, useState } from "react";
import {
  Container,
  Card,
  Heading,
  InputContainer,
  StyledInput,
  Label,
  Button,
  ArrowIcon,
  ContainerLoading,
} from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "../../components/Alert/AlertActions";
import { Box, CircularProgress } from "@mui/material";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [cardHolderName, setCardHolderName] = useState("");
  const { total } = useParams();
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const formatCardNumber = (input: string) => {
    const formattedInput = input.replace(/\D/g, "").substring(0, 16);
    const cardNumberSections = formattedInput.match(/.{1,4}/g);
    return cardNumberSections ? cardNumberSections.join(" ") : "";
  };

  const formatExpiry = (input: string) => {
    const formattedInput = input.replace(/\D/g, "").substring(0, 4);
    const expirySections = formattedInput.match(/.{1,2}/g);
    return expirySections ? expirySections.join("/") : "";
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const input = event.target.value;
    setCardNumber(formatCardNumber(input));
  };

  const handleExpiryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const input = event.target.value;
    setExpiry(formatExpiry(input));
  };

  const handleCvvChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const input = event.target.value.replace(/\D/g, "").substring(0, 3);
    setCvv(input);
  };
  const handlePaymentSubmit = (e: MouseEvent) => {
    e.preventDefault();
    if (!cardHolderName || !cardNumber || !cvv || !expiry) {
      setMessage("Error ! Please fill in all the required fields");
    }
    if (cardHolderName && cardNumber && cvv && expiry) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/success");
      }, 4000);
    }
  };
  if (loading) {
    return (
      <>
        <ContainerLoading>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </ContainerLoading>
      </>
    );
  }

  return (
    <Container>
      <Alert erorrMsg={message} setErorr={setMessage} />
      <Card>
        <Heading>Payment Details</Heading>
        <InputContainer>
          <Label>Person Name</Label>
          <StyledInput
            type="text"
            onChange={(e) => setCardHolderName(e.target.value)}
            placeholder="Name"
            value={cardHolderName}
          />
        </InputContainer>
        <InputContainer>
          <Label>Card Number</Label>
          <StyledInput
            value={cardNumber}
            onChange={(e) => handleCardNumberChange(e)}
            type="text"
            placeholder="0000 0000 000000"
          />
        </InputContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <InputContainer style={{ width: "48%" }}>
            <Label>Expiry</Label>
            <StyledInput
              onChange={(e) => handleExpiryChange(e)}
              value={expiry}
              type="string"
              placeholder="MM/YY"
            />
          </InputContainer>
          <InputContainer style={{ width: "48%" }}>
            <Label>CVV/CVC</Label>
            <StyledInput
              onChange={(e) => handleCvvChange(e)}
              value={cvv}
              placeholder="CVV/CVC"
              type="number"
            />
          </InputContainer>
        </div>
        <Button onClick={(e) => handlePaymentSubmit(e)}>
          <span>Pay $ {total}</span>
          <ArrowIcon>&#10148;</ArrowIcon>
        </Button>
      </Card>
    </Container>
  );
};

export default PaymentPage;
