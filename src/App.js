import React from 'react';
import { useParams } from "react-router";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const Home = (props) => {
  return (
    <h1 style={{textAlign: "center"}}>Welcome</h1>
  );
}

const UserInput = (props) => {
  const {input} = useParams();
  
  if(isNaN(input)) {
    return <h1 style={{textAlign: "center"}}>The word is: {input}</h1>;
  } else {
    return <h1 style={{textAlign: "center"}}>The number is: {input}</h1>;
  }
}

const UserInputColor = (props) => {
  const {input} = useParams();
  const {textColor} = useParams();
  const {backgroundColor} = useParams();

  return <h1 style={{backgroundColor: backgroundColor, color: textColor, textAlign: "center"}}>The word is: {input}</h1>
}

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:input" element={<UserInput />} />
        <Route path="/:input/:textColor/:backgroundColor" element={<UserInputColor />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
