import React from 'react'
import { render } from 'react-dom'
import WordCollection from './WordCollection'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
// import WordDefinition from './WordDefinition'
import Astro from './Astro'
import * as serviceWorker from './serviceWorker'
let wordList = [
    {"title": "Febrile", "searchURL": "https://www.google.com/search?q="},
    {"title": "Facile", "searchURL": "https://www.google.com/search?q="},
    {"title": "Proverbial", "searchURL": "https://www.google.com/search?q="},
    {"title": "Platitude", "searchURL": "https://www.google.com/search?q="},
    {"title": "Vesture", "searchURL": "https://www.google.com/search?q="},
    {"title": "Purview", "searchURL": "https://www.google.com/search?q="},
    {"title": "Rejoinder", "searchURL": "https://www.google.com/search?q="},
    {"title": "Barque", "searchURL": "https://www.google.com/search?q="},
    {"title": "Rusticate", "searchURL": "https://www.google.com/search?q="},
    {"title": "Promulge", "searchURL": "https://www.google.com/search?q="},
    {"title": "Promulgate", "searchURL": "https://www.google.com/search?q="},
    {"title": "Emulous", "searchURL": "https://www.google.com/search?q="},
    {"title": "Conscripted", "searchURL": "https://www.google.com/search?q="},
    {"title": "Desultory", "searchURL": "https://www.google.com/search?q="},
    {"title": "Delineate", "searchURL": "https://www.google.com/search?q="},
    {"title": "Endemic", "searchURL": "https://www.google.com/search?q="},
    {"title": "Sesquipedalian", "searchURL": "https://www.google.com/search?q="},
    {"title": "Cognomen", "searchURL": "https://www.google.com/search?q="},
    {"title": "Unction", "searchURL": "https://www.google.com/search?q="},
    {"title": "Ternary", "searchURL": "https://www.google.com/search?q="},
    {"title": "Proscribe", "searchURL": "https://www.google.com/search?q="},
    {"title": "Aggrandize", "searchURL": "https://www.google.com/search?q="},
    {"title": "Dignify", "searchURL": "https://www.google.com/search?q="},
    {"title": "Wherewith", "searchURL": "https://www.google.com/search?q="},
    {"title": "Extirpate", "searchURL": "https://www.google.com/search?q="},
    {"title": "Injunction", "searchURL": "https://www.google.com/search?q="},
    {"title": "Potation", "searchURL": "https://www.google.com/search?q="},
    {"title": "Tremulous", "searchURL": "https://www.google.com/search?q="},
    {"title": "Annuity", "searchURL": "https://www.google.com/search?q="},
    {"title": "Oriel", "searchURL": "https://www.google.com/search?q="},
    {"title": "Alluvium", "searchURL": "https://www.google.com/search?q="},
    {"title": "Assonance", "searchURL": "https://www.google.com/search?q="},
    {"title": "Fecund", "searchURL": "https://www.google.com/search?q="},
    {"title": "Maledictions", "searchURL": "https://www.google.com/search?q="},
    {"title": "Nonce", "searchURL": "https://www.google.com/search?q="},
    {"title": "Winsome", "searchURL": "https://www.google.com/search?q="},
    {"title": "Premise", "searchURL": "https://www.google.com/search?q="},
    {"title": "Previse", "searchURL": "https://www.google.com/search?q="},
    {"title": "Incontinence", "searchURL": "https://www.google.com/search?q="},
    {"title": "Peevish", "searchURL": "https://www.google.com/search?q="},
    {"title": "Refractory", "searchURL": "https://www.google.com/search?q="},
    {"title": "Shindy", "searchURL": "https://www.google.com/search?q="},
    {"title": "Appertain", "searchURL": "https://www.google.com/search?q="},
    {"title": "Desuetude", "searchURL": "https://www.google.com/search?q="},
    {"title": "Inoculate", "searchURL": "https://www.google.com/search?q="},
    {"title": "Recreant", "searchURL": "https://www.google.com/search?q="},
    {"title": "Inviolable", "searchURL": "https://www.google.com/search?q="},
    {"title": "Condign", "searchURL": "https://www.google.com/search?q="},
    {"title": "Maudlin", "searchURL": "https://www.google.com/search?q="},
    {"title": "Forswear", "searchURL": "https://www.google.com/search?q="},
    {"title": "Vicinal", "searchURL": "https://www.google.com/search?q="},
    {"title": "Niveous", "searchURL": "https://www.google.com/search?q="},
    {"title": "Eudaemonic", "searchURL": "https://www.google.com/search?q="},
    {"title": "Remonstrance", "searchURL": "https://www.google.com/search?q="},
    {"title": "Anon", "searchURL": "https://www.google.com/search?q="},
    {"title": "Contumely", "searchURL": "https://www.google.com/search?q="},
    {"title": "Idem", "searchURL": "https://www.google.com/search?q="},
    {"title": "Baleful", "searchURL": "https://www.google.com/search?q="},
    {"title": "Inimical", "searchURL": "https://www.google.com/search?q="},
    {"title": "Hodiernal", "searchURL": "https://www.google.com/search?q="},
    {"title": "Gait", "searchURL": "https://www.google.com/search?q="},
    {"title": "Besmirch", "searchURL": "https://www.google.com/search?q="},
    {"title": "Conjecture", "searchURL": "https://www.google.com/search?q="},
    {"title": "Tabernacle", "searchURL": "https://www.google.com/search?q="},
    {"title": "Anodyne", "searchURL": "https://www.google.com/search?q="},
    {"title": "Concomitant", "searchURL": "https://www.google.com/search?q="},
    {"title": "Malcontent", "searchURL": "https://www.google.com/search?q="},
    {"title": "Felicitate", "searchURL": "https://www.google.com/search?q="},
    {"title": "Consternation", "searchURL": "https://www.google.com/search?q="},
    {"title": "Disquisition", "searchURL": "https://www.google.com/search?q="},
    {"title": "Pejorative", "searchURL": "https://www.google.com/search?q="},
    {"title": "Couchant", "searchURL": "https://www.google.com/search?q="},
    {"title": "Elide", "searchURL": "https://www.google.com/search?q="},
    {"title": "Reconnoiter", "searchURL": "https://www.google.com/search?q="},
    {"title": "Invective", "searchURL": "https://www.google.com/search?q="},
    {"title": "Systole", "searchURL": "https://www.google.com/search?q="},
    {"title": "Diastole", "searchURL": "https://www.google.com/search?q="},
    {"title": "Cantillate", "searchURL": "https://www.google.com/search?q="},
    {"title": "Habiliment", "searchURL": "https://www.google.com/search?q="},
    {"title": "Liminal", "searchURL": "https://www.google.com/search?q="},
    {"title": "Singly", "searchURL": "https://www.google.com/search?q="},
    {"title": "Flews", "searchURL": "https://www.google.com/search?q="}
]

render(
    <MainHeader/>,
    document.getElementById('header')
)

render(
	<WordCollection words={wordList} />, 
	document.getElementById('body')
)

render(
    <MainFooter/>,
    document.getElementById('footer')
)

render(
    <Astro/>,
    document.getElementById('sticky')
)

// render(
//     <WordDefinition/>,
//     document.getElementById('sticky')
// )

serviceWorker.register();