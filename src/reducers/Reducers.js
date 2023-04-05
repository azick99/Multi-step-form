import { FORM_ACTION_TYPES, STEP_ACTION_TYPES } from './action.types'

export const stepReducer = (step, action) => {
  switch (action.type) {
    case STEP_ACTION_TYPES.HAD_NEXT: {
      if (action.payload.hasNext) {
        return step + 1
      }
    }
    case STEP_ACTION_TYPES.HAD_PREV: {
      if (action.payload.hasPrev) {
        return step - 1
      }
    }
    case STEP_ACTION_TYPES.CHANGED: {
      return action.payload.stepNum
    }
    default:
      step
  }
}

export const formReducer = (form, action) => {
  switch (action.type) {
    case FORM_ACTION_TYPES.TYPED: {
      return (form = 'typing')
    }
    case FORM_ACTION_TYPES.SUCCESSED: {
      return (form = 'success')
    }
    case FORM_ACTION_TYPES.SUBMITTED: {
      return (form = 'submitting')
    }
  }
}
