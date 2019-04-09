import { AsyncStorage } from 'react-native'
import {preData} from "../assets/preData"

DECKS_STORAGE_KEY = "MobileFlashCards:decks"

async function handleInitialData() {
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(preData));
  const result = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  return JSON.parse(result);
}

export function getDecks(){
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
      return results
    })}

export function getDeck(title){
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      return JSON.parse(results).filter((deck) => deck.title === title)[0]
    })
}
export function saveDeckTitle(title){
  return getDecks().then((decks) => {
    decks.push({"title": title, "questions": []})
    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
  })
}

export function addCardToDeck(deckTitle, card){
  return getDecks().then((results) => {
    const decks = results.map((deck) => {
      if(deck.title === deckTitle){
        deck.questions.push(card)
      }
      return deck
    })
    console.log("ADDED CARD: "+ JSON.stringify(decks))
    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
  })
}