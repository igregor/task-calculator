import { render, screen, within } from "@testing-library/react";

import Display, { DisplayProps } from "./Display";

describe("<Display />", () => {
  describe("renders ZERO", () => {
    test("when props are not defined", () => {
      const { assert } = renderDisplay({});

      assert.rendersZero();
    });

    test("when leftOperand is not defined, but operator is defined", () => {
      const { assert } = renderDisplay({ operator: "addition" });

      assert.rendersZero();
    });

    test("when leftOperand is not defined, but rightOperand is defined", () => {
      const { assert } = renderDisplay({ rightOperand: "456" });

      assert.rendersZero();
    });
  });

  describe("equation", () => {
    test("renders leftOperand when is defined", () => {
      const { assert } = renderDisplay({
        leftOperand: "123",
      });

      assert.rendersInEquation("123");
    });

    test("renders leftOperand and operator when both are defined", () => {
      const { assert } = renderDisplay({
        leftOperand: "123",
        operator: "substraction",
      });

      assert.rendersInEquation("123 -");
    });

    test("renders equation when leftOperand and operator, and rightOperand are defined", () => {
      const { assert } = renderDisplay({
        leftOperand: "123",
        operator: "addition",
        rightOperand: "456",
      });

      assert.rendersInEquation("123 + 456");
    });

    test("renders leftOperand only when rightOperand is defined but operator is missing", () => {
      const { assert } = renderDisplay({
        leftOperand: "123",
        rightOperand: "456",
      });

      assert.rendersInEquation("123");
    });
  });

  describe("result", () => {
    test("renders result and shifts equation to history", () => {
      const { assert } = renderDisplay({
        leftOperand: "2",
        operator: "multiplication",
        rightOperand: "4",
        result: "8",
      });

      assert.rendersInEquation("8");
      assert.rendersInHistory("2 * 4");
    });
  });
});

function renderDisplay(props: DisplayProps) {
  render(<Display {...props} />);

  const page = buildPageObject();

  return { ...page };
}

function buildPageObject() {
  const pageObject = {
    assert: {
      rendersZero: () => {
        expect(screen.getByText("0")).toBeInTheDocument();
      },

      rendersInEquation: (equation: string) => {
        const equationElement = within(
          screen.getByTestId("equation")
        ).getByText(equation);

        expect(equationElement).toBeInTheDocument();
      },

      rendersInHistory: (history: string) => {
        const historyElement = within(screen.getByTestId("history")).getByText(
          history
        );

        expect(historyElement).toBeInTheDocument();
      },
    },
  };

  return pageObject;
}
