import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// CSS
// import component
import Home from './components/home'
import Header from './components/header'
import Trainer from './components/trainer'
import DetailPoke from './components/detailPoke'

//ReactRedux
import HomeReactRedux from './components/homeReactRedux'
import DetailPokeReactRedux from './components/detailPokeReactRedux'

//Thunk 
import HomeThunk from './components/homeThunk'
import DetailPokeReactReduxThunk from './components/detailPokeThunk'
//wrapper
var Pokedex = require('pokeapi-js-wrapper');
// var P = new Pokedex.Pokedex();

class App extends Component {
  constructor(){
    super()
    this.state ={
      pokeBoxApp: {}
    }
  }
  render() {
    return (
      <div className="">

        <div className="">
          <Header className=""/>
        </div><br/><br/>

        <div className="mdl-grid">
          <div className="mdl-cell--5-col">
          {/* <Home/> */}
          <Route
            exact path ="/"
            render={props => <Home getPokeBox={this.receivePokeBox.bind(this)}></Home>}
          />
          <Route
            exact path="/homeReactRedux"
              render={props => <HomeReactRedux getPokeBox={this.receivePokeBox.bind(this)}></HomeReactRedux>}
          />
          <Route
            exact path="/homeReactReduxThunk"
              render={props => <HomeThunk getPokeBox={this.receivePokeBox.bind(this)}></HomeThunk>}
          />
          </div>

          <div className="mdl-cell--6-col">
          <Route
            path ="/detailPoke/:pokename"
              render={props => <DetailPoke pokeBoxDetail={this.state.pokeBoxApp}></DetailPoke>}
          />
          <Route
            path ="/detailPokeReactRedux/:pokename"
              render={props => <DetailPokeReactRedux pokeBoxDetail={this.state.pokeBoxApp}></DetailPokeReactRedux>}
          />
          <Route
            path="/detailPokeReactReduxThunk/:pokename"
            render={props => <DetailPokeReactReduxThunk pokeBoxDetail={this.state.pokeBoxApp}></DetailPokeReactReduxThunk>}
          />
          <Route
            exact path="/trainerDetail"
            render={props => <Trainer className="grid"></Trainer>}
          />
          </div>
        </div>

      </div>
    );
  }

  receivePokeBox (val) {
    console.log('FROM APP JS' + JSON.stringify(val.length))
      this.setState({
        pokeBoxApp: val
      },()=>{
        alert(JSON.stringify(this.state.pokeBoxApp) + 'dari depan')
      })
  }

}

export default App;
