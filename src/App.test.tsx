import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App>", () => {
  test("renders calculator wrapper", () => {
    const { assert } = renderApp();

    assert.calculator.isRendered();
  });
});

function renderApp() {
  render(<App />);

  const page = buildPageObject();

  return { ...page };
}

function buildPageObject() {
  const pageObject = {
    assert: {
      calculator: {
        isRendered: () => {
          const calculatorElement = screen.getByTestId("calculator");
          expect(calculatorElement).toBeInTheDocument();
        },
      },
    },
  };

  return pageObject;
}
