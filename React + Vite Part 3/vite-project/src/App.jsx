import './App.css'
import Video from './Components/Video'


// How to import multiple funciton from a single component file.
// import { Video  , Thumbnail} from './Components/Video'


function app() {

  let videos = [{
    id : 1,
    title: 'React Js tutorial',
    views: '10k',
    time: '1 year ago',
    channel: "Let's Code In",
    verified : false,
},
{
  id : 2,
  title: 'Node Js tutorial',
  views: '100k',
  time: '2 year ago',
  channel: "Mocha Coding",
  verified : true,
},
{
  id : 3,
  title: 'Life Style',
  views: '1M',
  time: '1  months ago',
  channel: "5 Min hack",
  verified : false,
}];


  return (
      <>
      <div className='App'>
        <div>Video</div>

        <div className='Video'>
          {
            videos.map(video =><Video
                  title={video.title}
                  views={video.views}
                  time={video.time}
                  channel={video.channel}
                  verified={video.verified}
             ></Video>
            )
          }

          {/* <Video
          verified={true}
          title="Mongo db"
          views="120k"
          time="5 year Ago"
          channel="Code Bros">
          </Video> */}
        </div>
      </div>
    </>
  )

}

export default app
