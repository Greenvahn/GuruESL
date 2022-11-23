import {cardPropsTypes} from "../@types/types"

const Card = ({imageUrl, name, id}:cardPropsTypes):JSX.Element => {
  

  return (
    <>
      <img className='w-64 cursor-pointer' src={imageUrl} alt={name} id={id} />
    </>
  )
}

export default Card
