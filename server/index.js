const express = require('express');
const app = new express();
const port = 3001;
const cors = require('cors')
const fs = require('fs');

app.use(cors())
app.use(express.json());

const participants = [{'Sue': 'sue@gmail.com'}, {'Florian': 'florian@gmail.com'}, {'Davy': 'davy@hackages.io'}, {'Marta': 'marta@hackages.io'}];

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/participants', (req, res) => res.json(JSON.parse(fs.readFileSync('./participants.json').toString())));

app.post('/signup', (req, res) => {
  try {
    let participants = JSON.parse(fs.readFileSync('./participants.json').toString())
    let user = req.body;
    console.log(req)
    console.log(user);
    fs.writeFileSync('./participants.json', JSON.stringify([...participants, user]))
    res.sendStatus(200);
  } catch (err) {
    console.log(err)
    res.sendStatus(400);
  }
})

app.listen(port, () => {
  console.log('listening on 3001')
})