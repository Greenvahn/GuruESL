import cardlist from './../datatest/cardstest.json'

const Cardlist = () => {

  type card = {
    name: string,
    imageUrl: string,
    id: string
  }

  return (
    <>
      {cardlist.cards.map((card: card, idx:number) => {
        return <img className='w-64 cursor-pointer' src={card.imageUrl} alt={card.name} key={`${idx}_${card.id}`} />
      })}
    </>
  )
}

export default Cardlist;
