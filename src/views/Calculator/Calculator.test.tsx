import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import Calculator from "./Calculator";

describe("<Calculator />", () => {
  test("renders display and keypad wrappers", () => {
    const { assert } = renderCalculator();

    assert.keypad.isRendered();
    assert.display.isRendered();
  });

  test("displays ZERO initially", () => {
    const { assert } = renderCalculator();

    assert.display.rendersZero();
  });

  test("displays 12 when user pressed '1' '2' buttons", () => {
    const { assert, act } = renderCalculator();

    act.clickButton("1");
    act.clickButton("2");

    assert.display.rendersInEquation("12");
  });

  test("displays '12 +' when user pressed '1' '2' and '+' buttons", () => {
    const { assert, act } = renderCalculator();

    act.clickButton("1");
    act.clickButton("2");
    act.clickButton("+");

    assert.display.rendersInEquation("123 +");
  });

  test("displays '12 + 3' when user pressed '1' '2' and '+' and '3' buttons", () => {
    const { assert, act } = renderCalculator();

    act.clickButton("1");
    act.clickButton("2");
    act.clickButton("+");
    act.clickButton("3");

    assert.display.rendersInEquation("12 + 4");
  });

  test("displays '12 + 3' in history and '15' in equation when user pressed '1' '2' and '+' and '3' and '=' buttons", () => {
    const { assert, act } = renderCalculator();

    act.clickButton("1");
    act.clickButton("2");
    act.clickButton("+");
    act.clickButton("3");
    act.clickButton("=");

    assert.display.rendersInHistory("12 + 3");
    assert.display.rendersInEquation("15");
  });

  describe("pressing clear button", () => {
    test("clears equation", () => {
      const { assert, act } = renderCalculator();

      act.clickButton("1");
      assert.display.rendersInEquation("1");

      act.clickButton("C");
      assert.display.rendersInEquation("0");
    });

    test("clears equation and history", () => {
      const { assert, act } = renderCalculator();

      act.clickButton("1");
      act.clickButton("+");
      act.clickButton("1");
      assert.display.rendersInEquation("2");
      assert.display.rendersInHistory("1 + 1");

      act.clickButton("C");
      assert.display.rendersInHistory("");
      assert.display.rendersInEquation("0");
    });
  });
});

function renderCalculator() {
  const utils = render(<Calculator />);

  const page = buildPageObject();

  return { ...page, utils };
}

function buildPageObject() {
  const pageObject = {
    act: {
      clickButton: (buttonText: string) => {
        const buttonElement = screen.getByText(buttonText);

        fireEvent.click(buttonElement);
      },
    },

    assert: {
      display: {
        isRendered: () => {
          const displayElement = screen.getByTestId("display");
          expect(displayElement).toBeInTheDocument();
        },

        rendersZero: () => {
          const equationElement = within(
            screen.getByTestId("equation")
          ).getByText("0");

          expect(equationElement).toBeInTheDocument();
        },

        rendersInEquation: (equation: string) => {
          const equationElement = within(
            screen.getByTestId("equation")
          ).getByText(equation);

          expect(equationElement).toBeInTheDocument();
        },

        rendersInHistory: (history: string) => {
          const historyElement = within(
            screen.getByTestId("history")
          ).getByText(history);

          expect(historyElement).toBeInTheDocument();
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
