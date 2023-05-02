import './Video.css';

export default function Video({id, title = "" , channel = "" , Views = "0" , time , verified}){

    // let verifiedChannel;
    //     if(verified) {
    //     verifiedChannel = <div className='channel'>{channel}✅</div>
    //     } else{
    //         verifiedChannel = <div className='channel'>{channel}</div>
    //     }

    return(
    <>
    <div className='container'>
    <div className='pic'>
    <img src={`https://loremflickr.com/200/160/${id}`} alt="RandomImage"/>
    </div>
    <div className='title'>{title}</div>
    <div className='channel'>{channel} {verified ? '✅' : null}</div>
    <div className='views'>
        {Views} Views <span>.</span> {time} </div>
    </div>

    </>
    )
} 