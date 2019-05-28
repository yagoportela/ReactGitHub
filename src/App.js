import React, {Component} from 'react';
import BarraPesquisa from './components/barraPesquisa/BarraPesquisa';
import Informacoes from './components/informacoes/Informacoes';
import Repositorios from './components/repositorios/Repositorios';
import Following from './components/following/Following';
import Followers from './components/followers/Followers';
import common from './utils/common';

class App extends Component {
  constructor(){
    super();
    this.state = {
      url: "https://api.github.com/users/yagoportela",
      userInfo: {
        nome: 'yagoportela',
        id: 18448247,
        url: 'https://api.github.com/users/yagoportela',
        repositorioUrl: 'https://api.github.com/users/yagoportela/repos',
        followers: 3,
        following: 4
      }
    }
  }
 
  render() {
    return(
      <div className="App">

        <header className="App-header">
          <BarraPesquisa handleEvent={this.handleEvent}
          />

        <Informacoes userInfo={this.state.userInfo}/>

        <Repositorios />
        
          <div className="follo">
          <Following />

          <Followers />
        </div>
      </header>
    </div>
    )
  }

    handleEvent = (event) => {
      common.ajaxRquest(this.state.url, this.callback, this.callbackError);
    }

    callback = (data) => {
      console.log(data);
    }
    callbackError = (data) => {
      console.log(data);
    }

}

export default App;
