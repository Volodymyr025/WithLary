import React from "react";

const regSymbol = /[!@#$%^&*()]/;
const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export const validPassword = (
  inputValue: string,
  styles: {},
  setStyle: React.Dispatch<React.SetStateAction<{} | null>>,
  validInput: React.Dispatch<React.SetStateAction<boolean>>
) => {
  validInput(false);
  setStyle(null);
  if (
    inputValue.trim().length > 16 ||
    inputValue.trim().length < 6 ||
    !regSymbol.test(inputValue)
  ) {
    setStyle(styles);
    validInput(true);
  }
};

export const validEmail = (
  inputValue: string,
  styles: {},
  setStyle: React.Dispatch<React.SetStateAction<{} | null>>,
  validInput: React.Dispatch<React.SetStateAction<boolean>>
) => {
  validInput(false);
  setStyle(null);
  if (inputValue.trim().length < 1 || !regEmail.test(inputValue)) {
    validInput(true);
    setStyle(styles);
  }
};
