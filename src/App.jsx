import { useState } from "react";
import Header from "./assets/components/Header";
import Quote from "./assets/components/Quote";
import "./App.css";

const App = () => {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const getStoicc = () => {
    fetch("https://api.themotivate365.com/stoic-quote")
      .then((res) => res.json())
      .then((quote) => {
        setAuthor(quote.author);
        setQuote(quote.quote);
      });
  };

  return (
    <div>
      <Header />
      <div>
        <p>
          Find random stoic quotes and its authors to strengthen up your
          masculinity
        </p>
      </div>
      <main>
        <Quote author={author} quote={quote} getStoicc={getStoicc} />
      </main>
      <section>
        <p>
          Do you need yet another quote to gain power in order to fight against
          masculinity crisis?
        </p>
        <button onClick={getStoicc}>Search another quote</button>
      </section>

      <footer>
        <p>
          made by{" "}
          <a href="https://github.com/quantumvflux" target="_BLANK">
            quantumflux
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
