import React from "react";
import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";

test("renders display and keypad wrappers", () => {
  const { assert } = renderCalculator();

  assert.keypad.isRendered();
  assert.display.isRendered();
});

function renderCalculator() {
  render(<Calculator />);

  const page = buildPageObject();

  return { ...page };
}

function buildPageObject() {
  const pageObject = {
    assert: {
      display: {
        isRendered: () => {
          const displayElement = screen.getByTestId("display");
          expect(displayElement).toBeInTheDocument();
        },
      },

      keypad: {
        isRendered: () => {
          const keypadElement = screen.getByTestId("keypad");
          expect(keypadElement).toBeInTheDocument();
        },
      },
    },
  };

  return pageObject;
}
