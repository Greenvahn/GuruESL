import Footer from '../components/footer';
import Header from '../components/header'
import Cardlist from '../components/cardlist';
import { useState } from 'react';
import SeachForm from '../components/seachForm';

const Main = () => {
  const [state, setstate] = useState('black')

  return (
    <div className="bg-gray-900 text-white flex flex-col h-auto">
      <Header />

      <main className='bg-gray-900 flex-grow mx-auto items-center justify-between'>
        <SeachForm setCardName={setstate} />
        <section className='grid grid-cols-4 gap-4 mt-12'>
          <Cardlist cardname={state} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Main;
