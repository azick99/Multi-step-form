import './switch.syle.scss'

const Switch = ({ yearly, setYearly }) => {
  return (
    <div className="switch-container flex">
      <span className={`${yearly ? 'text-accent' : 'text-dark'} text-meduim fs-500`}>
        Monthly
      </span>
      <label className="switch">
        <input type="checkbox" onChange={() => setYearly(!yearly)} />
        <span className="slider"></span>
      </label>
      <span className={`${yearly ? 'text-dark' : 'text-accent'} text-meduim fs-500`}>
        Yearly
      </span>
    </div>
  )
}

export default Switch
