import React from 'react';
import BarraPesquisa from './components/barraPesquisa/BarraPesquisa';
import Informacoes from './components/informacoes/Informacoes';
import Repositorios from './components/repositorios/Repositorios';
import Following from './components/following/Following';
import Followers from './components/followers/Followers'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarraPesquisa />
        <Informacoes />
        <Repositorios />
        <div class="follo">
          <Following />
          <Followers />
        </div>
      </header>
    </div>
  );
}

export default App;
