import React from 'react';

import './styles.css'

function Bar(props){
    return(
    <div className='row progressBar m-0 p-0'>
    <div><span className='progHead m-0 p-0'>{props.nutrient}</span><span className='targetValue m-0 p-0'>{props.target}</span></div>
    <div className='progress m-0 p-0'></div>
    <div style={{width:`${props.w}%`, backgroundColor:`${props.bg}`}} className="progressIn"></div>
    </div>

    )
}

function ProgressBar(props){
    return(
        <div>
           <Bar nutrient={"Protein"} bg={"#F45C84"} w={(props.proteinConsumed/props.proteinTarget)*90} target={props.proteinTarget} consumed={props.proteinConsumed}/>
           <Bar nutrient={"Fats"} bg={"#03C6FA"} w={(props.fatConsumed/props.fatTarget)*90} target={props.fatTarget} consumed={props.fatConsumed}/>
           <Bar nutrient={"Carbs"} bg={"#F0C50F"} w={(props.carbConsumed/props.carbTarget)*90} target={props.carbTarget} consumed={props.carbConsumed}/>

        </div>
    )
}

export default ProgressBar;