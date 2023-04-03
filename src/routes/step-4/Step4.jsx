import { useContext } from 'react'
import Step2Result from '../../components/summary/Step2Result'
import Step3Result from '../../components/summary/Step3Result'
import Title from '../../components/title/Title'
import { StepsContext } from '../../context/stepsContext'

const Step4 = () => {
  const { yearly, addOns, selectedPlan } = useContext(StepsContext)
  
  const totalMonthly = addOns.reduce(
    (acc, addon) => addon.price.monthly + acc,
    +selectedPlan.price.monthly
  )
  const totalYearly = addOns.reduce(
    (acc, addon) => addon.price.yearly + acc,
    +selectedPlan.price.yearly
  )

  const { price, plan } = selectedPlan
  return (
    <>
      <Title
        title="Finishing up"
        subTitle=" Double-check
      everything looks OK before confirming."
      />
      <div className='results-container'>
        <Step2Result
          step2Result={plan}
          price={yearly ? `$${price.yearly}/yr` : `$${price.monthly}/mo`}
        />
        <div className='second-result-con flex'>   
        {addOns.map((addOn) => (
          <Step3Result
            key={addOn.id}
            step3Result={addOn.label}
            price={
              yearly
                ? `+$${addOn.price.yearly}/yr`
                : `+$${addOn.price.monthly}/mo`
            }
          />
        ))}
        </div>
      </div>
      <div className='total-result flex'>
        {yearly ? (
          <>
            <p className='text-accent'>Total (per year)</p>
            <span className='total-price text-bold fs-500'>+${totalYearly}/yr</span>
          </>
        ) : (
          <>
            <p className='text-accent'>Total (per month)</p>
            <span className='total-price text-bold fs-500'>+${totalMonthly}/mo</span>
          </>
        )}
      </div>
    </>
  )
}

export default Step4
