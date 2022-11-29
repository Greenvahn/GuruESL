import Footer from '../components/footer';
import Header from '../components/header'
import Cardlist from '../components/cardlist';
import { useState } from 'react';
import SeachForm from '../components/seachForm';
import Nocards from '../components/nocards';
import GetCards from '../hooks/getcards'
import Spinner from '../components/spinner';

const Main = () => {
  const [cardname, setCardName] = useState('')
  const { cardData, isLoading } = GetCards(cardname);

  return (
    <div className="bg-gray-900 text-white flex flex-col h-auto">
      <Header />

      <main className='bg-gray-900 flex-grow min-h-screen mx-auto w-full items-center justify-between max-w-[1200px]'>
        <SeachForm setCardName={setCardName} />
        <section className='grid grid-cols-4 gap-4 mt-12 mx-auto 2xl:grid-cols-5 justify-items-center'>
          {cardname.length === 0 || cardData?._totalCount === 0 ? <Nocards /> :
            isLoading ? <Spinner /> : <Cardlist data={cardData?.cards} />}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Main;
