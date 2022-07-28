import React from 'react';
import UserData from '../Data/users.json'
import './styles.css'
import {BiUserCheck,BiWalk} from 'react-icons/bi'
import {TbCalendarTime} from 'react-icons/tb'
import {IoIosArrowForward} from 'react-icons/io'
import {FaRegBell,FaDumbbell,FaConciergeBell} from 'react-icons/fa'

import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { PieChart } from 'react-minimal-pie-chart';



function Arrow(){
    return(
        <>
        <div className='col-1'>
            <div className='arrow-button mx-auto w-50'>
                <IoIosArrowForward className='arrow'/>
            </div>
        </div>
        </>
    )
}

function CircleBar(props){
    return(
    <div className='circle-bar col-1'>
        <CircularProgressbarWithChildren  value={props.value} maxValue={props.maxValue}>
        <p className='Digits'>{props.digit}</p>
        <p className='subtitle'>{props.subtitles}</p>
        </CircularProgressbarWithChildren>
    </div>)
}

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
                    <div key={index} className='userRow row d-flex justify-content-center align-items-center'>
                        <div className='col-1'>
                            <div className="user my-3 mx-auto">
                            </div>
                        </div>
                        <div className='col-2 text-start'>
                            <h5>{data.name}</h5>
                            <p>{data.email}</p>
                        </div>
                        <CircleBar value={data['steps walked']}  maxValue={4000} digit={data['steps walked']} subtitles={"Walked"}/>
                        <div className='col-1 justify-content-center align-items-center'>
                            <h4 className='m-0 p-0'>{data['steps target']}</h4>
                            <p className='m-0 p-0'>Target</p>
                        </div>
                        <div className='col-2 date justify-content-center align-items-center'>
                            <h5 className='pt-1 pb-1 justify-content-center align-items-center'><BiUserCheck size={24}/>  {data.performedDate}</h5>
                            <h5 className='justify-content-center align-items-center'><TbCalendarTime size={24}/>  {data.scheduledDate}</h5>
                        </div>
                        <Arrow/>
                        <CircleBar value={data.calorieIntake}  maxValue={4000} digit={data.calorieIntake} subtitles={"Calories"}/>
                        <div className='col-1'>
                            <h4 className='m-0 p-0'>{data.calorieTarget}</h4>
                            <p className='m-0 p-0'>Target</p>
                        </div>
                        <div className='col-1'>
                        <PieChart
                            lineWidth={25}
                            data={[
                                { title: 'Carbs', value: data.carbConsumed, color: '#F5C90F' },
                                { title: 'Fat', value: data.fatConsumed, color: '#03C7FC' },
                                { title: 'Protein', value: data.proteinConsumed, color: '#F45C84'},
                            ]}
                            />
                        </div>
                        <Arrow/>
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