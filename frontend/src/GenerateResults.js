import './App.css'
import React, {useState, useEffect} from 'react'

function GenerateResults({data}) {
  const wordData = data;
  const {word, results, syllables} = wordData
  const numberOfResults = results.length

  const changeTrigger = results[0].definition

  const [definition, setDefinition] = useState(results[0].definition)
  const [synonym, setSynonym] = useState(results[0].synonyms)
  const [example, setExample] = useState(results[0].examples)
  const [activeDefinition, setActiveDefinition] = useState(0)


  useEffect(()=>{
    setDefinition(results[0].definition) 
    setSynonym(results[0].synonyms) 
    setExample(results[0].examples)
    setActiveDefinition(0) 
  }, [changeTrigger])

  const retrieveSyllables = () => {
    let arr = []
    if (syllables === undefined){
      return word
    }
    if (syllables.count < 2){
      return word
    }
    const syllablesList = syllables.list
    const lastIndex = syllablesList.length - 1
    
    syllablesList.map((element,index) => {
        console.log(element)
        arr.push(element)
        if (index !== lastIndex){
          arr.push(' \u2022 ')
        }
    })
        return arr.join('')
  }

/*   const generateDefinitionButtons = () =>{
      let arr = []
      for(let i=0; i< numberOfResults; i++){
        arr.push(<button key={`button-to-definition-${i+1}`} className={i===activeButton ? "definition-change-button active" : "definition-change-button"} onClick = {()=>{setActiveButton(i); changeDefinition(i)}}></button>)
      }
      return arr
  } */

  const changeDefinition = (index) => {
      setActiveDefinition(index)
      setDefinition(results[index].definition)
      setSynonym(results[index].synonyms)
      setExample(results[index].examples)
  }

  const retrieveSynonyms = (synonym) =>{
      let arr = []
      if (synonym === undefined){
        return(<li key="no-synonym">No synonym found</li>)
      }
      synonym.map(element => {
        arr.unshift(<li key={`synonym-${element}`}>{element}</li>)
      })
      return arr
  }

  const retrieveExamples = (example) =>{
    let arr = []
    if (example === undefined){
      return(<li key="no-synonym">No example found</li>)
    }
    example.map(element => {
      arr.unshift(<li key={`example-${Math.random()*5}`}>{element}</li>)
    })
    return arr
}


  return(
    <div>
    <section className = "word-details-container">
      <p className = "found-definitions">Found {numberOfResults} definitions</p>
      <h1 className = "word">{word}</h1>
      <h2 id = "definition">{definition}</h2>
      <h4 className = "partOfSpeech">{results[0].partOfSpeach}</h4>
      <h4 className = "syllables">{retrieveSyllables()}</h4>
      <h4 className = "synonym-example-title">Synonyms</h4>
      <ul className = "synonym-example-list">
        {retrieveSynonyms(synonym)}
      </ul>
      <h4 className = "synonym-example-title">Example in a phrase</h4>
      <ul className = "synonym-example-list">
        {retrieveExamples(example)}
      </ul>
    </section>
    <footer className = "definition-selector-container">
          <button className={activeDefinition === 0 ? "btn-change-definition off" : "btn-change-definition"} onClick = {() => {changeDefinition( activeDefinition - 1 )}}>previous</button>
          <p id = "definition-of">Definition {activeDefinition + 1} of {numberOfResults}</p>
          <button className={activeDefinition === numberOfResults - 1 ? "btn-change-definition off" : "btn-change-definition"} onClick = {() => {changeDefinition( activeDefinition + 1 )}}>next</button>
    </footer>
    </div>

  )

}

export default GenerateResults;
