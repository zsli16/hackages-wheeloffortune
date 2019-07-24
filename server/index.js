const express = require('express');
const app = new express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const fs = require('fs');

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/participants', (req, res) => res.json(JSON.parse(fs.readFileSync('./participants.json').toString())));

app.post('/signup', (req, res) => {
  try {
    let participants = JSON.parse(fs.readFileSync('./participants.json').toString())
    let user = req.body;
    fs.writeFileSync('./participants.json', JSON.stringify([...participants, user]))
    res.sendStatus(200);
  } catch (err) {
    console.log(err)
    res.sendStatus(400);
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`)
})