import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ProductList from "./ProductList";
import "@testing-library/jest-dom";
// Mock the fetchProducts action
jest.mock("../../store/product.slice", () => ({
  ...jest.requireActual("../../store/product.slice"),
  fetchProducts: jest.fn(),
}));

describe("ProductList Component", () => {
  const mockStore = configureStore();
  const initialState = {
    products: {
      items: [
        {
          id: 1,
          title: "Product Title",
          description: "Product Description",
          // Add other necessary fields
        },
        // Add more items if needed
      ],
      isLoading: false,
    },
  };

  test("renders product list after loading", async () => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router>
          <ProductList />
        </Router>
      </Provider>,
    );

    // Wait for the loading state to complete
    await waitFor(() => {
      expect(screen.getByText("Product Title")).toBeInTheDocument();
    });

    // You can add more assertions based on your UI structure
    expect(screen.getByText("Product Description")).toBeInTheDocument();
    // Add more assertions as needed
  });
});
