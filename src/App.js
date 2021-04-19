import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Navbar,Footer} from './components'
import GlobalStyle from './globalStyles'
import Home from './pages/HomePage/Home'
import Services from './pages/JeansChallenge/Services'
import About from './pages/About/About'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/About' exact component={About}/>
        <Route path='/Services' exact component={Services}/>
      </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
