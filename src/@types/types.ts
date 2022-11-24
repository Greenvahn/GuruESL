export type cardPropsTypes = {
  name: string,
  imageUrl: string,
  id: string
}

// export interface CardData {
//   name: string,
//   rarity: string,
//   type: string,
//   subtypes: string[],
//   cost: number,
//   power: number,
//   health: number,
//   set: {
//     id: string,
//     name: string,
//     _self: string
//   },
//   collectible: boolean,
//   soulSummon: string,
//   soulTrap: string,
//   text: string,
//   attributes: string[],
//   unique: boolean,
//   imageUrl: string,
//   id: string
// }


export interface CardData {
  cards:[] | undefined
}

export type setItem = {
  setCardName : (el:string) => void;
}
