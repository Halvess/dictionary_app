import Header from './Header.js'
import Form from './Form.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header title = {"Dictionary"}
        subtitle = {'Find definitions, synonyms and more details about english words. \n\nJust type your word below and click search to find your results.'}  />
      <Form />
    </div>
  );
}

export default App;
