import React from "react";
import style from "./Input.module.css";

interface InputValue {
  children: string;
  inputType: string;
  maxLength: number;
  styleInput: any;
  onChange: React.ChangeEventHandler;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}

export const Input = ({
  children,
  inputType,
  styleInput,
  maxLength,
  onBlur,
  onChange,
}: InputValue) => {
  return (
    <input
      onBlur={onBlur}
      onChange={onChange}
      style={styleInput}
      className={style.input}
      type={inputType}
      placeholder={children}
      maxLength={maxLength}
    />
  );
};
