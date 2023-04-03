import { useContext } from 'react'
import StepIndicator from './components/step-indicator/StepIndicator'
import StepsContainer from './components/steps-container/StepsContainer'
import { StepsContext } from './context/stepsContext.jsx'
import { FormContext } from './context/formContext'
import Buttons from './components/buttons-con/buttons'
import './App.scss'
import marked from './assets/images/icon-thank-you.svg'
function App() {
  const { step } = useContext(StepsContext)
  const { handleSubmit, status } = useContext(FormContext)

  return (
    <div className="App">
      <div className="step-inicators-container flex">
        <StepIndicator stepNum={1} title="Your info" />
        <StepIndicator stepNum={2} title="Select plan" />
        <StepIndicator stepNum={3} title="Add-ons" />
        <StepIndicator stepNum={4} title="Summary" />
      </div>

      {status === 'success' ? (
        <div className="thank-you-container">
          <div className="thank-title flex">
            <img src={marked} alt="thank you" />
            <p className="text-dark fs-700 text-bold">Thank you!</p>
          </div>
          <p className="text-accent">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <StepsContainer step={step} />
          </div>
          <div
            className={`${step === 1 ? 'flex-end' : ''} buttons-container flex`}
          >
            <Buttons step={step} />
          </div>
        </form>
      )}
    </div>
  )
}

export default App
