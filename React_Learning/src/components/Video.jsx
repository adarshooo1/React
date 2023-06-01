import "./Video.css";

function Vedio({ title, channel, views, time }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://picsum.photos/120/90" alt="Random Images" />{" "}
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} Views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Vedio;
