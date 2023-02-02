import { useState } from "react";


function HomePage(props) {
  let [list, setList] = useState(["ready", "set", "GO"]);
  let [text, setText] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    let newList = [...list, text];
    setList(newList);
    setText("");
  }


  return (
    <div>
      <h1 class="H1-center"><span className="studio">Studio Ghibli Films</span></h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="listitem"
          id="listitem"
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
    </div>
  );
}

export default HomePage;