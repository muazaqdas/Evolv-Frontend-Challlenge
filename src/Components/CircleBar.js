import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function CircleBar(props){
    return(
    <div className='circle-bar col-6'>
        <CircularProgressbarWithChildren  value={props.value} maxValue={props.maxValue}>
        <p className='Digits'>{props.digit}</p>
        <p className='subtitle'>{props.subtitles}</p>
        </CircularProgressbarWithChildren>
    </div>)
}

export default CircleBar;