import React from "react";

interface validationType {
  validInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const regSymbol = /[!@#$%^&*()]/;
const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const errorStyle = {
  color: "red",
  border: "3px solid #ffb21b",
  boxShadow: "none",
};

export const nameValid = (
  nameInput: string,
  validInput: React.Dispatch<React.SetStateAction<boolean>>
) => {
  validInput(false);
  nameInput.trim().length < 1 ? validInput(true) : undefined;
};

export const validEmail = (
  inputValue: string,
  validInput: React.Dispatch<React.SetStateAction<boolean>>
) => {
  validInput(false);
  if (inputValue.trim().length < 1 || !regEmail.test(inputValue)) {
    validInput(true);
  }
};

export const validPhone = (
  inputValue: number,
  validInput: React.Dispatch<React.SetStateAction<boolean>>
) => {
  validInput(false);
  isNaN(inputValue) && validInput(true);
};

export const validPassword = (
  inputValue: string,
  validInput: React.Dispatch<React.SetStateAction<boolean>>
) => {
  validInput(false);
  if (
    inputValue.trim().length > 16 ||
    inputValue.trim().length < 6 ||
    !regSymbol.test(inputValue)
  ) {
    validInput(true);
  }
};

export const validConfirm = (
  passwordValue: string,
  confirmValue: string,
  validInput: React.Dispatch<React.SetStateAction<boolean>>
) => {
  validInput(false);
  passwordValue.trim() === confirmValue.trim() ? undefined : validInput(true);
};
