

const Phrase = ( {phraseRandom}) => {

    return (
    <article className="app__phrase">
        <p>{phraseRandom.phrase}</p>
        <p className="author">{phraseRandom.author}</p>
    </article>
    )
}

export default Phrase