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

                        <div className='col-lg-2 col-md-2 '>{"  "} </div>
                        <div className='col-lg-2 col-md-3 steps'><BiWalk className='' size={25}/> STEPS</div>
                        <div className='col-lg-2 col-md-3 workout'>
                            <FaDumbbell className=' r-icon' size={20}/> WORKOUT
                        </div>
                        <div className='col-lg-2 col-md-3 mx-3 '>
                            <FaConciergeBell className='' size={20}/> NUTRITION
                        </div>
                        <div className='col-4 blank'>{"  "} </div>
            </nav>

            {UserData.map((data,index) => {
                return(
                    <div key={index} className='userRow row d-flex justify-content-between align-items-center'>
                        {/* ................. */}
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='row d-flex justify-content-center align-items-center'>
                                <div className='col-3'>
                                    <div className="user">
                                    </div>
                                </div>
                                <div className='col-9 ps-2 text-start'>
                                    <h5 className='name m-0 p-0'>{data.name}</h5>
                                    <p className='mail m-0 p-0'>{data.email}</p>
                                </div>
                            </div>
                        </div>
                        {/* ............ */}
                        <div className='col-lg-2 col-md-4 col-sm-12'>
                            <Steps index={index} value={data["steps walked"]} maxValue={data['steps target']} digit={data["steps walked"]} subtitle1={"Walked"} targetSteps={data['steps target']} subtitle2={"Target"}/>
                        </div>
                        {/* ................ */}
                        <div className='col-lg-3 col-md-4 col-sm-12'>
                            <div className='row d-flex justify-content-center align-items-center p-0 '>
                                <div className='col-lg-5 col-md-7 col-sm-8 p-0 m-0 text-center date justify-content-center align-items-center'>
                                    <button className='btn btn-dark '><BiUserCheck className='p-0 m-0' size={28}/>  {data.performedDate}</button>
                                    <button className={`btn btn-dark  ${(data.performedDate===data.scheduledDate) && "redColor"}`}><TbCalendarTime className='p-0 m-0' size={28}/>  {data.scheduledDate}</button>
                                </div>
                                <div className='col-3  dateArrow'>
                                    <Arrow feedback={data.feedback}  path={`/${data.userId}/workout`} />
                                </div>
                            </div>
                        </div>
                        {/* ................. */}
                        <div className='col-lg-3 col-md-5 col-sm-12 nutrition'>
                            <Nutrition 
                                title={data.calorieIntake} 
                                calorieIntake={data.calorieIntake} 
                                path={`/${data.userId}/nutrition`} 
                                carbConsumed={data.carbConsumed} 
                                fatConsumed={data.fatConsumed} 
                                proteinConsumed={data.proteinConsumed} 
                                carbTarget={data.carbTarget} 
                                fatTarget={data.fatTarget} 
                                proteinTarget={data.proteinTarget} 

                                calorieTarget={data.calorieTarget} />
                        </div>
                        {/* .............. */}
                        <div className=' col-lg-1 col-md-2 justify-conten-center align-items-center'>
                        <div className='row bellRow'>
                            <FaRegBell className='bell-icon p-2 my-3 justify-conten-center align-items-center' size={40}/>
                        </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Dashboard;