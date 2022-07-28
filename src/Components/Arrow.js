import React from 'react';
import {IoIosArrowForward} from 'react-icons/io'

function Arrow(){
    return(
        <>
        <div className='col-3'>
            <div className='arrow-button mx-auto'>
                <IoIosArrowForward className='arrow'/>
            </div>
        </div>
        </>
    )
}

export default Arrow;