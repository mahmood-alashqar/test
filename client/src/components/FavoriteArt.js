import axios from 'axios'
import React, { Component } from 'react'

export class FavoriteArt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favData: [],
      title: '',
      showupdateform: false,
      slug: ''
    }
  }

  componentDidMount = async () => {

    const qusai = await axios.get(`${process.env.REACT_APP_serverUrl}/favorite/userfav`);
    this.setState({
      favData: qusai.data,


    })
    console.log(this.state.favData);
  }
  deleteItem = async (index) => {
    let qusai = await axios.delete(`${process.env.REACT_APP_serverUrl}/favorite/userfav/${index}`);
    this.setState({
      favData: qusai.data
    })
  }
  updateItem = async (e) => {
    e.preventDefault();
    const bodyData = {
      title: this.state.title
    }
    let qusai = await axios.put(`${process.env.REACT_APP_serverUrl}/favorite/userfav/${this.state.slug}`, bodyData);
    this.setState({
      favData: qusai.data
    })
    console.log(this.state.slug);
    console.log(this.state.title);
  }
  stateChange = async (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.value

    })

  }
  changeSlug = async (slug) => {

    this.setState({
      slug: slug,
      showupdateform: true

    })

  }
  render() {
    const rendering = this.state.favData.map((d, idx) => {
      return (<div key={idx}>
        <h2>{d.title}</h2>
        <h3>{d.artistName}</h3>
        <img src={d.thumbnail} alt='' />
        <p>{d.descriprion}</p>

        <button onClick={() => this.changeSlug(d.slug)}>Update</button>
        <button onClick={() => this.deleteItem(d.slug)}>Delete</button>
      </div>)
    });
    return (
      <div>
        {this.state.showupdateform &&
          <form onSubmit={(e) => this.updateItem(e)}>
            <input onChange={this.stateChange} type='text' />
            <input type='submit' value='update item' />

          </form>}
        {rendering}
      </div>


    )
  }
}

export default FavoriteArt
