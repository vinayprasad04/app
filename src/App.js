import React, { Component } from 'react';

import Root from './root';
import './assets/css/bootstrap.min.css';
import './assets/css/modern-business.css';
import Header from './common/header';
import Footer from './common/footer';


class App extends Component {
  render() {
    return (
        <div>
            <Header/>
                <Root/>
            <Footer/>
        </div>
    );
  }
}
export default App;
