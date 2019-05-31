import React, { PureComponent } from 'react';
import BarraPesquisa from './components/barraPesquisa/BarraPesquisa';
import Informacoes from './components/informacoes/Informacoes';
import Repositorios from './components/repositorios/Repositorios';
import Following from './components/following/Following';
import Followers from './components/followers/Followers';
import common from './utils/common';
import { objectUserInfo } from "./class/userInfo";
import { addUserInfo, addRepositorios, addFollowing, addFollowers } from "./class/userInfo";
import './App.scss'

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      url: "https://api.github.com/users/",
      userInfo: objectUserInfo,
      repositorios: [],
      following: [],
      followers: [],
      error: false,
      loading: false
    }

    this.handleEvent = this.handleEvent.bind(this);
    this.callbackInfo = this.callbackInfo.bind(this);
    this.callbackRepositorio = this.callbackRepositorio.bind(this);
    this.callbackFollowing = this.callbackFollowing.bind(this);
    this.callbackFollowers = this.callbackFollowers.bind(this);
    this.callbackError = this.callbackError.bind(this);
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <BarraPesquisa handleEvent={this.handleEvent} isLoggedIn={false} />
          
          {!this.state.error && !this.state.loading && <Informacoes userInfo={this.state.userInfo} />}             
          
          {!this.state.error && !this.state.loading && <Repositorios repositorios={this.state.repositorios} />}

          <div className="follo">
            {!this.state.error && !this.state.loading && <Following following={this.state.following} />}

            {!this.state.error && !this.state.loading && <Followers followers={this.state.followers} />}
           
            {!this.state.error && this.state.loading && <span>CARREGANDO...........</span>}
            {this.state.error && !this.state.loading && <span>Não foi encontrado</span>}
          </div>
          
        </header>
      </div>
    )
  }
  
  handleEvent = (event) => {
  
    if (event.keyCode === 13) {

      this.setState({
        error: false,
        loading: true
      })

      common.ajaxRquest(this.state.url + event.target.value, this.callbackInfo, this.callbackError);
      common.ajaxRquest(this.state.url + event.target.value + '/repos', this.callbackRepositorio, this.callbackError);
      common.ajaxRquest(this.state.url + event.target.value + '/followers', this.callbackFollowing, this.callbackError);
      common.ajaxRquest(this.state.url + event.target.value + '/following', this.callbackFollowers, this.callbackError);

      this.setState({
        loading: false
      })

    }
  }

  callbackInfo = (data) => {
    this.setState({
      userInfo: addUserInfo(data),
      error: false,
      loading: false
    })
  }

  callbackRepositorio = (data) => {
    this.setState({
      repositorios: addRepositorios(data)
    })
  }

  callbackFollowing = (data) => {
    this.setState({
      following: addFollowing(data)
    })
  }

  callbackFollowers = (data) => {
    this.setState({
      followers: addFollowers(data)
    })
  }

  callbackError = (error) => {
    console.log(error);
    this.setState({
      error: true,
      loading: false
    })

  }

}

export default App;
