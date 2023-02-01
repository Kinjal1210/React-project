import { useState } from "react";
import './App.css';
import FilmsList from "./components/filmsList";

function App(props) {
  let [list,SetList] = useState(["ready", "set", "go"]);
  let [text, setText] = useState("");


   function onSubmit(event) {
    event.preventDefault();

    let newList = [...list, text];
    SetList(newList);
    setText("");
  }

    return (
      <div>
        <h1>Studio Ghibli Films </h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    );
  }



export default App;

