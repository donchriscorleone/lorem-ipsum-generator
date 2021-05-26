import React, { useState, useEffect } from "react";
import text from "./data";

const App = () => {
  const [count, setCount] = useState("");
  const [content, setContent] = useState([]);

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count < 0) {
      amount = 0;
    }
    if (count > text.length) {
      amount = text.length - 1;
    }

    setContent(text.slice(0, amount));
  };
  return (
    <>
      <div className="heading">
        <h1>Lorem Ipsum Generator Paragraph</h1>
      </div>
      <div className="form">
        <label htmlFor="paragraph">Paragraphs</label>
        <input
          type="number"
          name="paragraph"
          value={count}
          onChange={handleChange}
        />
        <button onClick={handleGenerate}>Generate</button>
      </div>
      {content.map((c, index) => {
        return (
          <div className="content-container">
            <p className="content">{c}</p>
          </div>
        );
      })}
    </>
  );
};

export default App;
