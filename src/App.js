import SearchDictionary from "./SearchDictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1> Zahra's Dictionary </h1>
      </div>
      <SearchDictionary />
      <footer>
        <div className="link">
          <p>Coded by Zahra Olanrewaju</p>
          <a href="https://github.com/zahrabola/my-dictionary-z-app">
            Open sourece Github
          </a>
          <p>Hosted on Netlify</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
