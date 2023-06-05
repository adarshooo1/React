import React from "react";
import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div className="App" onClick={console.log("App")}>
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
