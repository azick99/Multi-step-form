import './title.style.scss'

const Title = ({ title, subTitle }) => {
  return (
    <div className='title-container'>
      <h1 className=' text-dark fs-700 text-bold'>{title}</h1>
      <p className='text-accent fs-400'>{subTitle}</p>
    </div>
  )
}

export default Title
