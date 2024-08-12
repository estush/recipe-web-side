import logo from './logo.svg';
import './components/Main';
import { Main } from './components/Main';

function App() {
  return <>
    
    <div className="App">
      <Main></Main>
    </div>
    </>
  
}

export default App;
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function App() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}
export default App;