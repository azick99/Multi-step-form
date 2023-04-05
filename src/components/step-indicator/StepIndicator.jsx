import { useContext } from 'react'
import { StepsContext } from '../../context/stepsContext.jsx'
import './step-indicator.style.scss'

const StepIndicator = ({ title, stepNum }) => {
  const { handleChangeStep, step } = useContext(StepsContext)
  return (
    <div className="step-indicator">
      <button
        onClick={handleChangeStep}
        className={step === stepNum ? 'active-step ' : ''}
      >
        {stepNum}
      </button>
      <div className="step-title fs-400">
        <p className="text-accent uppercase">step {stepNum}</p>
        <p className="text-white uppercase text-bold">{title}</p>
      </div>
    </div>
  )
}

export default StepIndicator
