import './App.css'
import Video from './Components/Video'


// How to import multiple funciton from a single component file.
// import { Video  , Thumbnail} from './Components/Video'


function app() {
  let topic = "React js"
  let className = "Message"
  return (
      <>
      
      <div className='App'>
        <div>Video</div>

        <div className='Video'>
          <Video
          title="React JS Tutorial"
          Views="10k"
          time="1 yearAgo"
          channel="Adarsh Singh">
          </Video>

          <Video title="Node JS Tutorial"
          Views="100k"
          time="3
          year Ago"
          channel="WebDev">
          </Video>

          <Video title="Mongo db"
          Views="120k"
          time="5 year Ago"
          channel="Code Bros">
          </Video>
        </div>
      </div>
    </>
  )


}



export default app
