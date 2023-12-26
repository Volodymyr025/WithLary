
import style from "./Input.module.css";

interface btnType {
  children: any;
}

export const Btn = ({ children }: btnType) => {
  return <button className={style.btn}>{children}</button>;
};
