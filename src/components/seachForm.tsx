import { ChangeEvent } from 'react'
import { setItem } from '../@types/types';
// import GetCards from '../hooks/getcards';

const SeachForm = ({setCardName}:setItem) => {

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCardName(event.target.value);
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // GetCards(cardname)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-transparent flex items-center w-full p-3 focus:outline-none border-b border-slate-700 mt-24">
          <svg className="w-5 text-gray-600 h-5 cursor-pointer mr-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input type="search" onChange={onSearchChange} placeholder="Search for cards" className="w-full pl-4 text-3xl focus-visible:ring-0 bg-transparent border-0" />
        </div>
      </form>
    </>
  )
}

export default SeachForm;
