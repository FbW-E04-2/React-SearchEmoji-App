
import React,{useState} from 'react';
import Header from './components/Header';
import EmojiContainer from './components/EmojiContainer';
import data from "./json/emoji.json"


function App() {

  const [emojisList,setEmojisList]  = useState(data) // => [10]

  const searchEmojis =(e) => {
    console.log(e.target.value)
    let searchedEmojis= data.filter(emoji=> emoji.keywords.includes(e.target.value))  //=>200

    setEmojisList(searchedEmojis)
  }

  return (
    <div className="App">
        <Header/>
        <div style={{textAlign:"center"}}>
          <input type="text" name="search" onChange={searchEmojis} style={{display:"inline-block", width:"30%", padding:"5px",borderRadius:"10px"}}/>
        </div>
        <EmojiContainer emojisList= {emojisList}/>

    </div>
  );
}


export default App;



//deployment steps 
// 1: add homepage property in package json
    //"homepage":"."
//2. install gh-pages (npm i gh-pages)
//3. add 2 more scripts into your package json file
    /* "scripts":{
      ....
      "predeploy": "npm run build",
      "deploy":"gh-pages -d build"
    }
    */
//4. make sure that you have remote origin( repo is connected to github)

//5. deploy your project : npm run deploy