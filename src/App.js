import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😀": "Happy",
  "😂": "Laughing",
  "🥰": "Lovely",
  "😑": "annoyance",
  "😞": "Sad",
  "😨": "Scared",
  "😡": "Angry Face ",
  "🥶": "Cold Face ",
  "😎": "Smiling emoji with sunglasses ",
  "😁": "Beaming Face ",
  "😆": "Grinning squinting Face ",
  "😋": "Food sovouring Face ",
  "😘": "Blowing a kiss Face ",
  "🤩": "Star-Struck ",
  "🙄": "Face with rolling-eyes"
};

var emojiWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickhandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Out!</h1>
      <h3>
        This app will tell you the meaning/name of the emoji, you can put your
        emoji in the white box. <br></br> -developer{" "}
        <a class="link" href="https://www.instagram.com/tejasjadhav___/">
          Tejas
        </a>
      </h3>
      <br></br>
      <input onChange={emojiInputHandler} />
      <h2>{meaning} </h2>
      <h3>emojis we know</h3>
      {emojiWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickhandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
