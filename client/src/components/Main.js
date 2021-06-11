import axios from 'axios';
import React, { Component } from 'react'

export class Main extends Component {
  addFavorite = async (obj) => {
    await axios.post(`${process.env.REACT_APP_serverUrl}/favorite/userfav`, obj);
  }

  render() {
    return (
      <>
        {this.props.data.map((d, idx) => {
          console.log(d.description);
          return (
            <div key={idx}>
              <h2>{d.title}</h2>
              <h3>{d.artistName}</h3>
              <img src={d.thumbnail} alt='' />
              <p>{d.description}</p>
              <button onClick={() => this.addFavorite(d)}>Add To favorite</button>
            </div>
          )
        })

        }

      </>
    )
  }
}

export default Main
