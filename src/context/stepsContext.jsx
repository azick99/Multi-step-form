import { createContext, useState } from 'react'
import { step2Data, step3Data } from '../data/data'

const defaultAddons = new Set(step3Data.filter((addOn) => addOn.id < 2))
const defaultPlan = step2Data.find((plan) => plan.id === 0)

export const StepsContext = createContext({
  step: 1,
  yearly: false,
  selectedAddOns: {},
  selectedPlan: {},
  addOns: {},
  handleCheckboxToggle: () => {},
  setYearly: () => {},
  setStep: () => {},
  handleNextStep: () => {},
  handlePrevStep: () => {},
  handlePlanChange: () => {},
})

export const StepsProvider = ({ children }) => {
  const [step, setStep] = useState(1)

  const [yearly, setYearly] = useState(false)

  const [selectedPlan, setSelectedPlan] = useState(defaultPlan)
  const [selectedAddOns, setSelectedAddOns] = useState(defaultAddons)
  // Step handling
  const hasPrev = step > 1
  const hasNext = step < 4

  const handleNextStep = () => {
    if (hasNext) {
      setStep(step + 1)
    }
  }
  const handlePrevStep = () => {
    if (hasPrev) {
      setStep(step - 1)
    }
  }

  //Plan handling
  const handlePlanChange = (selectedId) =>
    setSelectedPlan(step2Data.find((plan) => plan.id === selectedId))
  //Checkbox handling
  const handleCheckboxToggle = (toggledId) => {
    // Create a copy (to avoid mutation).
    const nextIds = new Set(selectedAddOns)
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId)
    } else {
      nextIds.add(toggledId)
    }
    setSelectedAddOns(nextIds)
  }

  //summry
  const addOns = Array.from(selectedAddOns)

  const value = {
    step,
    setStep,
    handleNextStep,
    handlePrevStep,

    yearly,
    setYearly,

    addOns,
    selectedAddOns,
    handleCheckboxToggle,
    handlePlanChange,
    selectedPlan,
  }
  return <StepsContext.Provider value={value}>{children}</StepsContext.Provider>
}
