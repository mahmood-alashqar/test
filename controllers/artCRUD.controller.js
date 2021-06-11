const artPieceModel = require('../models/artic.mongoose.model');

const postFavArtist = async (req, res) => {
  const { description, artistName, thumbnail, title } = req.body;
  const slug = title.toLowerCase().split(' ').join('-');
  artPieceModel.find({ slug: slug }, (error, data) => {
    if (data.length > 0) {
      res.send('This Piece Of Art Already Exist');
    }
    else {
      const newPieceOfArt = new artPieceModel({
        title: title,
        slug: slug,
        thumbnail: thumbnail,
        artistName: artistName[0],
        description: description
      })
      console.log(artistName);
      newPieceOfArt.save();
      res.send('Your Data Saved');
    }
  })
}

const getFavPieceOfArt = async (req, res) => {
  artPieceModel.find({}, (error, data) => {
    res.send(data);
  })
}

const deletePieceOfArt = async (req, res) => {
  const slug = req.params.slug;
  artPieceModel.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    }
    else {
      // res.send('The Piece Of Art Deleted Successfully');
      artPieceModel.find({}, (error, data) => {
        res.send(data);
      })

    }

  })
}

const updatePieceOfArt = async (req, res) => {
  const { title } = req.body;
  const slug = req.params.slug;
  artPieceModel.findOne({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    }
    else {
      data.title = title;
      data.save();
      artPieceModel.find({}, (error, data) => {
        res.send(data);
      })
    }
  })

}
module.exports = {
  postFavArtist,
  getFavPieceOfArt,
  deletePieceOfArt,
  updatePieceOfArt
}
