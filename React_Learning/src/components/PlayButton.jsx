import "./PlayButton.css";

function PlayButton({ children, onPlay, onPause }) {
  let playing = false;
  function handleClick(e) {
    // This will help in to prevent event Bubbling which disable other function to execute without any reason.
    e.stopPropagation();
  
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    playing = !playing;
  }
  return (
    <button onClick={handleClick}>
      {children} : {playing ? ">" : "||"}
    </button>
  );
}

export default PlayButton;
