import React from 'react';
import UserData from '../Data/users.json'

function Dashboard(){

    return(
        <div className='dashboard'>
        {UserData.map((data,index) => {
            return(
                <div className='userRow'>
                    
                </div>
            );
        })}
        </div>
    );
}

export default Dashboard;