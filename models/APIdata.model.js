class Art {
  constructor(data) {
    this.title = data.title;
    // this.thumbnail = data.thumbnail.;
    this.artistName = data.artist_titles;
    this.description = data.publication_history;
  }
}
module.exports = Art;