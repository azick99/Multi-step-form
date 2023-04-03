import { useContext } from 'react'
import { StepsContext } from '../../context/stepsContext'
import Step1 from '../../routes/step-1/Step1'
import Step2 from '../../routes/step-2/Step2'
import Step3 from '../../routes/step-3/Step3'
import Step4 from '../../routes/step-4/Step4'

const StepsContainer = () => {
  const { step } = useContext(StepsContext)

  switch (step) {
    case 1:
      return <Step1 />
    case 2:
      return <Step2 />
    case 3:
      return <Step3 />
    default:
      return <Step4 />
  }
}

export default StepsContainer
