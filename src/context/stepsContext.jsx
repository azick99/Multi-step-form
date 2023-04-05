import { createContext, useReducer, useState } from 'react'
import { step2Data, step3Data } from '../data/data'
import { STEP_ACTION_TYPES } from '../reducers/action.types'
import { stepReducer } from '../reducers/Reducers'

const defaultAddons = new Set(step3Data.filter((addOn) => addOn.id < 2))
const defaultPlan = step2Data.find((plan) => plan.id === 0)

export const StepsContext = createContext({
  step: 1,
  yearly: false,
  selectedAddOns: {},
  selectedPlan: {},
  addOns: {},
  handleChangeStep: () => {},
  handleCheckboxToggle: () => {},
  setYearly: () => {},
  setStep: () => {},
  handleNextStep: () => {},
  handlePrevStep: () => {},
  handlePlanChange: () => {},
})

export const StepsProvider = ({ children }) => {
  const [step, dispatch] = useReducer(stepReducer, 1)

  const [yearly, setYearly] = useState(false)

  const [selectedPlan, setSelectedPlan] = useState(defaultPlan)
  const [selectedAddOns, setSelectedAddOns] = useState(defaultAddons)

  // Step handling
  const hasPrev = step > 1
  const hasNext = step < 4

  const handleNextStep = () => {
    dispatch({
      type: STEP_ACTION_TYPES.HAD_NEXT,
      payload: {
        hasNext: hasNext,
      },
    })
  }
  const handlePrevStep = () => {
    dispatch({
      type: STEP_ACTION_TYPES.HAD_PREV,
      hasPrev: hasPrev,
    })
  }

  const handleChangeStep = () => {
    dispatch({ type: STEP_ACTION_TYPES.CHANGED, payload: { stepNum: stepNum } })
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
    handleChangeStep,
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
