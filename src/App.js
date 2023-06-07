import './App.css';
import './Quote.css';
import axios from 'axios';
import { useState,useEffect } from 'react';


export default function App() {
const [response, setResponse] = useState(null);
const quoteAPI = async () => {
  try {
    const data = await axios.get("https://dummyjson.com/quotes/random");
    
    setResponse(data.data);
    //console.log("setresponse:",response);
  } catch (error) {
    console.log(error);
  }

};

useEffect(() => {
  // Trigger the API Call
  quoteAPI();
}, []);

return (<div className="App">
  <div className="quoteBox">
    <div className="container">
      <div className="quoteButton">
      <h2>"{response && response.quote}"</h2>
      <p>{response && response.author}</p>
        <button onClick={() => quoteAPI()}>Get Random Quote</button>
        
      </div>

    </div>
  </div>
</div>
);
};


