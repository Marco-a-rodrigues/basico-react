import './App.css';
import React from 'react';
import Header from './components/header';
import Main from './components/MainDiv';
import Form from './components/Form';
import Footer from './components/Footer';

class App extends React.Component{

  render() {
    return(
      <>  
        <Header/>
        <Main leads={this.props.leads}/>
        <Footer/>
      </>
    )
  }

}

export default App;