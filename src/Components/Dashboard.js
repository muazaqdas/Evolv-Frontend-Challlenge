import React from 'react';
import UserData from '../Data/users.json'
import Arrow from './Arrow';


import './styles.css'




import {BiUserCheck,BiWalk} from 'react-icons/bi'
import {TbCalendarTime} from 'react-icons/tb'
import {FaRegBell,FaDumbbell,FaConciergeBell} from 'react-icons/fa'

import Steps from './Steps';
// import { Link } from 'react-router-dom';
import Nutrition from './Nutrition';







function Dashboard(){

    return(
        <div className='dashboard'>
            <nav className=' content row d-flex justify-content-center my-3 pb-2'>

                        <div className='col-2 '>{"  "} </div>
                        <div className='col-2   steps'><BiWalk className='' size={25}/> STEPS</div>
                        <div className='col-2 workout'>
                            
                                <FaDumbbell className=' r-icon' size={20}/> WORKOUT
                          
                        </div>
                        <div className='col-2  mx-3 nutrition'>
                           
                                <FaConciergeBell className='' size={20}/> NUTRITION
                            
                        </div>
                        <div className='col-4 blank'>{"  "} </div>
            </nav>

            {UserData.map((data,index) => {
                return(
                    <div key={index} className='userRow row d-flex justify-content-between align-items-center'>
                        {/* ................. */}
                        <div className='col-3'>
                            <div className='row d-flex justify-content-center align-items-center'>
                                <div className='col-3'>
                                    <div className="user">
                                    </div>
                                </div>
                                <div className='col-9 ps-2 text-start'>
                                    <h5 className='m-0 p-0'>{data.name}</h5>
                                    <p className='m-0 p-0'>{data.email}</p>
                                </div>
                            </div>
                        </div>
                        {/* ............ */}
                        <div className='col-2'>
                            <Steps index={index} value={data["steps walked"]} maxValue={data['steps target']} digit={data["steps walked"]} subtitle1={"Walked"} targetSteps={data['steps target']} subtitle2={"Target"}/>
                        </div>
                        {/* ................ */}
                        <div className='col-2'>
                            <div className='row d-flex justify-content-center align-items-center'>
                                <div className='col-7 text-start date justify-content-center align-items-center'>
                                    <h5 className='p-0 m-0 '><BiUserCheck className='p-0 m-0' size={28}/>  {data.performedDate}</h5>
                                    <h5 className='p-0 m-0 '><TbCalendarTime className='p-0 m-0' size={28}/>  {data.scheduledDate}</h5>
                                </div>
                                    <Arrow path={`/${data.userId}/workout`} />
                            </div>
                        </div>
                        {/* ................. */}
                        <div className='col-2'>
                            <Nutrition path={`/${data.userId}/nutrition`} carbConsumed={data.carbConsumed} fatConsumed={data.fatConsumed} proteinConsumed={data.proteinConsumed} calorieTarget={data.calorieTarget} />
                        </div>
                        {/* .............. */}
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