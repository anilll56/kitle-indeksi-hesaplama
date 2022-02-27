import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Hero from "./components/hero"
function App() {
  const [calcul , setCalcul] = useState([])
  const [weight,setWeight] = useState("")
  const [size , setSize] = useState("")
  return(
    
   <Hero/>
    
  );
  
}



export default App;
