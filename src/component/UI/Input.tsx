import React from "react";
import style from "./Input.module.css";

interface InputValue {
  children: string;
  inputType: string;
  maxLength?: number;
  validInput: any;
  onChange: React.ChangeEvent<HTMLInputElement | string>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}

export const Input = ({
  children,
  inputType,
  validInput,
  maxLength,
  onBlur,
  onChange,
}: InputValue) => {
  return (
    <input
      onBlur={onBlur}
      onChange={onChange}
      style={validInput}
      className={style.input}
      type={inputType}
      placeholder={children}
      maxLength={maxLength}
    />
  );
};
