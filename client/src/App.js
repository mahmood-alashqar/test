import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import FavoriteArt from './components/FavoriteArt';
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      showAllData: false,
      favData: [],
      serverUrl: process.env.REACT_APP_serverUrl,



    }
  }
  componentDidMount = async () => {
    console.log('zjh');
    const allData = await axios.get(`${this.state.serverUrl}/favorite`);
    console.log(allData);
    console.log(this.state.serverUrl);
    this.setState({
      allData: allData.data,
      showAllData: true
    });

  }
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              {this.state.showAllData &&
                <Main data={this.state.allData}
                  addFavorite={this.addFavorite}
                />}
            </Route>
            <Route exact path='/favorite'>
              <FavoriteArt />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
