import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import Calculator from "./Calculator";

describe("<Calculator />", () => {
  test("displays ZERO initially", () => {
    const { assert } = renderCalculator();

    assert.display.rendersZero();
  });

  test("displays '12' when user pressed '1' '2' buttons", () => {
    const { assert, act } = renderCalculator();

    act.clickKey("1");
    act.clickKey("2");

    assert.display.rendersInEquation("12");
  });

  test("displays '0' when user pressed '0' '0' buttons", () => {
    const { assert, act } = renderCalculator();

    act.clickKey("0");
    act.clickKey("0");

    assert.display.rendersInEquation("0");
  });

  test("displays '0.' when user pressed '0' '.' buttons", () => {
    const { assert, act } = renderCalculator();

    act.clickKey("0");
    act.clickKey(".");

    assert.display.rendersInEquation("0.");
  });

  test("displays '0.' when user pressed '0' '.' '.' buttons", () => {
    const { assert, act } = renderCalculator();

    act.clickKey("0");
    act.clickKey(".");
    act.clickKey(".");

    assert.display.rendersInEquation("0.");
  });

  test("displays '12 +' when user pressed '1' '2' and '+' buttons", () => {
    const { assert, act } = renderCalculator();

    act.clickKey("1");
    act.clickKey("2");
    act.clickKey("+");

    assert.display.rendersInEquation("12 +");
  });

  test("displays '12 + 3' when user pressed '1' '2' and '+' and '3' buttons", () => {
    const { assert, act } = renderCalculator();

    act.clickKey("1");
    act.clickKey("2");
    act.clickKey("+");
    act.clickKey("3");

    assert.display.rendersInEquation("12 + 3");
  });

  test("displays '12 + 3' in history and '15' in equation when user pressed '1' '2' and '+' and '3' and '=' buttons", () => {
    const { assert, act } = renderCalculator();

    act.clickKey("1");
    act.clickKey("2");
    act.clickKey("+");
    act.clickKey("3");
    act.clickKey("=");

    assert.display.rendersInHistory("12 + 3");
    assert.display.rendersInEquation("15");
  });

  describe("pressing clear button", () => {
    test("clears equation", () => {
      const { assert, act } = renderCalculator();

      act.clickKey("1");
      assert.display.rendersInEquation("1");

      act.clickKey("C");
      assert.display.rendersInEquation("0");
    });

    test("clears equation and history, allow to type again", () => {
      const { assert, act } = renderCalculator();

      act.clickKey("1");
      act.clickKey("+");
      act.clickKey("1");
      act.clickKey("=");
      assert.display.rendersInEquation("2");
      assert.display.rendersInHistory("1 + 1");

      act.clickKey("C");
      assert.display.rendersInHistory("");
      assert.display.rendersInEquation("0");

      act.clickKey("1");
      assert.display.rendersInEquation("1");
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
      clickKey: (buttonText: string) => {
        const buttonElement = within(screen.getByTestId("keypad")).getByText(
          buttonText
        );

        fireEvent.click(buttonElement);
      },
    },

    assert: {
      display: {
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
    },
  };

  return pageObject;
}
