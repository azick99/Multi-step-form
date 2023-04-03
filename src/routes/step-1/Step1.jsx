import { useContext } from 'react'
import InputForm from '../../components/personal-input-form/InputForm.jsx'
import Title from '../../components/title/Title.jsx'
import { FormContext } from '../../context/formContext.jsx'

const Step1 = () => {
  const { form, handleChange, status } = useContext(FormContext)
  return (
    <>
      <Title
        title="Personal info"
        subTitle="Please provide your name, email address, and phone number."
      />
      <div className='input-container flow'>
        <InputForm
          label="Name"
          placeholder="e.g. Stephen King"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          disabled={status === 'submitting'}
        />
     
        <InputForm
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com "
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          disabled={status === 'submitting'}
        />

        <InputForm
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          type="number"
          pattern="[+]{1}[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{3}"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          disabled={status === 'submitting'}
        />

      </div>
    </>
  )
}

export default Step1
