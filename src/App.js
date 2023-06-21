import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [quote, setQuote] = useState("");

  const loadQuote = async () => {
      let respone = await axios.get('https://api.adviceslip.com/advice');
      setQuote(respone.data.slip);
  };

  useEffect(() => {
    loadQuote();
  }, []);

  return (
    <main>
      <div className="card-quote">
        <div className="quote">
          <p>Advice #{quote.id}</p>
          <h1>
            {quote.advice}
          </h1>
          <picture>
            <source media="(min-width: 375px )" srcset="/images/pattern-divider-mobile.svg" />
            <img src="/images/pattern-divider-desktop.svg" alt="divider" />
          </picture>
        </div>
        <button onClick={loadQuote}>
          <img src="/images/icon-dice.svg" alt="dice" />
        </button>

      {/* <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
      
      </div>
    </main>
  );
}

export default App;
