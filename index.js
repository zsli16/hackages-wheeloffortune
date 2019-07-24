const express = require('express');
const app = new express();
const path = require('path');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const fs = require('fs');

app.use(cors())

app.use(express.json());

/* use server to send static files */
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/participants', (req, res) => res.json(JSON.parse(fs.readFileSync('participants.json').toString())));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + 'client/build/index.html'));
});

app.post('/signup', (req, res) => {
  try {
    let participants = JSON.parse(fs.readFileSync('participants.json').toString())
    let user = req.body;
    const existingEmail = participants.some(participant => {
      return participant.email == user.email
    })
    if (!existingEmail) {
      fs.writeFileSync('participants.json', JSON.stringify([...participants, user]))
      res.sendStatus(200);
    } else {
      res.status(404).send('Sorry, that email address already exists')
    }
  } catch (err) {
    console.log(err)
    res.sendStatus(400);
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`)
})