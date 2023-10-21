import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArr from './services/getRandomFromArr'
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase'
import bgArr from './utils/bgArr.json'


function App() {
  
const quote = getRandomFromArr(phrases)

const [phraseRandom, setPhraseRandom] = useState(quote)

const [bgApp, setBgApp] = useState(getRandomFromArr(bgArr))

const obgStyle = {
  backgroundImage:`url(../fondo${bgApp}.png)`
}

  return (
  <div style={obgStyle} className='app'>
    <h1 className='app__title'>Galleta De La Fortuna</h1>
    <article 
    className='app__card'>
      <Phrase
        phraseRandom = {phraseRandom}
      />
      <ButtonPhrase
        setPhraseRandom={setPhraseRandom}
        setBgApp={setBgApp}
        />
    </article>
  </div>
  )
}

export default App
