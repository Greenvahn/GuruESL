import Footer from '../components/footer';
import Header from '../components/header'
import Cardlist from '../components/cardlist';

const Main = () => {
  

  return (
    <div className="bg-gray-900 text-white flex flex-col h-screen">
      <Header />

      <main className='flex-grow mx-auto items-center justify-between'>
        <section className='grid grid-cols-3 gap-4'>
        <Cardlist />
        </section>
    
      </main>
      <Footer />
    </div>
  )
}

export default Main;
