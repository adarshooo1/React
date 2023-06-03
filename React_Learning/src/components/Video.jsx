import "./Video.css";

// Defining Video Component as well as giving a default prop in case If used missed to give his props on view so it will handle the views and giving a default value.
function Video({ title, channel, views = "0", time, verified, id }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Random Images"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}
        </div>
        <div className="views">
          {views} Views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
