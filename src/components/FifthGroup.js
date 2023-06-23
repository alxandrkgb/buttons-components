import React from 'react';

function FifthGroup () {
    return (
        <div className='GroupFive'>
            <div>
            <p className='GrpFiveTitle'>{'<Button disabled />'}</p>
            <button className='GroupFiveButton GrpFiveButtonOne'>Disabled</button>
            </div>

            <div>
            <p className='GrpFiveTitle'>{'<Button variant=”text” disabled />'}</p>
            <button className='GroupFiveButton GrpFiveButtonTwo'>Disabled</button>
            </div>
        </div>
    );
}

export default FifthGroup;