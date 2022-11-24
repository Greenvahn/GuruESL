import { cardPropsTypes } from '../@types/types'
import Card from './card'
import GetCards from '../hooks/getcards'

//https://javascript.tutorialink.com/passing-string-literal-as-a-single-prop-in-typescript-react/

const Cardlist = ({cardname}:{cardname:string}) => {
const cards = GetCards(cardname);
  return (
    <>
      {cards?.map((card: cardPropsTypes, idx: number) => {
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
