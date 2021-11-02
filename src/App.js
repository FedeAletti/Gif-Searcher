import React from 'react';
import './App.css'
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/Results'
import Detail from './pages/Detail/Detail'
import Context from './context/StaticContext';

import { Link, Route } from "wouter"
import { GifsContextProvider } from './context/GifContext';

export default function App() {
  return (
    <Context.Provider value={{name: "Fede", surname:"aletti"}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
             <figure className="App-logo">
              <img alt='Giffy logo' src='https://raw.githubusercontent.com/midudev/react-live-coding/f148532045ce45994c3a8303e3edb8ddcf93d598/public/logo.png' />
            </figure>         
          </Link>

          <GifsContextProvider>        
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"  />
            <Route
              component={Detail}
              path="/gif/:id"
            />
           </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  )
}
