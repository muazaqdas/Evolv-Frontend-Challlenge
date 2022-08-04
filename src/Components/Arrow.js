import React from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import {AiOutlineExclamation} from 'react-icons/ai'

function Arrow(props){


    const navigate = useNavigate();
    function handleClick(){
        navigate(props.path)
    }
    const feedback = props.feedback;
    return(
        <>
        {/* <div className='col-3'> */}
            <button  className={`btn btn-dark arrow-button  mx-auto ${feedback ? "redColor": ""}`} onClick={handleClick}>
            {(feedback) ? <AiOutlineExclamation/> :<IoIosArrowForward className='arrow'/> }
            </button>
        {/* </div> */}
        </>
    )
}

export default Arrow;