import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

const Translate = () => {
  const [langauge, setLangauge] = useState(options[0]);
  const [text, setText] = useState("Hello World");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            placeholder="enter text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
      label = "Select Langauge"
        options={options}
        selected={langauge}
        onSeletedChange={setLangauge}
      />
      <hr/>
      <h1 className = "ui header">

      </h1>
      <Convert langauge = {langauge} text = {text}/>
    </div>
  );
};

export default Translate;
