import logo from './logo.svg';
import { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import './App.css';

function App() {

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: "+ response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "CLIENT_ID.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );
  },[]);

  return (
    <div className="App">
      <div id="signInDiv"></div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
