import { fireEvent, render, screen } from "@testing-library/react";

import Keypad, { KeypadProps } from "./Keypad";

describe("<Keypad />", () => {
  it.each`
    buttonText | callbackValue
    ${"1"}     | ${{ value: "1", type: "numeric" }}
    ${"2"}     | ${{ value: "2", type: "numeric" }}
    ${"3"}     | ${{ value: "3", type: "numeric" }}
    ${"4"}     | ${{ value: "4", type: "numeric" }}
    ${"5"}     | ${{ value: "5", type: "numeric" }}
    ${"6"}     | ${{ value: "6", type: "numeric" }}
    ${"7"}     | ${{ value: "7", type: "numeric" }}
    ${"8"}     | ${{ value: "8", type: "numeric" }}
    ${"9"}     | ${{ value: "9", type: "numeric" }}
    ${"0"}     | ${{ value: "0", type: "numeric" }}
    ${"."}     | ${{ value: ".", type: "numeric" }}
    ${"C"}     | ${{ value: "clear", type: "action" }}
    ${"+"}     | ${{ value: "addition", type: "action" }}
    ${"-"}     | ${{ value: "substraction", type: "action" }}
    ${"*"}     | ${{ value: "multiplication", type: "action" }}
    ${"/"}     | ${{ value: "division", type: "action" }}
  `(
    "clicking $buttonText calls onClick with correct $callbackValue",
    ({ buttonText, callbackValue }) => {
      const { act, assert } = renderKeypad();

      act.clickButton(buttonText);
      assert.onClickWasCalledWith(callbackValue);
    }
  );
});

function renderKeypad() {
  const onClickMock = jest.fn();

  render(<Keypad onClick={onClickMock} />);

  const page = buildPageObject(onClickMock);

  return { ...page };
}

function buildPageObject(onClick: KeypadProps["onClick"]) {
  const pageObject = {
    act: {
      clickButton: (buttonText: string) => {
        const buttonElement = screen.getByText(buttonText);

        fireEvent.click(buttonElement);
      },
    },

    assert: {
      onClickWasCalledWith: (calledWith: string | number) => {
        expect(onClick).toBeCalledWith(calledWith);
      },
    },
  };

  return pageObject;
}
