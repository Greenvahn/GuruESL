import Footer from '../components/footer';
import Header from '../components/header'

const Main = () => {
  

  return (
    <div className="bg-gray-900 text-white flex flex-col h-screen">
      <Header />
      <main className='flex-grow mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere congue augue, eget facilisis dolor sagittis at.
      </main>
      <Footer />
    </div>
  )
}

export default Main;
