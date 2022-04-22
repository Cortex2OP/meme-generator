import data from "../data";
import react, { useState } from "react";

const randomIntFromInterval = function (min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};




export default function MainContent() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: {getRandomMeme}
  });
  
  const [allMemeImages, setAllMemeImages] = useState(data.data.memes);
  
  
  function getRandomMeme() {
    const array = allMemeImages;
    const randomNumber = randomIntFromInterval(1, 100);
    const url = array[randomNumber].url;
    setMeme(url);
    //return url;
  };
  
  return (
    <main className="main">
      <form className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
        ></input>
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text"
        ></input>
        <br></br>
        <button type="button" onClick={getRandomMeme} className="btnNewMeme">
          Get a new meme
        </button>
      </form>
      <div className="memeDiv">
        <img className="memeImg" src={meme}></img>
      </div>
    </main>
  );
}

/*  const getRandomMeme = function() {
    const array = data.data.memes;
    const randomNumber = randomIntFromInterval(1,100);
    setMemeImage(data.data.memes[randomNumber].url);
  }
  */
