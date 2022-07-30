import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import Arrow from "./Arrow";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// import ProgressBar from './ProgressBar'
import Tooltip from "./Tooltip/Tooltip";


function Nutrition(props) {

    const [calorie, setValue] = useState(props.calorieTarget);

    function handleCLickPlus(){
      setValue((prevValue)=> prevValue+1000);
    }
    function handleCLickMinus(){
      setValue((prevValue)=> prevValue-1000);
    }



  return (
    <div className="row d-flex justify-content-center align-items-center">
        <div className="col-5 ">
            <Tooltip 
                children=
                {<PieChart
                lineWidth={25}
                data={[
                    { title: "Carbs", value: props.carbConsumed, color: "#F5C90F" },
                    { title: "Fat", value: props.fatConsumed, color: "#03C7FC" },
                    { title: "Protein", value: props.proteinConsumed, color: "#F45C84" },
                ]}
                />}
                
                carbConsumed={props.carbConsumed} 
                fatConsumed={props.fatConsumed} 
                proteinConsumed={props.proteinConsumed} 
                carbTarget={props.carbTarget}  fatTarget={props.fatTarget} proteinTarget={props.proteinTarget} 
                >
                {/* <PieChart
                lineWidth={25}
                data={[
                    { title: "Carbs", value: props.carbConsumed, color: "#F5C90F" },
                    { title: "Fat", value: props.fatConsumed, color: "#03C7FC" },
                    { title: "Protein", value: props.proteinConsumed, color: "#F45C84" },
                ]}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                /> */}
            </Tooltip>
        </div>
      <div className="col-2 m-0 p-0 text-center me-3">
        <button className=" btn btn-dark plus-minus" onClick={handleCLickPlus}>
            <AiOutlinePlus className="plus" size={14} />
            </button>

            <h5 className="m-0 p-0 fw700"> {`${calorie/1000}K`}</h5>
            <p className="m-0 p-0 subtitle">Target</p>
            <button className="btn btn-dark plus-minus" onClick={handleCLickMinus}>
            <AiOutlineMinus className="minus" size={14} />
            </button>
      </div>
      <Arrow path={props.path}/>
    </div>
  );
}

export default Nutrition;
