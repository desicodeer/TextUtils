// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// let name = "Aanchal";
function App() {
   const [mode,setMode] = useState('light');
   const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
   const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529';
       showAlert("Dark mode enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
       showAlert("Light mode enable","success");
    }
   }
  return (
        <>
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
         <Alert alert={alert} />
         // <About />
        <div className="container my-3">
        <TextForm heading="Enter the Text you like" mode={mode} showAlert={showAlert}/> 
        </div>
        </>
      // <>
      // <nav className="navbar">
      //   <li className="navitems">Home</li>
      //   <li className="navitems">Details</li>
      //   <li className="navitems">Contact</li>
      // </nav>
      // <div className="info">
      //   <h1 className="title">Hello Learn React with {name}</h1>
      //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi iste mollitia voluptate unde facilis voluptas saepe.
      //      Inventore odit labore vel aspernatur sit adipisci aliquam similique distinctio fuga? Laudantium, dolores.</p>
      // </div>
      // </>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Aanchal
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
