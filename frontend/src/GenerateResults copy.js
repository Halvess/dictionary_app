import './App.css'

function GenerateResults({data}) {
  let resultsArray = []
  const wordData = data;
  const {word, results, syllables} = wordData
  const {count, list} = syllables

    const returnSyllables = () =>{
    const lastIndex = list.length - 1
    let arr = []
    if (count === 1){
      return list[0]
    }
    const result = list.map((element, index) =>{
        if(index === lastIndex){
          arr.push(element)
          console.log(arr)
          return arr
        }
        console.log(`Indice ${list.indexOf(element)} elemento ${element}`)
        arr.push(`${element} ${"\u2022"} `)
        console.log(arr)
  })
    return result
}
  
  const returnSynonyms = (synonym) => {
    let arr = []
    if (synonym ===undefined){
      return (<li className="example" key={`no-snyonym`}>No available synonym</li>)
    }
    synonym.map(element => {
      arr.unshift(<li className="synonym" key={`${element}-${synonym.indexOf(element)}`}>{element}</li>)
    })
    return arr
  }
  const returnExamples = (example) => {
    if(example === undefined){
      return (<li className="example" key={`no-example`}>No available example</li>)
    }
    else{
      let arr = []
      example.map(element => {
        arr.unshift(<li className="example" key={`${element}-${example.indexOf(element)}`}>{element}</li>)
      })
      return arr
    }
  }

  results.map(element => {
    resultsArray.push(
    <div className="definition" id={`${word}-${results.indexOf(element)}`}>      
         <section className = "word-details">
           <h1 id="word">{word}</h1>
           <h2 id="word-definition">{element.definition}</h2>
           <p className="noun-sylables">{element.partOfSpeech}</p>
           <p className="noun-sylables">{returnSyllables()}</p>
         </section>

         <section className = "word-extra-data">
           <h3 className="word-extra-data">{`Synonyms`}</h3>
           <ul className = "synonym-list">{returnSynonyms(element.synonyms)}</ul>
         </section>

         <section className = "word-extra-data">
           <h3 className="word-extra-data">{`Application`}</h3>
           <ul className = "example-list">{returnExamples(element.examples)}</ul>
         </section>
    </div>
    )})

  return(<div className="results-container">{resultsArray}</div>)
}

export default GenerateResults;
