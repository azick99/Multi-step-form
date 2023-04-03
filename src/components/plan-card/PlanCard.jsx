import { useContext } from 'react'
import { StepsContext } from '../../context/stepsContext'
import './plan-card.style.scss'

const PlanCard = ({ data, yearly, handlePlanChange }) => {
  const { plan, icon, id, price } = data
  const { selectedPlan } = useContext(StepsContext)
  return (
    <button
      className={`${selectedPlan.id === id ? 'activePlan' : ''} plan-card btn flex`}
      type="button"
      onClick={() => {
        handlePlanChange(id)
      }}
    >
      <img src={icon} alt={plan} />
      <div className='plan-card-text'>
        <p className='text-bold text-dark'>{plan}</p>
        <p className='text-accent'>{yearly ? `$${price.yearly}/yr` : `$${price.monthly}/mo`}</p>
        {yearly && <p className='text-dark'>2 months fee</p>}
      </div>
    </button>
  )
}

export default PlanCard
