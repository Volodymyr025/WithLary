import { Input } from "./UI/Input";
import style from "./Login.module.css";
import { Btn } from "./UI/Btn";

export const Login = () => {
  return (
    <div className={style.page}>
      <h1 className="logoLary">WithLary</h1>
      <h2>Login</h2>
      <form className={style.form}>
        <Input inputType={"text"} maxLength={15}>
          User Name
        </Input>
        <Input inputType={"password"} maxLength={15}>
          Password
        </Input>
        <Btn>
          <div className={style.arrow}>
            <div className={style.arrow_top}></div>
            <div className={style.arrow_mid}></div>
            <div className={style.arrow_bot}></div>
          </div>
        </Btn>
      </form>
    </div>
  );
};
