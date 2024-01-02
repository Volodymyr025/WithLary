import React, { useState } from "react";
import FormPage from "./UI/FormPage";
import { Input } from "./UI/Input";
import { Btn } from "./UI/Btn";
import { errorStyle, nameValid, validEmail, validPhone } from "./Validator";
import { ERROR_MESSAGE } from "./UI/Error";

interface userType {
  lastName: string;
  firstName: string;
  email: string;
  phone: number;
}

const Registration = () => {
  const [user, setUser] = useState<userType>({
    lastName: "",
    firstName: "",
    email: "",
    phone: 0,
  });

  const [lastNameValid, setlastNameValid] = useState(false);
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);

  console.log(lastNameValid);

  return (
    <>
      <FormPage title="Registration">
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
            onChange={({ target }: any) => {
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
          <Btn />
        </>
      </FormPage>
    </>
  );
};

export default Registration;
