import { fireEvent, render, screen } from "@testing-library/react";

import Keypad, { KeypadProps } from "./Keypad";

describe("<Keypad />", () => {
  it.each`
    buttonText | callbackValue
    ${"1"}     | ${"1"}
    ${"2"}     | ${"2"}
    ${"3"}     | ${"3"}
    ${"4"}     | ${"4"}
    ${"5"}     | ${"5"}
    ${"6"}     | ${"6"}
    ${"7"}     | ${"7"}
    ${"8"}     | ${"8"}
    ${"9"}     | ${"9"}
    ${"0"}     | ${"0"}
    ${"."}     | ${"."}
    ${"C"}     | ${"C"}
    ${"+"}     | ${"+"}
    ${"-"}     | ${"-"}
    ${"*"}     | ${"*"}
    ${"/"}     | ${"/"}
  `(
    "clicking $buttonText calls onClick with correct $callbackValue",
    ({ buttonText, callbackValue }) => {
      const { act, assert } = renderKeypad();

      act.clickKey(buttonText);
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
      clickKey: (buttonText: string) => {
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
