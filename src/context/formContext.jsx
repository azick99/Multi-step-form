import { createContext, useState } from 'react'

const inputForm = {
  name: '',
  email: '',
  phone: '',
}

export const FormContext = createContext({
  form: {},
  status: 'typing',
  error: null,
  setStatus: () => {},
  handleChange: () => {},
  handleSubmit: () => {},
})

export const FormProvider = ({ children }) => {
  const [form, setForm] = useState(inputForm)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('typing') // 'typing', 'submitting', or 'success'
  //Form handling
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitForm(form)
      setStatus('success')
    } catch (err) {
      setStatus('typing')
      setError(err)
      setTimeout(() => {
        setError(null)
      }, 2500);
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
    setStatus,
    handleChange,
    handleSubmit,
  }
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
