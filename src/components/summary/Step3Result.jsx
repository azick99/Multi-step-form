import './step-3-result.style.scss'

const Step3Result = ({ step3Result, price }) => {
  return (
    <div className='result-3-con flex'>
      <p className='text-accent'>{step3Result}</p>
      <span className='text-dark'>{price}</span>
    </div>
  )
}

export default Step3Result
