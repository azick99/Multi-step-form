import { useContext } from 'react'
import { StepsContext } from '../../context/stepsContext'
import './step-2-result.style.scss'

const Step2Result = ({ step2Result, price }) => {
  const { yearly, setStep } = useContext(StepsContext)
  return (
    <div className='result-2-con flex'>
      <div>
        <p className='text-dark text-bold'>
          {step2Result}
          <span>{yearly ? '(Yearly)' : '(Monthly)'}</span>
        </p>
        <button onClick={() => setStep(2)} className='text-accent'>Change</button>
      </div>
      <span className='text-dark text-bold'>{price}</span>
    </div>
  )
}

export default Step2Result
