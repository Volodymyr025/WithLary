import style from './Input.module.css'

interface InputValue {
    children: string
    inputType: string
    maxLength: number
}

export const Input = ({children,inputType, maxLength}:InputValue) => {
  return (
    <input className={style.input} type={inputType} placeholder={children} maxLength={maxLength}/>
  )
}
