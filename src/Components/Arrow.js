import React from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

function Arrow(props){

    const navigate = useNavigate();
    function handleClick(){
        navigate(props.path)
    }
    
    return(
        <>
        <div className='col-3'>
            <button className='btn btn-dark arrow-button  mx-auto' onClick={handleClick}>
                <IoIosArrowForward className='arrow'/>
            </button>
        </div>
        </>
    )
}

export default Arrow;