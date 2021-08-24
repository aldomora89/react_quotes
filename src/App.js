import './App.css';
import './Quote.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const randomIndex = (arr) => { // returns a random int value to use as an index
    return Math.floor(Math.random() * arr.length)
  }

  const [quote, setQuote] = useState("");
  const [index, setIndex] = useState(0);

  const quoteAPI = async () => {
    let arrayOfQuotes = [];

    try {
      const data = await axios.get("https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json");
      arrayOfQuotes = data.data;
      //console.log(arrayOfQuotes);
      const quote = arrayOfQuotes.map((arrayOfQuote) =>
        <div key={arrayOfQuote.id}>
          <div className="quote">
            
            <h2>"{arrayOfQuote.en}"</h2>
            
          </div>
          <div className="author">
            {arrayOfQuote.author}
          </div>
        </div>);
      //console.log(quote);
      setQuote(quote);
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (<div className="App">
    <div className="quoteBox">
      <div className="container">
        <div className="quoteButton">
          {" "}
          <button onClick={_ => setIndex(randomIndex(quote))}>Get Random Quote</button>
        </div>
        {quote[index]}

      </div>
    </div>
  </div>
  );
};

export default App;
