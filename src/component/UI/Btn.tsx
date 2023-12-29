import style from "./Input.module.css";

export const Btn = () => {
  return (
    <button className={style.btn}>
      <div className={style.arrow}>
        <div className={style.arrow_top}></div>
        <div className={style.arrow_mid}></div>
        <div className={style.arrow_bot}></div>
      </div>
    </button>
  );
};
