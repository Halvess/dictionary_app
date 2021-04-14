const express = require('express')
const app = express()
const fetch = require('node-fetch');
const dotenv = require('dotenv')
dotenv.config()

app.get('/test', (req, res) => {
  console.log("Someone tried to call")
  res.send("Mensagem Recebida")
})

 app.get('/api/:word', (req, res) =>{
    const word = req.params.word
    console.log("Received word: " + word)

    callApi = async (word) => {
        await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.API_KEY,
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => {
                res.send(data)
        })
        .catch(err => {console.error(err);});
    }

    callApi(word)
})

app.listen(3001, () => console.log('Server ready'))

