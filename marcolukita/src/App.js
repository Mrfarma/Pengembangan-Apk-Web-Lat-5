import React, { Component } from "react";
import "./css/bootstrap.min.css";
import "./App.css";
import Home from "./views/Home/Home.js";
import Help from "./views/Help/Help.js";
import About from "./views/About/About.js";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
class App extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
          <ul className='navbar-nav'></ul>
        </nav>
      </div>
    );
  }
}

// function App() {
//   var h1 = <i>Lannister</i>;
//   const title = "Praktek Pengembangan Aplikasi Web";
//   var text =
//     "ReactJS merupakan framework atau pustaka Javascript untuk membangun komponen interaksi pengguna interaktif dan dapat digunakan ulang";

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <div>
//           <h1 style={{ textAlign: "center", color: "rgb(252, 146, 158)" }}>
//             Hai, {h1}
//           </h1>
//           <h2 className='title'>{title}</h2>
//           <p className='content-text'>{text}</p>
//         </div>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'>
//           Aplikasi Pengembangan Web
//         </a>
//         <img src={logo} />
//       </header>
//     </div>
//   );
// }

export default App;
