import './App.css'
import Video from './Components/Video'
import Image from './Components/Image'

// How to import multiple funciton from a single component file.
// import { Video  , Thumbnail} from './Components/Video'


function app() {
  return (
    <div>
      <div>Hello</div>
      <Video></Video>
      <Image></Image>
      {/* <Thumbnail></Thumbnail> */}
    </div>
  )


}



export default app
