import { cardPropsTypes} from '../@types/types'
import Card from './card'


const Cardlist = ({ data }:{data:[] | undefined}) => {
  return (
    <>
      {data?.map((card: cardPropsTypes, idx: number) => {
        return (
          // Diplays only cards with data image...
          card.imageUrl && <div key={idx}><Card {...card} /></div>
        )
      })}
    </>
  )
}

export default Cardlist;
