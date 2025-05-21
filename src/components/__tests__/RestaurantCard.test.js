import RestaurantCard from "../RestaurantCards";
import { screen, render } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardmock.json"
import "@testing-library/jest-dom";


it("Should render RestaurantCard componenet with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA}/>);
  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});
