import React from "react";
import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

function App() {
  const handleAppClick = () => {
    console.log("App clicked");
  };

  return (
    <div className="App" onClick={handleAppClick}>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
        >
          <PlayButton
            className="ply-btn"
            // onClick = {handleAppClick}
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
}

export default App;
