import cardlist from './../datatest/cardstest.json'
import { cardPropsTypes } from '../@types/types'
import Card from './card'

const Cardlist = () => {

  return (
    <>
      {cardlist.cards.map((card: cardPropsTypes, idx: number) => {
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
