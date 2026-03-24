import { useState } from 'react';
import './App.css';
import MyNav from './myComponents/MyNav';
import MyText from './myComponents/MyText';

function App() {
  const [DarkMode,setDarkMode]=useState('false');
  const [DarkModeText,setDarkModeText]=useState("DarkMode");

  const toggleMode =()=>
  {
    if(DarkMode === "false")
    {
      // document.body.style.backgroundColor ="#042743";
      document.body.style.backgroundColor ='#042743';
      document.getElementById("M2").style.color='white';
      
      setDarkModeText("LightMode")
      setDarkMode('true' );
    }
    else
    {
      document.body.style.backgroundColor ='white';
      document.getElementById("M2").style.color='#042743';
      
      setDarkModeText("DarkMode")
      setDarkMode('false');
    }
  }
  return (
   <>
   <MyNav title="ILoveText" Mode={DarkMode} ModeText={DarkModeText} toggleMode={toggleMode}/>
   <div className="container my-3" id="M2">
   <MyText Heading="Enter Your Text Here"  />
   </div>
   
   
   </>
   
  );
}

export default App;
