import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import { Home } from "../../pages/Home/Home";
import ReactDOM from 'react-dom';


let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


it("shows success message after confirm button is clicked", () => {
  const {getByText} = render(<Home />)
  act(() => {
    ReactDOM.render(<Home />, container);
  });
  const button = container.querySelector(button);

  fireEvent.click(button);

  expect(getByText('Result found for "gen"')).toBeInTheDocument();
});
