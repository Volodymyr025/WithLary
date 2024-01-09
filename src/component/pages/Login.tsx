import { Input } from "../shered/Input";
import { Btn } from "../shered/Btn";
import FormPage from "../shered/Form";
import { validSchema } from "..//util/validation";
import { useFormik } from "formik";
import { userType, errorBorder, errorMessage } from "./Registration";

export const Login = () => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik<userType>({
      initialValues: {
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        password: "",
        confirm: "",
      },
      onSubmit: (values, actions) => {
        console.log("submited");
      },
      validationSchema: validSchema,
    });

  return (
    <>
      <FormPage submit={handleSubmit} title="Registration">
        <>
          <Input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            inputType={"email"}
            maxLength={50}
            name="email"
            styleInput={errors.email && touched.email ? errorBorder : undefined}
          >
            Email
          </Input>
          {errors.email && touched.email && (
            <p style={errorMessage}>{errors.email}</p>
          )}
          <Input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            inputType={"password"}
            maxLength={16}
            name="password"
            styleInput={
              errors.password && touched.password ? errorBorder : undefined
            }
          >
            Password
          </Input>
          {errors.password && touched.password && (
            <p style={errorMessage}>{errors.password}</p>
          )}
          <Btn disabled={errors.email && errors.password ? true : false} />
        </>
      </FormPage>
    </>
  );
};
