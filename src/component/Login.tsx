import { Input } from "./UI/Input";
import style from "./Login.module.css";
import { Btn } from "./UI/Btn";
import FormPage from "./UI/FormPage";
import React, { useState } from "react";
import { validPassword, validEmail } from "./Validator";

export interface child {
  children: JSX.Element;
  title?: string;
}

const errorStyle = {
  color: "red",
  border: "3px solid #ffb21b",
  boxShadow: "none",
};

export const Login = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passwoedValue, setPasswordValue] = useState("");

  const [nameValid, setNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [inputStyle, setInputStyle] = useState<null | {}>(null);

  return (
    <>
      <FormPage title={"Login"}>
        <>
          <div className={style.page}>
            <form className={style.form}>
              <Input
                onBlur={(): void =>
                  validEmail(
                    loginValue,
                    errorStyle,
                    setInputStyle,
                    setNameValid
                  )
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLoginValue(e.target.value)
                }
                inputType={"text"}
                maxLength={50}
                styleInput={!nameValid ? undefined : inputStyle}
              >
                User Name
              </Input>
              {nameValid && (
                <p style={{ color: "black", fontSize: 18 }}>
                  User name must have your Email and not Empty
                </p>
              )}
              <Input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPasswordValue(e.target.value)
                }
                onBlur={(): void =>
                  validPassword(
                    passwoedValue,
                    errorStyle,
                    setInputStyle,
                    setPasswordValid
                  )
                }
                inputType={"password"}
                maxLength={16}
                styleInput={!passwordValid ? undefined : inputStyle}
              >
                Password
              </Input>
              {passwordValid && (
                <p style={{ color: "black", fontSize: 18 }}>
                  Password must have 6-16 characters and one symbol (!@#$%^&*())
                </p>
              )}
              <Btn disabled={!nameValid && !passwordValid ? true : false} />
            </form>
          </div>
        </>
      </FormPage>
    </>
  );
};
