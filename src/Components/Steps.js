import React,{useState} from "react";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// import UserData from '../Data/users.json'

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Steps(props) {

  const [targetValue, setValue] = useState(props.targetSteps);

  function handleCLickPlus(){
    setValue((prevValue)=> prevValue+500);
  }
  function handleCLickMinus(){
    setValue((prevValue)=> prevValue-500);
  }

    return (
      <div className="row d-flex justify-content-center align-items-center">
        <div className='circle-bar col-6 '>
          <CircularProgressbarWithChildren  value={props.value} maxValue={props.maxValue}>
          <p className='Digits'>{props.digit}</p>
          <p className='subtitle'>{props.subtitle1}</p>
          </CircularProgressbarWithChildren>
        </div>
        <div className="col-6 justify-content-center align-items-center text-center">
          <button className=" btn btn-dark plus-minus" onClick={handleCLickPlus}>
            <AiOutlinePlus className="plus" size={14} />
          </button>
          <h5 className="m-0 p-0 fw700">{`${targetValue/1000}K`}</h5>
          <p className="m-0 p-0 subtitle">{props.subtitle2}</p>
          <button className="btn btn-dark plus-minus" onClick={handleCLickMinus}>
            <AiOutlineMinus className="minus" size={14} />
          </button>
      </div>
    </div>
  );
}

export default Steps;
