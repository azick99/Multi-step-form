import { useContext } from 'react'
import { FormContext } from '../../context/formContext'
import { StepsContext } from '../../context/stepsContext'
import './buttons.scss'

const Buttons = () => {
  const { step, handleNextStep, handlePrevStep } = useContext(StepsContext)
  const { status, form } = useContext(FormContext)
  const { name, phone, email, error } = form

  const isFieldEmpty =
    !name.length || !email.length || !phone.length || status === 'submitting'

  const StepPrev = () => (
    <button type="button" className="prev-btn" onClick={handlePrevStep}>
      Go Back
    </button>
  )

  const StepNext = ({ children, submit, ...others }) => (
    <>
      <button
        className={`${submit === 'submit' ? 'opacity' : ''} ${
          status === 'submitting' ? 'button--loading' : ''
        } next-btn bg-dark text-white`}
        {...others}
      >
        <span className="button__text">{children}</span>
      </button>
    </>
  )

  if (step === 1) {
    return (
      <>
        {step > 1 && <StepPrev />}
        <StepNext
          type="submit"
          onClick={isFieldEmpty && !error ? null : handleNextStep}
        >
          Next Step
        </StepNext>
      </>
    )
  }

  if (step == 4) {
    return (
      <>
        <StepPrev />
        <StepNext
          type="submit"
          disabled={isFieldEmpty}
          submit={isFieldEmpty ? 'submit' : ''}
        >
          Confirm
        </StepNext>
      </>
    )
  }

  return (
    <>
      <StepPrev />
      <StepNext type="button" onClick={handleNextStep}>
        Next Step
      </StepNext>
    </>
  )
}

export default Buttons
