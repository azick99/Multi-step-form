import { createContext, useReducer, useState } from 'react'
import { FORM_ACTION_TYPES } from '../reducers/action.types'
import { formReducer } from '../reducers/Reducers'

const inputForm = {
  name: '',
  email: '',
  phone: '',
}

export const FormContext = createContext({
  form: {},
  status: 'typing',
  error: null,
  handleChange: () => {},
  handleSubmit: () => {},
})

export const FormProvider = ({ children }) => {
  const [form, setForm] = useState(inputForm)
  const [error, setError] = useState(null)
  const [status, dispatch] = useReducer(formReducer, 'typing')

  //Form handling
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    dispatch({
      type: FORM_ACTION_TYPES.SUBMITTED,
    })
    try {
      await submitForm(form)
      dispatch({ type: FORM_ACTION_TYPES.SUCCESSED })
    } catch (err) {
      dispatch({ type: FORM_ACTION_TYPES.TYPED })
      setError(err)
      setTimeout(() => {
        setError(null)
      }, 2500)
    }
  }
  const submitForm = (form) => {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!form.name.length) {
          reject('Name')
        }
        if (!form.email.length) {
          reject('Email Address')
        }
        if (!form.phone.length) {
          reject('Phone Number')
        } else {
          resolve()
        }
      }, 1500)
    })
  }

  const value = {
    form,
    status,
    error,
    handleChange,
    handleSubmit,
  }
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
