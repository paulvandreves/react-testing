import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './navagation'; 
import PageContent from './page-content';

// function App() {
//   return (
//   <div className="App">
//    <h1>LifeCycle hooks deep dive </h1>
//    <Dicussion /> 
//    <Rules /> 
//    <Workflow /> 
//   </div>
//   );
// }
// export default App;
// How do I create a basic functiol React component? 

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>DevCamp React Starter </h1>

        <Navigation /> 
        <PageContent />

      </div>
    )
  }
}