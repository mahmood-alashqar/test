const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());
const getAllData = require('./controllers/getAllData');
const CRUD = require('./controllers/artCRUD.controller');
const PORT = process.env.PORT || 8082;
const DB = process.env.DATABASE_URL;

mongoose.connect(`${DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('ok')
});

app.get('/favorite', getAllData);
app.post('/favorite/userfav', CRUD.postFavArtist);
app.get('/favorite/userfav', CRUD.getFavPieceOfArt);
app.put('/favorite/userfav/:slug', CRUD.updatePieceOfArt);
app.delete('/favorite/userfav/:slug', CRUD.deletePieceOfArt);




app.listen(PORT, () => {
  console.log(`you listen on ${PORT}`);
});
