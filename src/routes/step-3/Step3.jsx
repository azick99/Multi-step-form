import Checkbox from '../../components/checkbox/Checkbox'
import Title from '../../components/title/Title'
import { step3Data } from '../../data/data'

const Step3 = () => {
  return (
    <>
      <Title
        title="Pick add-ons"
        subTitle="Add-ons help enhance your
    gaming experience."
      />
      <div className='checkbox-container flex'>
        {step3Data.map((data) => (
          <Checkbox key={data.id} data={data} />
        ))}
      </div>
    </>
  )
}

export default Step3
