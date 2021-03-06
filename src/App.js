import React, { useState } from "react";
import "./styles.css";

var welcome = "Inside Out!!!";

var emojiDictionary = {
  "ðĪŠ": "Crazy Face",
  "ð": "Grinning Face",
  "ð": "Smiling Face With Open Mouth",
  "ð": "Smiling Face With Open Mouth & Cold Sweat",
  "ð": "Face With Tears of Joy",
  "ðĪĢ": "Rolling On The Floor, Laughing",
  "ð": "Smiling Face",
  "ð": "Smiling Face With Halo",
  "ð": "Slightly Smiling Face",
  "ð": "Smiling Face With Open Mouth & Cold Sweat",
  "ð": "Beaming face with smiling eyes",
  "ðŽ": "Grimacing Face",
  "ð": "Grin",
  "ð": "Grinning Squinting face",
  "ð": "Wink",
  "ð": "Face savouring food",
  "ð": "Smiling face with glasses on",
  "ð": "Heart Eyes",
  "ð": "Kissing Heart",
  "ð": "Kissing",
  "ð": "Kissing face with smiling eyes",
  "ð": "Kissing with closed eyes",
  "ðĪ": "Hugging"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, inputTextHandler] = useState("");

  function inputChangeHandler(event) {
    var inputEmoji = event.target.value;
    if (inputEmoji in emojiDictionary) {
      meaning = emojiDictionary[inputEmoji];
    } else if (inputEmoji === "") {
      meaning = "";
    } else {
      meaning = "This emoji is not available.";
    }
    inputTextHandler(meaning);
  }
  function clickHandler(item) {
    meaning = emojiDictionary[item];
    inputTextHandler(meaning);
  }
  return (
    <div className="App">
      <h1>{welcome}</h1>
      <h2>Insert an emoji to check its meaning</h2>
      <input onChange={inputChangeHandler}></input>
      <div id="output">{meaning}</div>
      {emojiList.map((item) => {
        return (
          <span
            key={item}
            onClick={() => clickHandler(item)}
            style={{ cursor: "pointer", fontSize: "2rem", padding: "0.5rem" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
