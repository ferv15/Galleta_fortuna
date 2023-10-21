import getRandomFromArr from "../services/getRandomFromArr"
import Phrases from "../utils/phrases.json"
import bgArr from "../utils/bgArr.json"

const ButtonPhrase = ({ setPhraseRandom , setBgApp}) => {

    const handleChangePhrase = () => {
        const quote = getRandomFromArr(Phrases)
        setPhraseRandom(quote)
        setBgApp(getRandomFromArr(bgArr))
    }

    return (
    <button 
        className="app__btn"
        onClick={handleChangePhrase }
    >Ver Otro
    </button>
    )
}

export default ButtonPhrase