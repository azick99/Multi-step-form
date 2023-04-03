import { useContext } from 'react'
import { FormContext } from '../../context/formContext'
import './input-form.style.scss'

const InputForm = ({ label, ...others }) => {
  const { error } = useContext(FormContext)
  return (
    <div className="input-field flex">
      <div className="input-text flex">
        <label className="text-dark fs-400 text-meduim">{label}</label>
        {error === label && (
          <p className="error-text">This field is required</p>
        )}
      </div>
      <input
        {...others}
        className={`${error === label ? 'red-line' : ''} no-arrow`}
      />
    </div>
  )
}

export default InputForm
