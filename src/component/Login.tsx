import { Input } from "./UI/Input";
import style from "./Login.module.css";
import { Btn } from "./UI/Btn";
import FormPage from "./UI/FormPage";

export interface child {
  children: JSX.Element;
  title?: string;
}

export const Login = () => {
  return (
    <>
      <FormPage title={"Login"}>
        <>
          <nav></nav>
          <div className={style.page}>
            <form className={style.form}>
              <Input inputType={"text"} maxLength={15}>
                User Name
              </Input>
              <Input inputType={"password"} maxLength={15}>
                Password
              </Input>
              <Btn />
            </form>
          </div>
        </>
      </FormPage>
    </>
  );
};
