import './Video.css';

export default function Video({title , channel , Views , time}){
    return(
    <>
    <div className='Container'>
    <div className='pic'>
    <img src="https://loremflickr.com/200/160/wallpaper" alt="RandomImage" />
    </div>
    <div className='title'>{title}</div>
    <div className='channel'>{channel}</div>
    <div className='views'>
        {Views} Views <span>.</span> {time} </div>
    </div>

    </>
    )
} 