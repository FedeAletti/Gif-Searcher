import './App.css';
import {Link, Route} from 'wouter';

import { ListOfGifs } from './components/ListOfGifs';



function App() {


  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/pikachu">Gifs de Pikachu </Link>
        <Link to="/gif/charizad">Gifs de Charizad </Link>
        <Link to="/gif/blastoise">Gifs de Blastoise </Link>
        <Link to="/gif/psyduck">Gifs de Psyduck</Link>

        <Route          
          component={ListOfGifs}
          path="/gif/:keyword"/>
      </section>
    </div>
  );
}

export default App;
