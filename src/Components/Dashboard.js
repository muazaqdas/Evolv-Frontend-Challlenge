import React from 'react';
import UserData from '../Data/users.json'
import './styles.css'

import Arrow from './Arrow';
import CircleBar from './CircleBar';

import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

import {BiUserCheck,BiWalk} from 'react-icons/bi'
import {TbCalendarTime} from 'react-icons/tb'
import {FaRegBell,FaDumbbell,FaConciergeBell} from 'react-icons/fa'

import { PieChart } from 'react-minimal-pie-chart';







function Dashboard(){

    return(
        <div className='dashboard'>
            <nav className=' content row d-flex justify-content-center my-3 pb-2'>

                        <div className='col-2 '>{"  "} </div>
                        <div className='col-2   steps'><BiWalk className='' size={25}/> STEPS</div>
                        <div className='col-2 workout'><FaDumbbell className=' r-icon' size={20}/> WORKOUT</div>
                        <div className='col-2  mx-3 nutrition'><FaConciergeBell className='' size={20}/> NUTRITION</div>
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
                            <div className='row d-flex justify-content-center align-items-center'>
                                <CircleBar value={data['steps walked']}  maxValue={4000} digit={data['steps walked']} subtitles={"Walked"}/>
                                <div className='col-3 justify-content-center align-items-center'>

                                <button className=' btn btn-dark plus-minus'><AiOutlinePlus className='plus' size={14}/></button>
                                    <h5 className='m-0 p-0 fw700'>{data['steps target']}</h5>
                                    <p className='m-0 p-0 subtitle'>Target</p>
                                    <button className='btn btn-dark plus-minus'><AiOutlineMinus className='minus' size={14}/></button>
                                </div>
                            </div>
                        </div>
                        {/* ................ */}
                        <div className='col-2'>
                            <div className='row d-flex justify-content-center align-items-center'>
                                <div className='col-7 text-start date justify-content-center align-items-center'>
                                    <h5 className='p-0 m-0 '><BiUserCheck className='p-0 m-0' size={28}/>  {data.performedDate}</h5>
                                    <h5 className='p-0 m-0 '><TbCalendarTime className='p-0 m-0' size={28}/>  {data.scheduledDate}</h5>
                                </div>
                                <Arrow />
                            </div>
                        </div>
                        {/* ................. */}
                        <div className='col-2'>
                            <div className='row d-flex justify-content-center align-items-center'>
                                <div className='col-6'>
                                <PieChart
                                    lineWidth={25}
                                    data={[
                                        { title: 'Carbs', value: data.carbConsumed, color: '#F5C90F' },
                                        { title: 'Fat', value: data.fatConsumed, color: '#03C7FC' },
                                        { title: 'Protein', value: data.proteinConsumed, color: '#F45C84'},
                                    ]}
                                    />
                                </div>
                                <div className='col-3 m-0 p-0'>
                                    <h5 className='m-0 p-0 fw700'>{data.calorieTarget}</h5>
                                    <p className='m-0 p-0 subtitle'>Target</p>
                                </div>
                                <Arrow/>

                            </div>
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