import { useContext } from 'react'
import PlanCard from '../../components/plan-card/PlanCard.jsx'
import Switch from '../../components/switch/Switch.jsx'
import Title from '../../components/title/Title'
import { StepsContext } from '../../context/stepsContext.jsx'
import { step2Data } from '../../data/data.js'

const Step2 = () => {
  const { yearly, setYearly, handlePlanChange } = useContext(StepsContext)
  return (
    <>
      <Title
        title="Select your plan"
        subTitle="You have the option
      of monthly or yearly billing."
      />
      <div className="plan-card-container flex">
        {step2Data.map((data) => (
          <PlanCard
            key={data.id}
            data={data}
            yearly={yearly}
            handlePlanChange={handlePlanChange}
          />
        ))}
      </div>
      <Switch yearly={yearly} setYearly={setYearly} />
    </>
  )
}

export default Step2
