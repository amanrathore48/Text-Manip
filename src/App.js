import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textbody from './Components/Textbody';
import React, {useState} from 'react';
import Alert from './Components/Alert';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=() =>{
    if (mode === 'light') {
      setMode('dark')
      showAlert("Dark Mode Enabled", "Sucess")
    }
    else{
      setMode('light')
      showAlert("Light Mode Enabled", "Sucess")
    }
  }
  return (
    <div className={`app app-${mode}`}>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Textbody showAlert={showAlert} mode={mode} heading="Text Manipulator"/>
    </div>
  );
}

export default App;
