import { AsyncStorage } from 'react-native'
import {preData} from "../assets/preData"

DECKS_STORAGE_KEY = "MobileFlashCards:decks"

async function handleInitialData() {
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(preData));
  const result = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  return JSON.parse(result);
}

export async function getDecks(){
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      console.log("Results: " + results)
      if(results === null || typeof(results) === "undefined"){
        console.log("in   null")
        results = handleInitialData()
      } else {
        console.log("is not null")
        results = JSON.parse(results)
      }
      console.log("Results Again: " + JSON.stringify(results))
      return results
    })}
// export function getDecks(){
//   AsyncStorage.getItem(DECK_STORAGE_KEY)
//   .then(results => JSON.parse(results));
// };

// export async function getDecks(){
//   // return AsyncStorage.getItem(DECKS_STORAGE_KEY)
//   //   .then((results) => {if(typeof(results) === "undefined") return handleInitialData()})
//   //   .then((results) => JSON.parse(results))
// }

export function getDeck(id){}
export function saveDeckTitle(title){
  
}
export function addCardToDeck(title, card){}