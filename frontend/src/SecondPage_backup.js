import Form from './Form.js'
import './App.css'

function SecondPage({wordJSON}) {
  const wordData = wordJSON;
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

  const returnSynonyms = () => {
    let arr = []
    results[0].synonyms.map(element => {
      arr.unshift(<li className="synonym" key={`synonym-${results[0].synonyms.indexOf(element)}`}>{element}</li>)
    })
    return arr
  }
  const returnExamples = () => {
    if(results[0].examples === undefined){
      return (<li className="example" key={`no-example`}>No available example</li>)
    }
    else{
      let arr = []
      results[0].examples.map(element => {
        arr.unshift(<li className="example" key={`synonym-${results[0].examples.indexOf(element)}`}>{element}</li>)
      })
      return arr
    }
  }

  return (
    <div className="App">      
        <Form />
          <p id="found-definitions">{`Found ${results.length} definitions`}</p>
         
          <section id = "word-details">
            <h1 id="word">{word}</h1>
            <h2 id="word-definition">{results[0].definition}</h2>
            <p className="noun-sylables">{results[0].partOfSpeech}</p>
            <p className="noun-sylables">{returnSyllables()}</p>
          </section>

          <section className = "word-extra-data">
            <h3 className="word-extra-data">{`Synonyms`}</h3>
            <ul className = "synonym-list">{returnSynonyms()}</ul>
          </section>

          <section className = "word-extra-data">
            <h3 className="word-extra-data">{`Application`}</h3>
            <ul className = "example-list">{returnExamples()}</ul>
          </section>

    </div>
  );
}

export default SecondPage;
