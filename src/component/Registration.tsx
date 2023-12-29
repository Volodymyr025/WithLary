import React from "react";
import FormPage from "./UI/FormPage";
import { Input } from "./UI/Input";
import { Btn } from "./UI/Btn";


const Registration = () => {
  return (
    <>
      <FormPage title="Registration">
        <>
          <Input inputType={"text"} maxLength={15}>
            Last Name
          </Input>
          <Input inputType={"text"} maxLength={15}>
            First Name
          </Input>
          <Input inputType={"email"} maxLength={15}>
            Email
          </Input>
          <Input inputType={"phone"} maxLength={15}>
            Phone Number
          </Input>
          <Btn />
        </>
      </FormPage>
    </>
  );
};

export default Registration;
