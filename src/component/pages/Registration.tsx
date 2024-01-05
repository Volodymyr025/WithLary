import { useState } from "react";
import Form from "../shered/Form";
import { Input } from "../shered/Input";
import { Btn } from "../shered/Btn";
import {
  errorStyle,
  nameValid,
  validConfirm,
  validEmail,
  validPassword,
  validPhone,
} from "../util/validation";
import { ERROR_MESSAGE } from "../util/error";

interface userType {
  lastName: string;
  firstName: string;
  email: string;
  phone: number;
  password: string;
  confirm: string;
}

const Registration = () => {
  const [user, setUser] = useState<userType>({
    lastName: "",
    firstName: "",
    email: "",
    phone: 0,
    password: "",
    confirm: "",
  });

  const [lastNameValid, setlastNameValid] = useState(false);
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const validBtn =
    user.lastName &&
    user.firstName &&
    user.email &&
    user.phone &&
    user.password &&
    user.confirm &&
    !lastNameValid &&
    !firstNameValid &&
    !emailValid &&
    !phoneValid &&
    !passwordValid &&
    !confirmPasswordValid
      ? false
      : true;

  return (
    <>
      <Form title="Registration">
        <>
          <Input
            inputType={"text"}
            maxLength={15}
            name="lastName"
            styleInput={lastNameValid ? errorStyle : undefined}
            onChange={({ target }: any) => {
              setUser((prev) => ({
                ...prev,
                [target.name]: target.value,
              }));
            }}
            onBlur={(): void => nameValid(user.lastName, setlastNameValid)}
          >
            Last Name
          </Input>
          {lastNameValid && ERROR_MESSAGE.emptyField}

          <Input
            inputType={"text"}
            maxLength={15}
            name="firstName"
            styleInput={firstNameValid ? errorStyle : undefined}
            onChange={({ target }:any) => {
              setUser((prev) => ({
                ...prev,
                [target.name]: target.value,
              }));
            }}
            onBlur={(): void => nameValid(user.firstName, setFirstNameValid)}
          >
            First Name
          </Input>
          {firstNameValid && ERROR_MESSAGE.emptyField}

          <Input
            inputType={"email"}
            maxLength={50}
            name="email"
            styleInput={emailValid ? errorStyle : undefined}
            onChange={({ target }: any) => {
              setUser((prev) => ({
                ...prev,
                [target.name]: target.value,
              }));
            }}
            onBlur={(): void => validEmail(user.email, setEmailValid)}
          >
            Email
          </Input>
          {emailValid && ERROR_MESSAGE.emailField}

          <Input
            inputType={"phone"}
            maxLength={10}
            name="phone"
            styleInput={phoneValid ? errorStyle : undefined}
            onChange={({ target }: any) => {
              setUser((prev) => ({
                ...prev,
                [target.name]: target.value,
              }));
            }}
            onBlur={(): void => validPhone(user.phone, setPhoneValid)}
          >
            Phone Number
          </Input>
          {phoneValid && ERROR_MESSAGE.phoneField}

          <Input
            inputType={"password"}
            maxLength={16}
            name="password"
            styleInput={passwordValid ? errorStyle : undefined}
            onChange={({ target }: any) => {
              setUser((prev) => ({
                ...prev,
                [target.name]: target.value,
              }));
            }}
            onBlur={(): void => validPassword(user.password, setPasswordValid)}
          >
            Password
          </Input>
          {passwordValid && ERROR_MESSAGE.passwordField}

          <Input
            inputType={"password"}
            maxLength={16}
            name="confirm"
            styleInput={confirmPasswordValid ? errorStyle : undefined}
            onChange={({ target }: any) => {
              setUser((prev) => ({
                ...prev,
                [target.name]: target.value,
              }));
            }}
            onBlur={(): void =>
              validConfirm(user.password, user.confirm, setConfirmPasswordValid)
            }
          >
            Confirm password
          </Input>
          {confirmPasswordValid && ERROR_MESSAGE.confirmField}

          <Btn disabled={validBtn} />
        </>
      </Form>
    </>
  );
};

export default Registration;
