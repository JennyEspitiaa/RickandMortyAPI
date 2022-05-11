import {getData} from "../helpers/getData.js"
import { showCards } from "../modules/showCards.js";

const url = 'https://rickandmortyapi.com/api/character'
const tarjetas = document.getElementById('tarjetas')

document.addEventListener('DOMContentLoaded', async()=>{
    const characters = await getData (url);
    // console.log(characters);
    showCards(characters,tarjetas)
});





