import { useState, useEffect } from "react"
import { CardData } from "../@types/types";
import axios from "axios";

const GetCards = (name: string) => {
  const [cardData, setCardData] = useState<CardData>();

  useEffect(() => {
    const fetchData = async (name: string) => {
      const result = axios.get(`https://api.elderscrollslegends.io/v1/cards?name=${name}`)
      const res = await result;

      setCardData(res.data)
    }
    fetchData(name);
  }, [name]);

  return cardData?.cards
};

export default GetCards;