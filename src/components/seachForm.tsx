import { useState, ChangeEvent } from 'react'

const SeachForm = () => {

  const [cardname, setCardname] = useState('');

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCardname(event.target.value);
    console.log(cardname)
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-transparent rounded flex items-center w-full p-3">
          <button className="outline-none focus:outline-none"><svg className="w-5 text-gray-600 h-5 cursor-pointer mr-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
          <input type="search" name="" id="" onChange={onSearchChange} placeholder="search for cards" x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
        </div>
      </form>
    </>
  )
}

export default SeachForm;
