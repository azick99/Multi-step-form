import { useContext } from 'react'
import { StepsContext } from '../../context/stepsContext'
import './checkbox.style.scss'

const Checkbox = ({ data }) => {
  const { yearly, handleCheckboxToggle, selectedAddOns } =
    useContext(StepsContext)

  const isSelected = selectedAddOns.has(data)

  const { label, subTitle, price } = data
  return (
    <div className={`${isSelected ? 'picked' : ''} checkbox flex`}>
      <input
        type="checkbox"
        name={label}
        onChange={() => handleCheckboxToggle(data)}
        checked={isSelected}
        className="larger"
      />
      <div>
        <label htmlFor={label} className="main-label text-dark text-bold">
          {label}
        </label>
        <p className='text-accent '>{subTitle}</p>
      </div>
      <span>{yearly ? `+$${price.yearly}/yr` : `+$${price.monthly}/mo`}</span>
    </div>
  )
}

export default Checkbox
