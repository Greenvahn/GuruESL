import { cardPropsTypes} from '../@types/types'
import Card from './card'


const Cardlist = ({ data }:{data:[] | undefined}) => {
  return (
    <>
      {data?.map((card: cardPropsTypes, idx: number) => {
        return (
          <div key={idx}>
            <Card {...card} />
          </div>
        )
      })}
    </>
  )
}

export default Cardlist;
