import React, { useState } from "react";
import "./App.css";
import Video from "./components/Video";
import videoDB from "./data/data";
import PlayButton from "./components/PlayButton";
import Counter from "./components/counter";

function App() {
  const handleAppClick = () => {
    console.log("App");
  };

  const [videos, setVideos] = useState(videoDB);
  return (
    <div className="App" onClick={handleAppClick}>
      <div>
        <button
          onClick={() => {
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                title: "MERN Tutorial",
                channel: "CoralMerns",
                views: "10k",
                time: "3 year ago",
                verified: false,
              },
            ]);
          }}
        >
          Add Video
        </button>
      </div>
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
      <Counter />
    </div>
  );
}

export default App;
