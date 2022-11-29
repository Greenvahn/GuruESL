import { useState, useEffect } from "react"
import { CardData } from "../@types/types";
import axios from "axios";

const GetCards = (name: string) => {
  const [cardData, setCardData] = useState<CardData>();
  const [isLoading, setLoad] = useState(false);

  useEffect(() => {
    const fetchData = async (name: string) => {
      setLoad(true)
      setCardData(undefined)

      const result = axios.get(`https://api.elderscrollslegends.io/v1/cards?name=${name}`)
      const res = await result;

      res.data !== 'udefined' ? setLoad(false) : setLoad(true)
      setCardData(res.data)
    }
    fetchData(name);
  }, [name]);

  return { cardData, isLoading}
};

export default GetCards;