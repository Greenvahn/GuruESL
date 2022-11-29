export type cardPropsTypes = {
  name: string,
  imageUrl: string,
  id: string
}

export type iconSizes = {
  w:number | undefined | null,
  h:number | undefined | null
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
  cards:[] | undefined,
  _totalCount: number
}

export type setItem = {
  setCardName : (el:string) => void;
}
