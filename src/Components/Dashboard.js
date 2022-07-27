import React from 'react';
import UserData from '../Data/users.json'
import './styles.css'
import {BiUserCheck,BiWalk} from 'react-icons/bi'
import {TbCalendarTime} from 'react-icons/tb'
import {IoIosArrowForward} from 'react-icons/io'
import {FaRegBell,FaDumbbell,FaConciergeBell} from 'react-icons/fa'


function Dashboard(){

    return(
        <div className='dashboard'>
            <nav className=' content row d-flex my-3 pb-2'>

                        <div className='col-2 pe-3'>{" "} </div>
                        <div className='col-3 pe-3  steps'><BiWalk className='me-2' size={25}/> STEPS</div>
                        <div className='col-3 pe-3 workout'><FaDumbbell className='me-2 r-icon' size={20}/> WORKOUT</div>
                        <div className='col-3 pe-3 nutrition'><FaConciergeBell className='me-2' size={20}/> NUTRITION</div>
            </nav>

            {UserData.map((data,index) => {
                return(
                    <div key={index} className='userRow row d-flex'>
                        <div className='col-3 text-start'>
                            <h5>{data.name}</h5>
                            <p>{data.email}</p>
                        </div>
                        <div className='circle-bar col-1'>
                            <h5>{data['steps walked']}</h5>
                            <p>Walked</p>
                        </div>
                        <div className='col-1'>
                            <h4>{data['steps target']}</h4>
                            <p>Target</p>
                        </div>
                        <div className='col-2 date justify-content-center align-items-center'>
                            <h5 className='pt-1 pb-1 justify-content-center align-items-center'><BiUserCheck size={24}/>  {data.performedDate}</h5>
                            <h5 className='justify-content-center align-items-center'><TbCalendarTime size={24}/>  {data.scheduledDate}</h5>
                        </div>
                        <div className='col-1'>
                            <div className='arrow-button  h-100 w-50'>
                            <IoIosArrowForward className='arrow'/>
                            </div>
                        </div>
                        <div className='circle-bar col-1'>
                            <h5>{data.calorieIntake}</h5>
                            <p>clories</p>
                        </div>
                        <div className='col-1'>
                            <h4>{data.calorieTarget}</h4>
                            <p>Target</p>
                        </div>
                        <div className='col-1'>
                            <div className='arrow-button  h-100 w-50'>
                            <IoIosArrowForward className='arrow'/>
                            </div>
                        </div>
                        <div className=' col-1 justify-conten-center align-items-center'>
                            <FaRegBell className='bell-icon p-2 my-3 justify-conten-center align-items-center' size={40}/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Dashboard;