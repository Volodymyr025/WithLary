import { Input } from "../shered/Input";
import style from "./Login.module.css";
import { Btn } from "../shered/Btn";
import Form from "../shered/Form";
import { useState } from "react";
import { validPassword, validEmail, errorStyle } from "..//util/validation";
import { ERROR_MESSAGE } from "../util/error";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [inputsValue, setInputsValue] = useState({
    email: "",
    password: "",
  });

  const [nameValid, setNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  return (
    <>
      <Form title={"Login"}>
        <>
          <div className={style.page}>
            <form className={style.form}>
              <Input
                onBlur={(): void => validEmail(inputsValue.email, setNameValid)}
                onChange={({ target }: any) => {
                  setInputsValue((prev) => ({
                    ...prev,
                    [target.name]: target.value,
                  }));
                }}
                name={"email"}
                inputType={"text"}
                maxLength={50}
                styleInput={!nameValid ? undefined : errorStyle}
              >
                {"User Name (Email)"}
              </Input>
              {nameValid && ERROR_MESSAGE.emailField}
              <Input
                onChange={({ target }: any) => {
                  setInputsValue((prev) => ({
                    ...prev,
                    [target.name]: target.value,
                  }));
                }}
                onBlur={(): void =>
                  validPassword(inputsValue.password, setPasswordValid)
                }
                name={"password"}
                inputType={"password"}
                maxLength={16}
                styleInput={!passwordValid ? undefined : errorStyle}
              >
                Password
              </Input>
              {passwordValid && ERROR_MESSAGE.passwordField}
              <Btn
                disabled={
                  inputsValue.email &&
                  inputsValue.password &&
                  !nameValid &&
                  !passwordValid
                    ? false
                    : true
                }
              />

              <p style={{ fontSize: 20 }}>
                <NavLink to={"../registration"}>Registration</NavLink>
              </p>
            </form>
          </div>
        </>
      </Form>
    </>
  );
};
