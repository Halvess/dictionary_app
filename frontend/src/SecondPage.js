import Form from './Form.js'
import './App.css'
import GenerateResults from './GenerateResults.js'

function SecondPage({wordJSON}) {

  return (
    <div className="App">      
        <Form />
        <GenerateResults data={wordJSON}/>
    </div>
  );
}

export default SecondPage;
