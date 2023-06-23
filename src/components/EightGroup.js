import React from 'react';

function EightGroup () {
    return (
        <div className='GroupEight'>
            <div>
            <p className='GrpEightTitle'>{'<Button color=”default” />'}</p>
            <button className='GroupEightButton GrpEightButtonOne'>Default</button>
            </div>

            <div>
            <p className='GrpEightTitle'>{'<Button color=”primary” />'}</p>
            <button className='GroupEightButton GrpEightButtonTwo'>Default</button>
            </div>

            <div>
            <p className='GrpEightTitle'>{'<Button color=”secondary” />'}</p>
            <button className='GroupEightButton GrpEightButtonThree'>Default</button>
            </div>

            <div>
            <p className='GrpEightTitle'>{'<Button color=”danger” />'}</p>
            <button className='GroupEightButton GrpEightButtonFour'>Default</button>
            </div>
        </div>
    );
}

export default EightGroup;