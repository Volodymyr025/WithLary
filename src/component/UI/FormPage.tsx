import style from './FormPage.module.css'

import {child} from '../Login'

const FormPage = ({children, title}:child) => {
  return (
    <div className={style.bg_page}>
        <h1 className="logoLary">WithLary</h1>
        <h2>{title}</h2>
      {children}
    </div>
  )
}

export default FormPage
