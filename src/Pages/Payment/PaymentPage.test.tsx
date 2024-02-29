import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PaymentPage from "./PaymentPage";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  useParams: jest.fn().mockReturnValue({ total: "50" }),
}));

describe("PaymentPage Component", () => {
  test("renders payment page correctly", () => {
    render(
      <Router>
        <PaymentPage />
      </Router>,
    );

    expect(screen.getByText("Payment Details")).toBeInTheDocument();
    expect(screen.getByText("Person Name")).toBeInTheDocument();
    expect(screen.getByText("Card Number")).toBeInTheDocument();
    expect(screen.getByText("Expiry")).toBeInTheDocument();
    expect(screen.getByText("CVV/CVC")).toBeInTheDocument();
    expect(screen.getByText("Pay $ 50")).toBeInTheDocument();
  });

  test("fills and submits the payment form", async () => {
    render(
      <Router>
        <PaymentPage />
      </Router>,
    );

    const mockNavigate = jest.fn();
    jest
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(mockNavigate);
    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("0000 0000 000000"), {
      target: { value: "1234567890123456" },
    });
    fireEvent.change(screen.getByPlaceholderText("MM/YY"), {
      target: { value: "1223" },
    });
    fireEvent.change(screen.getByPlaceholderText("CVV/CVC"), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByText("Pay $ 50"));
    await waitFor(
      () => {
        expect(mockNavigate).toHaveBeenCalledWith("/success");
      },
      { timeout: 5000 },
    );
  });
});
