import { Input } from "./UI/Input";
import style from "./Login.module.css";
import { Btn } from "./UI/Btn";
import FormPage from "./UI/FormPage";
import React, { useState } from "react";

export interface child {
  children: JSX.Element;
  title?: string;
}

const invalidInputStyle = {
  color: "red",
  border: "3px solid #ffb21b",
  boxShadow: "none",
};

const regSymbol = /[!@#$%^&*()]/;

export const Login = () => {
  const [passwoedValue, setPasswordValue] = useState('');
  const [inputStyle, setinputStyle] = useState<null | {}>(null);

  const validPassword = (e: React.FocusEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);

    console.log(regSymbol.test(passwoedValue), 'regex');
    console.log( passwoedValue.trim().length,'>16')
    console.log(passwoedValue.trim().length, '<6')
    
    if (
      passwoedValue.trim().length < 16 &&
      passwoedValue.trim().length > 6
      // regSymbol.test(passwoedValue)
    ) {
      setinputStyle(invalidInputStyle);
    }
    else return;
  };

  return (
    <>
      <FormPage title={"Login"}>
        <>
          <nav></nav>
          <div className={style.page}>
            <form className={style.form}>
              <Input onBlur={blur} inputType={"text"}>
                User Name
              </Input>
              <Input
                onBlur={validPassword}
                inputType={"password"}
                maxLength={16}
                validInput={inputStyle}
              >
                Password
              </Input>
              {inputStyle && (
                <p style={{ color: "black", fontSize: 18 }}>
                  Password must have 6-16 characters and one symbol
                </p>
              )}
              <Btn />
            </form>
          </div>
        </>
      </FormPage>
    </>
  );
};
