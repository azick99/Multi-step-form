import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FormProvider } from './context/formContext'
import { StepsProvider } from './context/stepsContext.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <StepsProvider>
        <App />
      </StepsProvider>
    </FormProvider>
  </React.StrictMode>
)
