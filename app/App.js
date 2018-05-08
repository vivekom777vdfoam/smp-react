import React, {Component} from 'react';
import Header, {PreHeader} from './header/header';
import Footer from './footer/footer';
import Home from './home';

export default class App extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Home />
        <Footer />
      </div>
    );
  }
}
