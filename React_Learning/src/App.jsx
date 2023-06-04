import React from "react";
import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div className="App">
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
        />
      ))}

      <div style={{clear:"both"}}>
      <PlayButton name="Play" message="Vedio Played"/>
      <PlayButton name="Pause" message="Vedio Paused"/>
      </div>
    </div>
  );
}

export default App;
