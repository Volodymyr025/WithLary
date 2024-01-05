import style from './Form.module.css'

export interface child {
  children: JSX.Element;
  title: string;
}

const Form = ({children, title}:child) => {
  return (
    <div className={style.bg_page}>
        <h1 className="logoLary">WithLary</h1>
        <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Form
